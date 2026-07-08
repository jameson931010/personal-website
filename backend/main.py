from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import create_db_and_tables

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Initialize the database and tables on startup
    create_db_and_tables()
    yield

app = FastAPI(title="Personal Dashboard API", lifespan=lifespan)

# Configure CORS to allow Next.js development server
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Next.js default port
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/ping")
def ping():
    return {"status": "ok", "message": "Backend is running!"}
