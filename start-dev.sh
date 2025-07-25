#!/bin/bash

# Auto-restart development server script
echo "Starting Next.js development server with auto-restart..."

while true; do
    echo "$(date): Starting server..."
    npm run dev:stable
    echo "$(date): Server stopped. Restarting in 3 seconds..."
    sleep 3
done