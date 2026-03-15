from fastapi import FastAPI
from app.auth.router import router as auth_router
from app.database import Base, engine
from app.auth import models

# create tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title="RepForces API")

app.include_router(auth_router)

# from sqlalchemy import create_engine
# from app.config import DATABASE_URL

# engine = create_engine(DATABASE_URL)

# conn = engine.connect()

# print("Connected!")