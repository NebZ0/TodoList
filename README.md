# TodoList Angular + Node.js

Comment l'utiliser :

1. **Installer les dépendances**

```bash
npm install --prefix backend
npm install --prefix frontend
npm install -D tailwindcss postcss autoprefixer
```

2. **Lancer le serveur backend**

```bash
node backend/app.js
```

Vérifier sur http://localhost:3000 que le serveur est bien route
Routes disponibles:
- get /tasks
- post /tasks
- patch /tasks/:id

3. **Frontend**

```bash
cd ./frontend
ng serve
```
application angular disponible sur http://localhost:4200


