# Alpine is a minimal Linux distro — keeps the image small
FROM node:24-alpine

# Root workspace dir — npm needs the root package.json to resolve workspaces
WORKDIR /app

# Copy root manifest and lockfile first so the npm ci layer is only invalidated when dependencies change
COPY package*.json ./
# Copy workspace manifest so npm knows about this workspace's dependencies
COPY server/package.json ./server/

# ci is stricter than install — respects the lockfile exactly, scoped to this workspace
RUN npm ci -w server

# Copy only the server source — no need to copy the entire repo
COPY server/ ./server/

# Switch into the server workspace — docker exec lands here
WORKDIR /app/server

# keeps the container alive so you can exec in and run commands manually
# Exec in with: docker exec -it stockwise_server sh
# Then run: npm run dev
CMD ["tail", "-f", "/dev/null"]

