# Alpine is a minimal Linux distro — keeps the image small
FROM node:24-alpine

# Root workspace dir — npm needs the root package.json to resolve workspaces
WORKDIR /app

# Copy root manifest and lockfile first so the npm ci layer is only invalidated when dependencies change
COPY package*.json ./
# Copy workspace manifest so npm knows about this workspace's dependencies
COPY client/package.json ./client/

# ci is stricter than install — respects the lockfile exactly, scoped to this workspace
RUN npm ci -w client

# Copy only the client source — no need to copy the entire repo
COPY client/ ./client/

# Switch into the client workspace — docker exec lands here
WORKDIR /app/client

# Tell Docker this container listens on port 5173
EXPOSE 5173

# keeps the container alive so you can exec in and run commands manually
# Exec in with: docker exec -it stockwise_client sh
# Then run: npm run dev -- --host
CMD ["tail", "-f", "/dev/null"]

