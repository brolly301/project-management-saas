from fastapi import FastAPI

from app.api.routes.health import router as health_router
from app.api.routes.auth import router as auth_router
from app.core.config import settings

app = FastAPI(
    title=settings.app_name,
    version=settings.app_version
)

@app.get("/")
def read_root():
    return {   
        "name": settings.app_name,
        "version": settings.app_version,
        "environment": settings.environment,
        "status": "running",
        }

app.include_router(health_router)
app.include_router(auth_router)