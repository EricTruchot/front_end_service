# Utilisez une image de base avec Node.js
FROM node:14-alpine

# Définissez le répertoire de travail dans le conteneur
WORKDIR /app

# Copiez les fichiers du projet dans le conteneur
COPY . .

# Installez les dépendances
RUN npm install

# Construisez l'application React pour la production
RUN npm run build

# Commande pour exécuter l'application
CMD ["npm", "start"]