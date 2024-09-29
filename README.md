# Boored App - Random Activity Generator

## Índice 📝

- [Description](#project-description)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Project Installation](#project-installation)
- [Technologies](#technologies)
- [Contribution](#contribution)
- [Developer](#developer)



## Project Description 
📖
This project is a technical test for participating in the Hackathon & Marketplace (22/10/2024), organized by Barcelona Activa.
The app consists in generating random activities from https://bored-api.appbrewery.com/, with applied filter by category. As a Frontend developer, I was tasked with replicating the design provided in the brief. 

This project is built with React.js, Vite, TailwindCSS, HTML5, and CSS3.

Since bored-api.appbrewery.com has no origin response headers, I used CORS Anywhere (https://cors-anywhere.herokuapp.com) to avoid CORS policy issues (No 'Access-Control-Allow-Origin').

According to the given example, the app should be in Catalan, but all the responses I've received have been in English. I couldn't find any free translation APIs, so I decided to translate the text throughout the app according to the language of the fetched suggestions.
## Installation 
💾

### Prerequisites
- **Node.js v22.0.0 o superior**
- **npm 10.8.1 o superior**


### Project Installation

1. Clone this repository: 
```bash
 `git clone https://github.com/BSN-Asumiko/Hackathon-22-10-2024-prueba.git`
```

3. Install dependencies:

```bash
 npm install
```

4. Go to CORS Anywhere Demo (https://cors-anywhere.herokuapp.com/corsdemo) to request temporary access to the demo server.


5. Run the appllication

```bash
 npm run dev
```

## Technologies 
🛠️

### Front-end:
- **React.js 18.3.3**
- **JavaScript**
- **TailwindCSS**
- **HTML5** and **CSS3**
- **Vite**

### External Services:
- **[cors-anywhere](https://cors-anywhere.herokuapp.com/)**: service used to avoid CORS policy



## Contribution 
🤝
Fork the repository.

Create new branch: `git checkout -b feature/name.`

Make your changes.

Push your branch: `git push origin feature/name.`

Create pull request.

## Developer

✒️ Ekaterina Buinovskaia - https://github.com/BSN-Asumiko

