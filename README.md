# My Personal Portfolio Website (SvelteKit Version)

## Introduction

Welcome to the repository for my personal portfolio website. This project showcases my skills and projects in a clean, modern interface. This particular version of the site is built using SvelteKit, paired with Contentful as a headless CMS to manage and deliver content dynamically.

## Features

- **SvelteKit Framework:** Utilizing the speed and simplicity of SvelteKit for a seamless user experience.
- **Contentful Integration:** Content is managed through Contentful, offering a flexible and scalable CMS solution.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed (version 12.x or later)
- A Contentful account with necessary credentials

## Installation

To install the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/crispiestsquid/sveltekit-portfolio.git
   ```
2. Navigate to the project directory:
   ```bash
   cd sveltekit-portfolio
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Configuration

1. Set up your Contentful space and obtain your space ID and access tokens.
2. Create a `.env` file in the root of your project and add your Contentful credentials:
   ```env
   CONTENTFUL_SPACE_ID=your_space_id
   CONTENTFUL_ACCESS_TOKEN=your_access_token
   ```
3. Some features may require a local `MongoDB` instance.

## Running the Project

To run the project locally, use:

```bash
npm run dev
```

This will start the development server at `http://localhost:5173`.

## Deployment

TODO
