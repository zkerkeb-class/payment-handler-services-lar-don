# WEB SERVICE  - Service de gestion des paiements

## Description du service

### Objectif
Créer un service pour gérer les transactions financières, incluant les paiements, les remboursements et la facturation.

### Fonctionnalités principales
- **Intégration avec des systèmes de paiement tels que Stripe .**
- **Gestion sécurisée des informations de paiement et des transactions.**
- **Support pour les paiements récurrents et la gestion des abonnements.**
- **Interaction avec l'API Stripe pour traiter les transactions financières.**
- **Coordination avec le service de base de données pour mettre à jour le statut des utilisateurs (date de fin d'abonnement, type d'abonnement, etc.).**

## Membres du projet
- **Lucas SEVAULT**
- **Aubin OLIVRIE**
- **Ryan Peyrot**

## Installation et configuration

1. Exécutez `npm install`.
2. Créez un fichier `.env` avec la configuration suivante :

```env
STRIPE_SECRET_KEY=sk_test_51OkSH5DWGS6KsEMgWOTJmkZwVFJkOxS1ASfLBREWMFsyKOfIr2KjFXlLGIB0OR5hhAsR1HcBLHJEsm1bwKr6pTO400vszGo0jU
PORT=4005
```
## Lancement du projet
Exécutez npm start pour démarrer le serveur de développement.
