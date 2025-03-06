# Vehicle_Configurator
# WebApiJWT

## Overview
WebApiJWT is a B2B leasing platform for rental car companies, enabling users to configure cars dynamically based on model conditions, update costs, and generate invoices in PDF format. The system is built using **Spring Boot 3, .NET Core 8, React.js 18, and MySQL 8**.

## Features
- **JWT Authentication** for secure access.
- **Dynamic Car Configuration** based on user-selected models.
- **Cost Calculation & Invoice Generation** in PDF.
- **Multi-Language Support (i18n)**.
- **Email Notification Service**.
- **Monolithic to Microservices Migration Plan** (Upcoming).

## Tech Stack
- **Backend:** Spring Boot 3, .NET Core 8, REST API, JPA, JWT, RabbitMQ.
- **Frontend:** React.js 18, Fetch API.
- **Database:** MySQL 8, Entity Framework Core.
- **Containerization:** Docker.
- **Authentication:** JWT (JSON Web Token).

## Installation Guide
### Prerequisites
- Java 17+ & Spring Boot 3
- .NET Core 8
- Node.js 18+ & React.js
- MySQL 8
- Docker (Optional)

### Steps to Run
#### Backend - Spring Boot
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/WebApiJWT.git
   cd WebApiJWT/backend
   ```
2. Configure database in `application.properties`:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/leasing_db
   spring.datasource.username=root
   spring.datasource.password=yourpassword
   ```
3. Run the backend:
   ```sh
   mvn spring-boot:run
   ```

#### Backend - .NET Core
1. Navigate to the .NET project:
   ```sh
   cd WebApiJWT/dotnet-backend
   ```
2. Run the .NET API:
   ```sh
   dotnet run
   ```

#### Frontend - React.js
1. Navigate to the React frontend:
   ```sh
   cd WebApiJWT/frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the React app:
   ```sh
   npm start
   ```

## API Endpoints
| Method | Endpoint | Description |
|--------|--------------------|------------------------------|
| `POST` | `/api/auth/login`  | User authentication via JWT |
| `GET`  | `/api/models`      | Fetch all car models |
| `POST` | `/api/invoices`    | Generate invoice in PDF |
| `GET`  | `/api/user/profile` | Fetch user profile details |

## Database Schema
```
User (id, name, email, password, role)
CarModel (id, name, segment, manufacturer, price)
Invoice (id, user_id, model_id, total_cost, pdf_link)
```

## Security & Authentication
- Uses **JWT** for authentication.
- Role-based access control (`Admin`, `User`).
- Secure endpoints using **Spring Security** & **ASP.NET Identity**.

## Future Enhancements
- **Convert to Microservices** using Kafka & RabbitMQ.
- **Deploy to Cloud (AWS/Azure/GCP)**.
- **Implement AI-based Pricing Optimization**.

## Contributors
- **[Aditya Singh]** - Developer ([adisne45@gmail.com](mailto:adisne45@gmail.com))

## License
This project is licensed under the MIT License.

