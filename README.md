# Weather Forecast Web Application

This is a weather forecast web application built with Next.js and TypeScript.


## Developing and Running on local Machine

### Requirements

- Node 18+
- Yarn or npm

### Running

First, clone this repository to local file system.

Then in base folder and run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to preview the application.

### Environment

Provide your own weather bit API `NEXT_PUBLIC_WEATHER_BIT_API_KEY` to overwrite existing sample API key.

Note: This step is optional as sample API key is provided in `.env` file which will valid till 2023-12-03


## Further Considerations for development

| Prioritization | Task Description                                                      |
|----------------|-----------------------------------------------------------------------|
| 1              | Create Sever API to call 3rd party API to avoid expose API KEY        |
| 2              | Create docker file to enable running application through docker image |
| 3              | Introduce 3rd party state management tool such as redux               |