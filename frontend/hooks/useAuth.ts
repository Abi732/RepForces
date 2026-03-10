"use client"

import { useState, useEffect } from "react"

export function useAuth(){
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const token = localStorage.getItem("Token");

        if(!token){
            setUser(null);
            setLoading(false);
            return;
        }

        fetch("http://localhost:8000/auth/me", {
            headers:{
                Authorization: `Bearer ${token}`,
            },
        })
        .then(res => res.json())
        .then(data => {
            setUser(data);
        })
        .catch(()=>{
            setUser(null);
        })
        .finally(()=>setLoading(false))
    }, [])
    return {user, loading}
}