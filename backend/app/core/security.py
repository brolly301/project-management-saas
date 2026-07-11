from passlib.context import CryptContext
from datetime import datetime, timedelta, timezone

import jwt

from app.core.config import settings

password_context = CryptContext(
    schemes=["bcrypt"],
    deprecated="auto"
)

def create_access_token(subject: str) -> str: 
    now = datetime.now(timezone.utc)

    payload = {
        "sub": subject,
        "iat": now,
        "exp": now + timedelta(minutes=settings.access_token_expire_minutes)
    }

    return jwt.encode(
        payload,
        settings.jwt_secret,
        algorithm=settings.jwt_algorithm
    )

def hash_password(password: str) -> str:
    return password_context.hash(password)

def verify_password(password: str, hashed_password: str) -> bool:
    return password_context.verify(password, hashed_password) 