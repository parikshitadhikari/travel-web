# API Views Documentation

This documentation outlines the views and their endpoints available in the application.

## TravellersViewSet
Manages the creation and listing of travellers.

### Endpoints

- **GET** `/travellers/`
  - Returns a list of all travellers.
  - No authentication or permissions required.

- **POST** `/travellers/`
  - Creates a new traveller based on the provided data.
  - No authentication or permissions required.
  - **Request Body:**
    ```json
    {
      "username": "user123",
      "password": "password123",
      "email": "user@example.com",
      "interests": ["interest1", "interest2"]
    }
    ```

- **POST** `/travellers/create_user/`
  - Creates a traveller and assigns interests to them.
  - **Request Body:**
    ```json
    {
      "username": "user123",
      "password": "password123",
      "email": "user@example.com",
      "interests": ["interest1", "interest2"]
    }
    ```


## PackageViewSet
Manages travel packages and their recommendations.

### Endpoints

- **GET** `/packages/`
  - Lists all available packages.
  - Requires basic authentication and user to be authenticated.

- **GET** `/packages/recommendations/`
  - Returns package recommendations for the authenticated traveller.
  - **Request Body:**
    ```json
    {
      "username": "traveller123"
    }
    ```

- **GET** `/packages/trending/`
  - Lists trending packages for the traveller.

## EventViewSet
Handles event-related operations.

### Endpoints

- **GET** `/events/`
  - Returns a list of all events.

- **GET** `/events/recommendations/`
  - Returns event recommendations for the authenticated traveller.
  - **Request Body:**
    ```json
    {
      "username": "traveller123"
    }
    ```

- **POST** `/events/create_event/`
  - Creates a new event with associated labels.
  - **Request Body:**
    ```json
    {
      "name": "Event Name",
      "label": ["label1", "label2"]
    }
    ```

## PostViewSet
Handles user posts and provides recommendations.

### Endpoints

- **GET** `/posts/`
  - Lists all posts.

- **GET** `/posts/recommendations/`
  - Returns post recommendations based on the traveller's interests.
  - **Request Body:**
    ```json
    {
      "username": "traveller123"
    }
    ```

- **POST** `/posts/create_post/`
  - Creates a new post.
  - **Request Body:**
    ```json
    {

      "description":"Description",
      "label": ["label1", "label2"],
      "img": Image File,
      "username": "Username of poster",
      

    }
    ```
- **POST** `/posts/:id/comment/`
-Creates a comment on a post.

---
## ChatViewSet (chat)
Chat with chatbot

### ENDPOINTS
- **POST** `/auth/post`
  -  prompt chatbot
   - **Request Body:**
    ```json
    {

      "prompt" :"Your Prompt"
    }
    ```