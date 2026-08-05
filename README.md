# felipearisso.com

Sitio web personal, portafolio técnico y blog estructurado para documentar proyectos de ingeniería, automatización, datos y ciberseguridad industrial (OT/ICS).

Desarrollado con una arquitectura moderna de sitio estático (SSG), enfocado en velocidad extrema, renderizado liviano, soporte bilingüe y compatibilidad directa con archivos Markdown.

---

## 🛠️ Tech Stack

* **Framework:** [Astro](https://astro.build/) (Zero-JS por defecto, SSG)
* **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
* **Gestor de Contenido / CMS:** [Keystatic](https://keystatic.com/) + Astro Content Collections
* **Gestor de Paquetes:** `pnpm`
* **Despliegue & CDN:** Vercel / Cloudflare Pages
* **Editor de Contenidos:** Obsidian (sincronizado vía Markdown estándar)

---

## 📁 Estructura del Proyecto

```text
felipearisso-web/
├── public/                 # Archivos estáticos globales (favicons, imágenes, CV en PDF)
├── src/
│   ├── components/         # Componentes UI reutilizables (Header, Footer, Cards)
│   ├── content/            # Colecciones de contenido en Markdown (Blogs y Proyectos)
│   │   ├── projects/       # Casos de estudio y proyectos de ingeniería
│   │   └── writeups/       # Análisis técnicos y artículos de ciberseguridad
│   ├── layouts/            # Diseños de página base
│   └── pages/              # Rutas de la web (index, /projects, /writeups)
├── keystatic.config.ts     # Configuración del CMS visual local
├── astro.config.mjs
├── package.json
└── pnpm-lock.yaml

```

---

## 🚀 Desarrollo Local

### Prerrequisitos

Asegurate de tener instalado Node.js (v18+) y `pnpm`. Si no tenés `pnpm`, podés activarlo con:

```bash
corepack enable
corepack prepare pnpm@latest --activate

```

### Instalación y Ejecución

1. Cloná el repositorio:
```bash
git clone https://github.com/Frisso92/felipearisso-web.git
cd felipearisso-web

```


2. Instalá las dependencias:
```bash
pnpm install

```


3. Iniciá el servidor de desarrollo local:
```bash
pnpm dev

```


4. Abrí tu navegador en `http://localhost:4321`.
* Para acceder al CMS visual local, ingresá a `http://localhost:4321/keystatic`.



---

## ✍️ Flujo de Trabajo y Publicación (Obsidian Integration)

El contenido técnico se gestiona mediante archivos Markdown con esquema de metadatos (Frontmatter).

1. Podés abrir la carpeta `src/content/` directamente como una bóveda en **Obsidian**.
2. Redactá el artículo o proyecto asegurándote de incluir el encabezado YAML requerido:

```yaml
---
title: "Título del Proyecto o Writeup"
description: "Resumen breve del contenido"
pubDate: 2026-08-05
tags:
  - ot-security
  - python
  - gcp
draft: false
---

```

3. Guardá los cambios y ejecutá el push desde la terminal:
```bash
git add .
git commit -m "content: add new technical writeup"
git push origin main

```



El sitio se compilará y desplegará automáticamente en [felipearisso.com](https://www.google.com/search?q=https://felipearisso.com).

---

## 📄 Licencia

Código fuente bajo licencia **MIT**. El contenido escrito, artículos y proyectos son de propiedad exclusiva de Felipe Risso.