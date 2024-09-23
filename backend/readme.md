# API Views Documentation

This documentation outlines the views and their endpoints available in the application.

## Running
- Navigate to backend folder
- Create venv: ``` python -m venv env ```
- Activate venv: Linux: source env/bin/activate Windows:``` ./nev/bin/Scripts/Activate.ps1```
- Install packages: ```pip install -r requirements.txt```
- Perform migrations: ```python manage.py makemigrations```
- Apply migrations: ```python manage.py migrate```
- Run the server: ```python manage.py runserver```

## TravellersViewSet
Manages the creation and listing of travellers.

### Endpoints

- **GET** `auth/travellers/`
  - Returns a list of all travellers.
  - No authentication or permissions required.

- **POST** `auth/travellers/`
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

- **POST** `auth/travellers/create_user/`
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

- **GET** `auth/packages/`
  - Lists all available packages.
  - Requires basic authentication and user to be authenticated.

- **GET** `auth/packages/recommendations/`
  - Returns package recommendations for the authenticated traveller.
  - **Request Body:**
    ```json
    {
      "username": "traveller123"
    }
    ```

- **GET** `auth/packages/trending/`
  - Lists trending packages for the traveller.

## EventViewSet
Handles event-related operations.

### Endpoints

- **GET** `auth/events/`
  - Returns a list of all events.
  Event:
  ```json
  {
    "name":
    "label": [{
      "name":"label1"
    },
    {
      "name":"label2"
    }
    ]
    "img":
    "created_at":
    "user":{
      "username":username of user
      "id":userid
    }
    "description":
  }
  ```  

- **GET** `auth/events/recommendations/`
  - Returns event recommendations for the authenticated traveller.
  - **Request Body:**
    ```json
    {
      "username": "traveller123"
    }
    ```

- **POST** `auth/events/create_event/`
  - Creates a new event with associated labels.
  - **Request Body:**
    ```json
    {
      "name": "Event Name",
      "label": ["label1", "label2"],
      "username":"Username of creator"
    }
    ```
- **POST** `auth/events/interested/`
-Creates a interest on a event.
  - **Request Body:**
    ```json
    {
      "id": id of the event in number,
      "username":"Username of the interested user"
    }
    ```
- **GET** `auth/events/interested/`
- -Returns a list of interested users
<!-- - **POST** `auth/events/like/`
-Creates a like on a event.
  - **Request Body:**
    ```json
    {

      "id": id of the event in number,

      "usernmae":"Username of the user"
      

    }
    ``` -->
## PostViewSet
Handles user posts and provides recommendations.

### Endpoints

- **GET** `auth/posts/`
  - Lists all posts.

- **GET** `auth/posts/recommendations/`
  - Returns post recommendations based on the traveller's interests.
  - **Request Body:**
    ```json
    {
      "username": "traveller123"
    }
    ```

- **POST** `auth/posts/create_post/`
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
- **POST** `auth/posts/comment/`
-Creates a comment on a post.
  - **Request Body:**
    ```json
    {

      "id": id of the post in number,
      "comment" :"Comment on the post",
      "usernmae":"Username of the commenter"
      

    }

    ```
    - **POST** `/auth/posts/like/`
-Creates a like on a post.
  - **Request Body:**
    ```json
    {

      "id": id of the post in number,

      "usernmae":"Username of the user"
      

    }
    ```
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

## Destination 
Create destination or get a list of destination
- **POST**  `/auth/destination/create_destination/`
- Data Format:
- {
  "name": "Package Name",
  "label": [
    "label1",
    "label2"
  ],
  "price": 100,
  "description": "flasjdfdlas;jflsadjflasdfjl;sdfjsdl;fjsld;fjsld;fj",
  "username": "rohan",
  
}
- **GET** `/auth/destination`
- Get list of destination


- **POST** `auth/destination/subscribe/`
-Creates a interest on a event.
  - **Request Body:**
    ```json
    {
      "id": id of the destination in number,
      "username":"Username of the interested user"
    }
    ```
- **GET** `auth/destination/subscribe/`
- -Returns a list of interested users

- **POST** `auth/traverse/`
- Ask for preparation and equipments
- ```json
  {
    "id": id of the package,
  }
```
---
