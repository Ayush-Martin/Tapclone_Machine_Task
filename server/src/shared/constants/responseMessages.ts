export enum AuthResponseMessages {
  // Error Messages
  EMAIL_ALREADY_EXISTS = "User with email already exists",
  EMAIL_DONT_EXIST = "User with email doesn't exist",
  CREDENTIALS_DONT_MATCH = "Credentials don't match",
  INVALID_ACCESS_TOKEN = "Invalid token",
  CANNOT_ACCESS_ADMIN = "Cannot access admin page",
  USER_NOT_FOUND = "User not found",

  // Success Messages
  REGISTERED = "Registered successfully",
  LOGGED_IN = "Logged in successfully",
  TOKEN_REFRESHED = "Token refreshed successfully",
}

export enum ServiceResponseMessages {
  // Error Messages
  SERVICE_NOT_FOUND = "Service not found",

  // Success Messages
  SERVICE_CREATED = "Service created successfully",
  SERVICE_UPDATED = "Service updated successfully",
  SERVICE_DELETED = "Service deleted successfully",
  SERVICES_FETCHED = "Services fetched successfully",
}