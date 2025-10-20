# VG Interface

Shared DTOs, interfaces, and API collections for VG Monitoring Administration.

## Contents

- **dto/**: Data Transfer Objects
  - **user/**: User-related DTOs (login, create-user)
  - **tenant/**: Tenant-related DTOs (create-tenant, update-tenant, update-status)
- **VG-Monitoring-API.postman_collection.json**: Postman API collection for testing
- **VG-Monitoring.postman_environment.json**: Local development environment
- **VG-Monitoring-Production.postman_environment.json**: Production environment

## Postman Setup

### 1. Import Collection and Environment

1. Open Postman
2. Click **Import** button
3. Import all three files:
   - `VG-Monitoring-API.postman_collection.json`
   - `VG-Monitoring.postman_environment.json` (for local testing)
   - `VG-Monitoring-Production.postman_environment.json` (for production)

### 2. Select Environment

- In Postman, select the environment from the dropdown in the top-right corner
- Choose **"VG Monitoring Environment"** for local development (localhost:3001)
- Choose **"VG Monitoring Production"** for production testing

### 3. Authentication Flow

The collection automatically saves tokens to environment variables:

1. **Login**: Run the "Login" request
   - The `accessToken` is automatically saved to the environment
   - The `userId` is also saved
2. **Use Protected Endpoints**: All other requests will automatically use `{{accessToken}}`
3. **Create Tenant**: When you create a tenant, `tenantId` is automatically saved

### 4. Environment Variables

The following variables are used:

- `baseUrl`: API base URL (auto-set based on environment)
- `accessToken`: JWT token (auto-saved after login)
- `userId`: Current user ID (auto-saved after login)
- `tenantId`: Current tenant ID (auto-saved after creating tenant)

## Usage as Submodule

This package is meant to be used as a git submodule in VG Monitoring Administration projects.

```bash
git submodule add git@github.com:faissalelosman/vg-interface.git vg-interface
```
