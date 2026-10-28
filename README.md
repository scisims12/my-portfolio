# Priyanshu Sharma — Developer Portfolio

A personal portfolio showcasing my work in SQL database administration, website development, server administration, and Android development.

[Visit Portfolio](https://portfolio.mixify.co.in/) · [GitHub](https://github.com/scisims12) · [LinkedIn](https://www.linkedin.com/in/priyanshu-sharma-a59293241/)

## About Me

I'm Priyanshu Sharma, a SQL Database Administrator and Web & Android Developer. I manage MySQL databases, build websites, work with cPanel and WHM, and maintain Mixify, an open-source Android music app built with Kotlin and Jetpack Compose.

This repository contains the source code for my portfolio website, including my background, skills, selected projects, and contact information.

## Explore the Portfolio

| Section | Link |
| --- | --- |
| About my journey | [About](https://portfolio.mixify.co.in/#about) |
| Technical skills | [Skills](https://portfolio.mixify.co.in/#skills) |
| Selected work | [Projects](https://portfolio.mixify.co.in/#projects) |
| Frequently asked questions | [FAQ](https://portfolio.mixify.co.in/#faq) |
| Get in touch | [Contact](https://portfolio.mixify.co.in/#contact) |

## Featured Work

### Mixify — Android Music App

An open-source Android music app built with Kotlin and Jetpack Compose.

[Project overview](https://portfolio.mixify.co.in/mixify.html) · [Website](https://mixify.co.in/) · [Source code](https://github.com/scisims12/Mixify) · [Project origins](https://github.com/scisims12/Mixify#project-origins)

### Children Choice Books

A dedicated portfolio page presenting my work for Children Choice Books.

[Project overview](https://portfolio.mixify.co.in/children-choice-books.html) · [Website](https://www.childrenchoicebooks.com/)

## Portfolio Features

- Responsive layouts for desktop, tablet, and mobile.
- Light and dark themes with customizable colors.
- Scroll animations, hover effects, and motion interactions.
- About, skills, projects, FAQ, and contact sections.
- Project detail pages and a screenshot gallery with full-size previews.
- Contact form integrated with EmailJS.
- GitHub and LinkedIn links.

## Tech Stack

| Area | Technologies |
| --- | --- |
| Frontend | React 19, JavaScript, HTML |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion, Typewriter Effect |
| State management | Redux Toolkit, React Redux |
| Icons | React Icons |
| Contact form | EmailJS |
| Build tools | Vite 6, ESLint |
| Container setup | Docker, Nginx |

Kotlin and Jetpack Compose are used in the separate Mixify Android project; this portfolio is built with React.

## Run Locally

Install Node.js 20 or a compatible version supported by Vite 6, then run:

```bash
git clone https://github.com/scisims12/my-portfolio.git
cd my-portfolio
npm ci
npm run dev
```

Open the local URL printed by Vite.

### Available Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Generate the production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

If you reuse the contact form, configure it with your own EmailJS service, template, and public key.

### Run with Docker

The included Dockerfile builds the site and serves it with Nginx.

```bash
docker build -t priyanshu-portfolio .
docker run --rm -p 8080:80 priyanshu-portfolio
```

Open [localhost:8080](http://localhost:8080).

## Project Structure

```text
my-portfolio/
├── .github/workflows/       # CI workflows
├── public/                 # Static assets
├── src/                    # React source and components
├── index.html              # Portfolio entry page
├── mixify.html             # Mixify project page
├── children-choice-books.html
├── Dockerfile              # Build and Nginx container
├── docker-compose.yml
├── package.json
└── vite.config.js
```

## Connect

- **Portfolio:** https://portfolio.mixify.co.in/
- **GitHub:** https://github.com/scisims12
- **LinkedIn:** https://www.linkedin.com/in/priyanshu-sharma-a59293241/
- **Contact form:** https://portfolio.mixify.co.in/#contact

For website, database, or Android development enquiries, connect with me on LinkedIn or use the portfolio contact form.
