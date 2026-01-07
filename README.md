# 🚀 Prueba Técnica Full-Stack: Gestión de Productos

Esta aplicación es una solución integral para la gestión de productos, permitiendo el registro y la visualización en tiempo real. Construida con una arquitectura desacoplada utilizando **Spring Boot** para el backend y **Vue 3** para el frontend.

---

## 🛠️ Tecnologías Utilizadas

### Backend

- **Java 17** & **Spring Boot 3**
- **Spring Data JPA**: Para la persistencia de datos.
- **H2 Database**: Base de datos en memoria (ideal para pruebas rápidas).
- **Jakarta Validation**: Validaciones robustas de integridad de datos.

### Frontend

- **Vue 3** (Composition API)
- **TypeScript**: Tipado estático para mayor seguridad.
- **Vite**: Herramienta de construcción ultra rápida.
- **Axios**: Cliente HTTP para consumo de API.

---

## 🚀 Instrucciones de Ejecución

Sigue estos pasos para levantar el entorno localmente:

### 1️⃣ Clonar el repositorio

```bash
git clone <url-de-tu-repositorio>
cd prueba-tecnica-productos
```

### 2️⃣ Levantar el Backend (Spring Boot)

**Requisitos:** Java 17 o superior

```bash
cd backend
./mvnw spring-boot:run
```

- La API estará disponible en: [http://localhost:8080/api/products](http://localhost:8080/api/products)
- La consola de la base de datos H2 para auditoría: [http://localhost:8080/h2-console](http://localhost:8080/h2-console)

  - **JDBC URL:** `jdbc:h2:mem:testdb`
  - **Usuario:** `sa`
  - **Contraseña:** _(vacía)_

### 3️⃣ Levantar el Frontend (Vue 3)

**Requisitos:** Node.js v18+

```bash
cd frontend
npm install
npm run dev
```

- La interfaz será accesible en: [http://localhost:5173](http://localhost:5173)

---

## 📝 Endpoints Principales

| Método | Endpoint        | Descripción                                                |
| ------ | --------------- | ---------------------------------------------------------- |
| GET    | `/api/products` | Lista todos los productos registrados                      |
| POST   | `/api/products` | Crea un nuevo producto (Valida nombre, precio > 0 y stock) |

---

## 🏗️ Decisiones de Diseño

- **CORS:** Se configuró `@CrossOrigin` en el controlador de Spring Boot para permitir la comunicación con Vite en el puerto local.
- **Persistencia Automática:** Se utilizó `LocalDateTime` con `@PrePersist` para capturar la fecha de creación automáticamente.
- **Validación de Errores:** Se implementaron reglas en el modelo (`@NotBlank`, `@Positive`) para evitar precios negativos o nombres vacíos, retornando HTTP 400 en caso de error.
