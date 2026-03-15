from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import SessionLocal
from app.auth.user_schema import UserCreate, UserLogin
from app.auth.service import register_user, login_user
from app.auth.jwt_handler import decode_token, create_access_token

router = APIRouter(
    prefix="/auth",
    tags=["Auth"]
)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/register")
def register(user: UserCreate, db: Session = Depends(get_db)):

    created_user = register_user(
        db,
        user.username,
        user.email,
        user.password
    )

    return {
        "message": "User created",
        "user_id": created_user.id
    }


@router.post("/login")
def login(user: UserLogin, db: Session = Depends(get_db)):

    tokens = login_user(db, user.email, user.password)

    if not tokens:
        raise HTTPException(status_code=401, detail="Invalid credentials")

    return tokens


@router.post("/refresh")
def refresh_token(refresh_token: str):

    payload = decode_token(refresh_token)

    if payload["type"] != "refresh":
        raise HTTPException(status_code=401, detail="Invalid refresh token")

    new_access = create_access_token({"user_id": payload["user_id"]})

    return {
        "access_token": new_access
    }