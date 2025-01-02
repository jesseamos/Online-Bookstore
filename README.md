
# **Bookstore API**

A RESTful API built with **Nest.js** for managing books in a bookstore. Supports CRUD operations for books with the following properties:

- **title**: Title of the book (string)  
- **overview**: Brief summary (string)  
- **rating**: Average user rating (float, 0.0–5.0)  
- **author**: Name of the author (string)  
- **genres**: List of genres (array of strings)  
- **price**: Price of the book (float)  

---

## **Getting Started**

### **Base URL**
`http://localhost:3000/`

### **Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/jesseamos/Online-Bookstore
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the application:
   ```bash
   npm run start:dev
   ```

---

## **Endpoints**

### **Create a Book**
- **POST** `/books`  
**Body**:
```json
{
  "title": "Book Title",
  "overview": "An engaging overview.",
  "rating": 4.5,
  "author": "Author Name",
  "genres": ["Fiction", "Adventure"],
  "price": 19.99
}
```

**Response**:  
`201 Created`
```json
{
  "id": 1,
  "title": "Book Title",
  "overview": "An engaging overview.",
  "rating": 4.5,
  "author": "Author Name",
  "genres": ["Fiction", "Adventure"],
  "price": 19.99
}
```

---

### **Retrieve All Books**
- **GET** `/books`  
**Response**:  
`200 OK`
```json
[
  {
    "id": 1,
    "title": "Book Title",
    "overview": "An engaging overview.",
    "rating": 4.5,
    "author": "Author Name",
    "genres": ["Fiction", "Adventure"],
    "price": 19.99
  }
]
```

---

### **Retrieve a Single Book**
- **GET** `/books/{id}`  
**Response**:  
`200 OK`
```json
{
  "id": 1,
  "title": "Book Title",
  "overview": "An engaging overview.",
  "rating": 4.5,
  "author": "Author Name",
  "genres": ["Fiction", "Adventure"],
  "price": 19.99
}
```

---

### **Update a Book**
- **PUT** `/books/{id}`  
**Body**:
```json
{
  "title": "Updated Title",
  "overview": "Updated overview.",
  "rating": 4.7,
  "author": "Updated Author",
  "genres": ["Drama", "History"],
  "price": 22.99
}
```

**Response**:  
`200 OK`
```json
{
  "id": 1,
  "title": "Updated Title",
  "overview": "Updated overview.",
  "rating": 4.7,
  "author": "Updated Author",
  "genres": ["Drama", "History"],
  "price": 22.99
}
```

---

### **Delete a Book**
- **DELETE** `/books/{id}`  
**Response**:  
`200 OK`
```json
{
  "message": "Book deleted successfully."
}
```

---

## **Error Codes**
| Code | Meaning                  |
|------|--------------------------|
| 200  | Success                  |
| 201  | Resource Created         |
| 400  | Bad Request              |
| 404  | Resource Not Found       |
| 500  | Internal Server Error    |

