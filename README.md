# 📊 Widget & Dashboard de Estadísticas de Edificaciones (UNGRD)

Widget personalizado para **ArcGIS Experience Builder** y Dashboard Web interactivo autónomo para el análisis estadístico y visualización de datos del **Inventario de Edificaciones Afectadas** (Emergencia Chocó / UNGRD).

![Licencia](https://img.shields.io/badge/ArcGIS-Experience_Builder_1.21-0079C1?logo=esri&logoColor=white)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![Estado](https://img.shields.io/badge/Estado-Producción_/_Listo-28a745)

---

## 🎯 Origen de Datos

Este widget consume datos en tiempo real del servicio REST oficial de la UNGRD:
* **WebMap ID:** [`0bc13c7a26c54ce58f0d345a198f1fc2`](https://eqchoco.gestiondelriesgo.gov.co/portal/apps/mapviewer/index.html?webmap=0bc13c7a26c54ce58f0d345a198f1fc2)
* **FeatureServer:** `https://eqchoco.gestiondelriesgo.gov.co/server/rest/services/Hosted/inventario_de_edificaciones_/FeatureServer/0`
* **Cobertura geográfica:** Chocó, Risaralda, Valle del Cauca y Caldas.

---

## 🚀 Características Principales

1. **Tarjetas KPI en Tiempo Real**:
   - Total de Edificaciones Evaluadas.
   - Edificaciones Destruidas (Colapso total / daño severo).
   - Edificaciones Dañadas (Habitables con reparaciones / daño moderado).
   - Edificaciones con Posible Daño (Bajo observación / inspección preliminar).

2. **Diagramas y Gráficos Interactivos (SVG / Vectoriales)**:
   - 🍩 **Gráfico Donut / Pastel**: Distribución porcentual por nivel de daño.
   - 📊 **Gráfico de Barras por Departamento**: Comparativa de afectación territorial (Chocó vs Risaralda vs Valle del Cauca vs Caldas).
   - 🏢 **Gráfico de Barras por Tipología / Uso**: Clasificación de inmuebles (Vivienda, Comercial, Salud, Educación, etc.).

3. **Filtro Departamental Interactivo**:
   - Permite filtrar todas las métricas y gráficos por un departamento específico con recálculo instantáneo en memoria.

4. **Compatibilidad Dual**:
   - Funciona como **Custom Extension Widget** dentro de ArcGIS Experience Builder (Developer Edition).
   - Funciona como **Dashboard Web autónomo** (`index.html`) para consulta directa o publicación en GitHub Pages.

---

## 📁 Estructura del Repositorio

```text
estadisticas-edificaciones/
├── manifest.json       # Manifiesto de registro del widget para Experience Builder / Portal
├── config.json         # Configuración por defecto (URL del servicio, WebMap ID, título)
├── icon.svg            # Ícono oficial del widget en la barra de herramientas de ExB
├── index.html          # Dashboard interactivo autónomo (GitHub Pages / Standalone)
├── .nojekyll           # Desactiva el procesamiento de Jekyll en GitHub Pages
├── README.md           # Documentación técnica del proyecto
├── src/                # Código fuente TypeScript / React
│   ├── config.ts       # Definición de interfaces TypeScript
│   ├── runtime/
│   │   └── widget.tsx  # Componente principal de visualización con diagramas SVG
│   └── setting/
│       └── setting.tsx # Panel de configuración del widget en ExB Builder
└── dist/               # Bundles JavaScript compilados y listos para producción
    ├── runtime/
    │   └── widget.js   # Bundle de ejecución (122 KB)
    └── setting/
        └── setting.js  # Bundle de configuración (19 KB)
```

---

## 🛠️ Instalación en ArcGIS Experience Builder (Developer Edition)

1. Clona o descarga este repositorio.
2. Copia la carpeta `estadisticas-edificaciones` en la ruta de extensiones de tu instalación de Experience Builder:
   ```text
   arcgis-experience-builder-1.21/client/your-extensions/widgets/estadisticas-edificaciones
   ```
3. Inicia el servidor de desarrollo en la carpeta `client`:
   ```bash
   npm start
   ```
4. Abre Experience Builder en tu navegador (`https://localhost:3001`), abre o crea una experiencia y arrastra el widget **Estadísticas Edificaciones** desde el panel de widgets personalizados.

---

## 🌐 Publicación en GitHub Pages

1. Publica este repositorio en GitHub como repositorio **Público** usando GitHub Desktop.
2. En GitHub, dirígete a: **Settings** > **Pages**.
3. En **Branch**, selecciona `main` y la carpeta `/ (root)`.
4. Haz clic en **Save**. En unos minutos tu dashboard estará en línea en:
   `https://<tu-usuario>.github.io/estadisticas-edificaciones/`

---

## 🔒 Licencia y Créditos

- Datos de evaluación de daños proporcionados por la **Unidad Nacional para la Gestión del Riesgo de Desastres (UNGRD)** - Colombia.
- Desarrollado para ecosistemas **Esri ArcGIS Experience Builder & Enterprise**.