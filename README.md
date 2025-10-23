# Commerce Contributor

This repository is used to store the code for the Commerce Contributor documentation website. It is built using the [Adobe Edge Delivery Services](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/edge-delivery/overview) and deployed to [Adobe Developer](https://developer.adobe.com/commerce/contributor/).

## Quick start

For local development, you need to start three servers:

1. **Content server** (your content repo):

   ```bash
   npm run dev
   ```

   This starts the content server on port 3003.

2. **Code server** ([adp-devsite](https://github.com/AdobeDocs/adp-devsite)):

   ```bash
   git clone https://github.com/AdobeDocs/adp-devsite
   cd adp-devsite
   npm install
   npm run dev
   ```

3. **Runtime connector** ([devsite-runtime-connector](https://github.com/aemsites/devsite-runtime-connector)):

   ```bash
   git clone https://github.com/aemsites/devsite-runtime-connector
   cd devsite-runtime-connector
   npm install
   npm run dev
   ```

Once all three servers are running, navigate to `http://localhost:3000/<pathPrefix>`

For common utilities and documentation, please see the [centralized README](https://github.com/AdobeDocs/adp-devsite-utils/blob/main/README.md).

## Testing and linting

### Markdown linting

To lint your markdown files before pushing, execute:

```bash
npm run lint:md
```

To automatically fix linting errors, execute:

```bash
npm run lint:md:fix
```

### Content validation

To check internal and external links, validate front matter and more, execute:

```bash
npm run lint
```

### TOC validation

To validate the table of contents (TOC) file (`src/pages/config.md`), execute:

```bash
npm run test:config
```
