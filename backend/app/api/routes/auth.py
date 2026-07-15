from typing import Annotated
from fastapi import APIRouter, Depends, status, Response
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

@router.post("/login", status_code=status.HTTP_200_OK)
def login_user(credentials: UserLogin, db: DatabaseSession, response: Response):
    token = auth_service.login(credentials, db)

    response.set_cookie(
        key="access_token",
        value=token,
        httponly=True,
        secure=False, 
        samesite="lax",
        max_age=60 * 30,
        path="/",
    )

    return {"message": "Login successful"}

@router.post("/logout", status_code=status.HTTP_200_OK)
def logout_user(response: Response):
    response.delete_cookie(
        key="access_token",
        path="/",
    )

    return {"message": "Logout successful"}