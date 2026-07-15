from sqlalchemy.orm import Session
from sqlalchemy import select

from app.schemas.user import UserCreate
from app.schemas.auth import TokenResponse, UserLogin
from app.models.user import User
from fastapi import HTTPException, status
from app.core.security import hash_password, verify_password, create_access_token

def register(
        user: UserCreate,
        db: Session
) -> User: 
    existing_user = db.scalar(
        select(User).where(User.email == user.email)
    )

    if existing_user is not None:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Email already registered"
        )
    
    hashed_password = hash_password(user.password)

    new_user = User(
        email=user.email,
        hashed_password = hashed_password,
        first_name =user.first_name,
        last_name=user.last_name
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return new_user

def login(
        credentials: UserLogin,
        db: Session
) -> str:
    user = db.scalar(select(User).where(User.email == credentials.email))

    if user is None or not verify_password(credentials.password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password"
        )
    
    return create_access_token(str(user.id))

    
    

    

