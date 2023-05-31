# Hairdress App
Para correr localmente, se necesita la base de datos

```
docker-compose up -d
```
El -d, significa detached

## Configurar las variables de entorno Renombrar el archivo .env.example a .env MongoDB URL Local:
```
MONGO_CNN_LOCAL=mongodb://localhost:27017/hairdress
```

## Reconstruir los node_modules/ y levantar Next
```
yarn install
yarn dev
```

## Llenar la base de datos con información de prueba
Llamar a:
```
http://localhost:3000/api/seed
```
