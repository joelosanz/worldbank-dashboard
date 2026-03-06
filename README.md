Prueba Técnica Front-End Dinametra

Dashboard interactivo construido con React + Vite, que consume datos reales del World Bank API para visualizar indicadores económicos como PIB (GDP) y Población.

Este proyecto cumple con los requisitos de la prueba técnica para Ingeniero Front-End en Dinametra.

---

##  Vista general
###  Desktop

<div style="display: flex; gap: 10px; flex-wrap: wrap;">
  <img src="./src/assets/Desktop image 1.png" width="45%" />
  <img src="./src/assets/Desktop image 2.png" width="45%" />
  <img src="./src/assets/Desktop image 3.png" width="45%" />
</div>

---

### Mobile

<div style="display: flex; gap: 10px; flex-wrap: wrap;">
  <img src="./src/assets/Phone image 1.PNG" width="30%" />
  <img src="./src/assets/Phone image 2.PNG" width="30%" />
  <img src="./src/assets/Phone image 3.PNG" width="30%" />
</div>


---

##  Tecnologías y versiones utilizadas

| Herramienta        | Versión  |
|--------------------|----------|
| Node.js            | 22.0.0   |
| React              | 19.2.4   |
| React DOM          | 19.2.4   |
| Vite               | 7.3.1    |
| Recharts           | 3.7.0    |
| Chart.js           | 4.5.1    |
| react-chartjs-2    | 5.3.1    |
| Vitest             | 4.0.18   |
| Testing Library    | 16.3.2   |
| Jest-DOM           | 6.9.1    |
| jsdom              | 28.1.0   |
| canvas             | 3.2.1    |
| gh-pages           | 6.3.0    |


---

##  Objetivo del Proyecto

Crear un dashboard interactivo, responsivo y accesible que:

- Obtenga datos desde una API pública.
- Muestre al menos dos gráficos dinámicos.
- Permita filtrar datos en tiempo real.
- Sea responsivo para desktop, tablet y mobile.
- Incluya pruebas unitarias.
- Esté desplegado en un hosting público (GitHub Pages).

---

##  Estructura del proyecto
src/
│
├── assets/                 
│
├── components/             
│   ├── ChartComponent.jsx  
│   ├── CountryFilter.jsx   
│   └── Dashboard.jsx       
│
├── services/
│   └── worldbankApi.js     
│
├── test/                   
│   ├── ChartComponent.test.jsx
│   ├── CountryFilter.test.jsx
│   └── worldbankApi.test.js
│
├── App.jsx                 
├── App.css                 
├── index.css               
└── main.jsx                


---

##  Demo en vivo

 https://joelosanz.github.io/worldbank-dashboard/

---

##  Instalación y ejecución

### 1. Clonar el repositorio

git clone https://github.com/joelosanz/worldbank-dashboard.git

cd worldbank-dashboard
### 2. Instalar dependecias
npm install
### 3. Ejecutar modo desarrollador
npm run dev
### 4. Construir pproduccion
npm run build
### 5. Pruebas
npm run test

--- 

## Deploy en GitHub Pages

### Scripts utilizados 
"predeploy": "npm run build",

"deploy": "gh-pages -d dist"
### Para publicar 
npm run deploy

## Funcionalidades del Dashboard
### Visualización de datos

- Gráfica de PIB (GDP) en formato de línea.

- Gráfica de Población en formato de barras.

- Formateo automático de números.

### Filtros e interactividad

- Selector de país dinámico.

- Atualización automática de gráficos.

- Tooltips y leyendas integradas.

### Diseño responsivo

- Basado en Flexbox.

- Adaptable a desktop, tablet y mobile.


### Validación de datos vacíos.

- Manejo de errores de API.


### Accesibilidad

- Navegación por teclado.

- Etiquetas ARIA.

- Buen contraste en modo oscuro.

---

### Api utilizada 
https://api.worldbank.org/v2/country/{country}/indicator/{indicator}?format=json

### Indicadores 
PIB → NY.GDP.MKTP.CD

Población → SP.POP.TOTL

---

