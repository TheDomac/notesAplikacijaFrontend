  const dev = {
    STRIPE_KEY: "pk_test_51GzGqrLXhirpsqdUikowDeKIFNyhpsEw4IHDCPFwR8nM3Y3y0EuWvXDGctkebdZ8cdURRgsgQwsCG0RpWpikxDLB00s7ed5QM7",
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-aplikacija-2-dev-attachmentsbucket-7krjz3egp1v7"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://1ve5hi7rv3.execute-api.us-east-1.amazonaws.com/dev"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_16FXK59TE",
      APP_CLIENT_ID: "75598a52h5segdbokdgdgfa74n",
      IDENTITY_POOL_ID: "us-east-1:c9d664d5-6a6c-4a4b-8c2e-60d9de4c7504"
    }
  };
  
  const prod = {
    STRIPE_KEY: "pk_test_51GzGqrLXhirpsqdUikowDeKIFNyhpsEw4IHDCPFwR8nM3Y3y0EuWvXDGctkebdZ8cdURRgsgQwsCG0RpWpikxDLB00s7ed5QM7",
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-aplikacija-2-prod-attachmentsbucket-jx144njmvyk0"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://b6gciwthh2.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_OqifTs2zH",
      APP_CLIENT_ID: "4mra0no6sacol8nfub7dc3p980",
      IDENTITY_POOL_ID: "us-east-1:5788cbed-cd7a-4562-87c6-82b3879e7550"
    }
  };
  
  // Default to dev if not set
  const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;
  
  export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config
  };