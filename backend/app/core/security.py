from passlib.context import CryptContext
from datetime import datetime, timedelta, timezone

import uuid
import jwt

from jwt import InvalidTokenError

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

def decode_access_token(token: str) -> uuid.UUID | None:
    try: 
        payload = jwt.decode(
            token,
            settings.jwt_secret,
            algorithms=[settings.jwt_algorithm]
        )

        subject = payload.get("sub")

        if subject is None:
            return None
        
        return uuid.UUID(subject)
    
    except (InvalidTokenError, ValueError):
        return None