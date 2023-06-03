# Run the application

## Install dependencies

For frontend application, run the following command in the `src\web` directory:

```bash
yarn install
```

For Azure Functions, you need to install Azure Functions Core Tools. For more information, see [Install the Azure Functions Core Tools](https://learn.microsoft.com/en-us/azure/azure-functions/functions-run-local?tabs=v4%2Cwindows%2Ccsharp%2Cportal%2Cbash#install-the-azure-functions-core-tools).

For Azure Static Web App, you need to install Azure Static Web Apps CLI:

```bash
npm install -g @azure/static-web-apps-cli
```

## Run the application

1. Run the following command in the `src\web` directory:

    ```bash
    yarn run dev
    ```

    The frontend application will be available at `http://localhost:3000`.

2. Run the following command in the `src\api` directory:

    ```bash
    func start
    ```

    The Azure Functions application will be available at `http://localhost:7071`.

3. Run Azure Static Web App simulator:

    ```bash
    swa start
    ```

    The Azure Static Web App simulator will be available at `http://localhost:4280`.

## Documentation

- [Add an API to Azure Static Web Apps with Azure Functions](https://learn.microsoft.com/en-us/azure/static-web-apps/add-api?tabs=react)