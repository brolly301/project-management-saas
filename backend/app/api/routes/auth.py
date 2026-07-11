from typing import Annotated
from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.schemas.auth import TokenResponse, UserLogin
from app.schemas.user import UserCreate, UserResponse
from app.services import auth_service

router = APIRouter(
    prefix="/auth",
    tags=["Auth"]
)

DatabaseSession = Annotated[Session, Depends(get_db)]

@router.post("/register", response_model=UserResponse, status_code=status.HTTP_201_CREATED)
def register_user(
    user:UserCreate,
    db: DatabaseSession
):
    return auth_service.register(user, db)

@router.post("/login", response_model=TokenResponse)
def login_user(credentials: UserLogin, db: DatabaseSession):
    return auth_service.login(credentials, db)