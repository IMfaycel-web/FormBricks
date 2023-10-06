# Formbricks

Formbricks is a privacy-focused survey and experience-management platform for collecting, analyzing, and acting on user feedback.

It supports in-app, website, link, and email surveys, audience targeting, reusable survey templates, collaborative workspaces, analytics, integrations, APIs, and self-hosted deployments.

## Overview

Formbricks helps product, research, support, and customer-experience teams collect structured feedback throughout the user journey.

Surveys can be distributed through public links or embedded directly into applications and websites. Responses can be analyzed inside the platform or consumed through integrations, webhooks, and APIs.

The platform is suitable for:

- Product feedback
- Customer satisfaction surveys
- Net Promoter Score workflows
- User research
- Product-market-fit surveys
- Churn and cancellation feedback
- Onboarding feedback
- Website surveys
- In-product surveys
- Customer-experience programs

## Features

### Survey Creation

- No-code survey editor
- Multiple question types
- Reusable templates
- Conditional survey logic
- Required and optional questions
- Multi-page surveys
- Custom welcome and ending screens
- Survey duplication
- Draft and published states
- Scheduled publishing and closing
- Multi-language surveys
- Custom styling and branding controls

### Distribution

- Shareable link surveys
- Website surveys
- In-app surveys
- Email survey workflows
- JavaScript and package-based embedding
- Targeted survey display
- Trigger-based survey presentation
- Audience filtering
- Survey scheduling
- QR-code-oriented sharing workflows

### Audience and Targeting

- User identification
- Contact attributes
- Custom attributes
- Segment-based targeting
- Product event targeting
- User lifecycle targeting
- Display-frequency controls
- Survey recontact controls
- Environment-specific configuration

### Responses and Analytics

- Response collection
- Response tables
- Survey completion metrics
- Drop-off analysis
- Response filtering
- CSV and spreadsheet-oriented export
- Chart-based survey analysis
- Segment-based analysis
- Response metadata
- Contact association
- Survey performance dashboards
- Cube-based analytics infrastructure

### Collaboration

- Organizations
- Workspaces
- Team invitations
- Member roles
- Survey ownership
- Shared survey management
- User-management controls
- Configurable session duration

### Integrations

- Webhooks
- REST API
- OpenAPI-based API definitions
- Slack-oriented workflows
- Notion-oriented workflows
- Zapier-compatible automation
- n8n-compatible automation
- Google integrations
- PostHog integration
- SMTP email delivery
- External storage and application integrations

### Authentication and Security

- Email and password authentication
- OAuth support
- SAML-based enterprise authentication
- Multi-factor authentication
- Encrypted credentials
- Configurable session lifetime
- Cron endpoint protection
- Rate limiting
- Internal webhook protections
- Audit logging options
- Configurable user-management permissions

### AI and Insight Services

The current platform can integrate optional AI-backed services for feedback enrichment.

Capabilities include:

- Response embeddings
- Sentiment analysis
- Emotion classification
- Translation
- Taxonomy generation
- AI-assisted analysis
- OpenAI-compatible model endpoints
- Google-hosted model support
- Amazon Bedrock-oriented configuration
- Azure AI provider configuration

AI features are optional and require the corresponding provider configuration.

## Tech Stack

| Area | Technologies |
| --- | --- |
| Language | TypeScript |
| Web application | Next.js 16 |
| UI runtime | React 19 |
| Styling | Tailwind CSS 4 |
| UI primitives | Radix UI |
| Forms | React Hook Form |
| Validation | Zod |
| Client state | Jotai, TanStack Query |
| Authentication | Better Auth, OAuth, SAML integrations |
| Database access | Prisma 7 |
| Primary database | PostgreSQL with pgvector |
| Cache and queues | Valkey or Redis-compatible service |
| Background processing | BullMQ |
| Analytics layer | Cube |
| Experience hub | Formbricks Hub |
| Embedded surveys | Preact, Vite |
| Object storage | S3-compatible storage |
| Email | Nodemailer, SMTP |
| Payments | Stripe |
| Internationalization | i18next |
| Observability | OpenTelemetry, Sentry, Prometheus |
| Unit testing | Vitest, Testing Library |
| End-to-end testing | Playwright |
| Component development | Storybook |
| Monorepo tooling | Turborepo |
| Package manager | pnpm 11 |
| Deployment | Docker, Docker Compose, Helm |

## Installation

### Development Requirements

Use one of the Node.js versions supported by the repository:

```text
Node.js 20.19+
Node.js 22.12+
Node.js 24.x
```

The repository currently pins:

```text
Node.js: 22.12.0
pnpm:    11.7.0
```

Additional requirements:

- Git
- Docker Engine or Docker Desktop
- Docker Compose
- pnpm
- At least several gigabytes of free storage for dependencies and containers

### Install Dependencies

```bash
pnpm install
```

### Create Local Configuration

Copy the example environment file:

```bash
cp .env.example .env
```

Generate secure application secrets:

```bash
openssl rand -hex 32
```

Set independent values for:

```env
ENCRYPTION_KEY=
NEXTAUTH_SECRET=
CRON_SECRET=
```

### Start Development Services

The development Compose stack provides PostgreSQL, Valkey, object storage, mail testing, Formbricks Hub, and analytics-related services.

Start it with:

```bash
pnpm db:up
```

Prepare database migrations and generated database code:

```bash
pnpm db:start
```

### Start the Application

The shortest development workflow is:

```bash
pnpm go
```

This starts the required Docker services and launches the monorepo development tasks.

The main application runs on port `3000`.

Alternatively, run services and application tasks separately:

```bash
pnpm db:up
pnpm dev
```

### Stop Development Services

```bash
pnpm db:down
```

## Docker Deployment

The repository provides a Docker Compose configuration for self-hosted deployments.

### Create the Docker Environment

From the Docker directory:

```bash
cd docker
cp .env.example .env
```

Configure secure values before starting the deployment.

Important settings include:

```env
WEBAPP_URL=your_public_application_origin
NEXTAUTH_URL=your_public_application_origin

ENCRYPTION_KEY=replace_with_secure_random_value
NEXTAUTH_SECRET=replace_with_secure_random_value
CRON_SECRET=replace_with_secure_random_value

DATABASE_URL=your_postgresql_connection
REDIS_URL=your_redis_or_valkey_connection

HUB_API_KEY=replace_with_secure_hub_key
CUBEJS_API_SECRET=replace_with_secure_cube_secret
```

### Start the Stack

```bash
docker compose up -d
```

The self-hosted stack includes:

- Formbricks application
- PostgreSQL with pgvector
- Valkey
- Formbricks Hub
- Hub migrations
- Cube analytics service
- Database migration service

The application is exposed on port `3000`.

### Check Service Status

```bash
docker compose ps
```

### View Logs

```bash
docker compose logs -f
```

### Stop the Stack

```bash
docker compose down
```

Persistent database and cache volumes remain unless they are explicitly removed.

## Usage

### Create a Survey

1. Sign in to a workspace.
2. Create a survey.
3. Select a survey type.
4. Add questions.
5. Configure logic and display behavior.
6. Customize survey styling.
7. Select the target audience.
8. Configure triggers when using in-app or website surveys.
9. Preview the survey.
10. Publish it.

### Link Surveys

Link surveys can be shared directly without installing the survey SDK.

Typical uses include:

- Email campaigns
- Customer interviews
- Post-event surveys
- Research recruitment
- Public feedback forms

### In-App and Website Surveys

Embedded surveys can use user attributes, segments, and tracked events to decide when and to whom a survey should appear.

A typical integration flow is:

1. Install the Formbricks survey client.
2. Configure the application environment.
3. Identify the current user when available.
4. Attach user or contact attributes.
5. Track relevant product events.
6. Publish a targeted survey.
7. Let the survey client evaluate display conditions.

### Response Analysis

Survey responses can be:

- Reviewed individually
- Filtered
- Grouped
- Exported
- Analyzed through charts
- Associated with contacts
- Forwarded to external systems
- Consumed through API workflows

## Configuration

Formbricks uses environment variables for application, database, authentication, storage, email, queue, analytics, and integration settings.

### Core Application

| Variable | Purpose |
| --- | --- |
| `WEBAPP_URL` | Public application origin |
| `NEXTAUTH_URL` | Authentication callback origin |
| `ENCRYPTION_KEY` | Encrypts protected application data |
| `NEXTAUTH_SECRET` | Authentication signing secret |
| `CRON_SECRET` | Protects scheduled-job endpoints |
| `LOG_LEVEL` | Application logging level |
| `BASE_PATH` | Optional application sub-path |

### Database

| Variable | Purpose |
| --- | --- |
| `DATABASE_URL` | Main PostgreSQL connection |
| `HUB_DATABASE_URL` | Optional dedicated Hub database |
| `HUB_API_URL` | Formbricks Hub endpoint |
| `HUB_API_KEY` | Hub authentication credential |

The development and self-hosted Compose configurations use PostgreSQL with the pgvector extension.

### Cache and Background Jobs

| Variable | Purpose |
| --- | --- |
| `REDIS_URL` | Redis or Valkey connection |
| `BULLMQ_WORKER_ENABLED` | Enables local BullMQ workers |
| `BULLMQ_EXTERNAL_WORKER_ENABLED` | Uses separate worker deployment |
| `BULLMQ_WORKER_COUNT` | Worker instances per process |
| `BULLMQ_WORKER_CONCURRENCY` | Concurrent jobs per worker |

Valkey is used by the supplied Compose configurations as a Redis-compatible service.

### Survey Scheduling

| Variable | Purpose |
| --- | --- |
| `SURVEY_SCHEDULING_TIME_ZONE` | Time zone used for scheduled survey changes |
| `SURVEY_SCHEDULING_LOCAL_HOUR` | Scheduled execution hour |
| `SURVEY_SCHEDULING_LOCAL_MINUTE` | Scheduled execution minute |

### Analytics

| Variable | Purpose |
| --- | --- |
| `CUBEJS_API_URL` | Cube semantic-layer endpoint |
| `CUBEJS_API_SECRET` | Cube JWT signing secret |
| `CUBEJS_JWT_ISSUER` | Expected analytics token issuer |
| `CUBEJS_JWT_AUDIENCE` | Expected analytics token audience |

### Email

Self-hosted deployments can configure SMTP for invitations, authentication, and notification workflows.

Common settings include:

```text
MAIL_FROM
MAIL_FROM_NAME
SMTP_HOST
SMTP_PORT
SMTP_USER
SMTP_PASSWORD
SMTP_SECURE_ENABLED
```

### Observability

| Variable | Purpose |
| --- | --- |
| `OTEL_EXPORTER_OTLP_ENDPOINT` | OpenTelemetry collector endpoint |
| `OTEL_SERVICE_NAME` | Service identifier |
| `OTEL_LOGS_ENABLED` | Enables OTLP log export |
| `PROMETHEUS_ENABLED` | Enables Prometheus metrics |
| `PROMETHEUS_EXPORTER_PORT` | Metrics exporter port |
| `SENTRY_DSN` | Error and performance reporting |
| `SENTRY_ENVIRONMENT` | Sentry environment |

### Optional AI Configuration

AI-backed analysis can be configured with provider-specific values.

Examples include:

```text
AI_PROVIDER
AI_MODEL
AI_OPENAI_COMPATIBLE_BASE_URL
AI_OPENAI_COMPATIBLE_API_KEY
AI_GOOGLE_CLOUD_PROJECT
AI_GOOGLE_CLOUD_LOCATION
AI_AWS_REGION
AI_AZURE_BASE_URL
```

Hub enrichment can separately configure embeddings, sentiment, emotion, translation, and taxonomy services.

## API

Formbricks includes versioned APIs and OpenAPI definitions for programmatic integration.

API-based workflows can include:

- Survey management
- Response ingestion and retrieval
- Contact management
- Attribute management
- Environment configuration
- Webhook automation
- External analytics
- Data synchronization

Keep API credentials server-side and scope access according to the integration requirements.

## Development Commands

Start development dependencies:

```bash
pnpm db:up
```

Prepare the database:

```bash
pnpm db:start
```

Start the complete development workflow:

```bash
pnpm go
```

Start monorepo development tasks only:

```bash
pnpm dev
```

Build the monorepo:

```bash
pnpm build
```

Run database migrations:

```bash
pnpm db:migrate:dev
```

Seed the database:

```bash
pnpm db:seed
```

Run code generation:

```bash
pnpm generate
```

## Testing

Run the unit-test suites:

```bash
pnpm test
```

Run tests with coverage:

```bash
pnpm test:coverage
```

Run end-to-end tests:

```bash
pnpm test:e2e
```

Run linting:

```bash
pnpm lint
```

Run TypeScript validation:

```bash
pnpm typecheck
```

Check formatting:

```bash
pnpm format
```

Run Storybook:

```bash
pnpm storybook
```

## Production Considerations

Production deployments should:

- Replace every default secret
- Use a secure PostgreSQL deployment
- Persist database and object-storage data
- Protect PostgreSQL and Valkey from public networks
- Run behind HTTPS
- Configure trusted application origins
- Use durable Redis or Valkey storage for queued jobs
- Run separate BullMQ workers for higher-volume deployments
- Configure SMTP deliberately
- Back up PostgreSQL and uploaded data
- Monitor background jobs and survey scheduling
- Configure Cube analytics secrets correctly
- Restrict webhook access to trusted targets
- Keep AI provider credentials private
- Pin container versions for controlled upgrades
- Review observability and audit-log requirements

## Contributing

The repository uses a pnpm and Turborepo development workflow.

Before submitting changes:

- Install the pinned Node.js and pnpm versions
- Run the local development stack
- Keep changes focused
- Add tests for new behavior and regression fixes
- Run unit and integration tests
- Run Playwright tests for affected user workflows
- Run linting and type checks
- Update API definitions when contracts change
- Keep Prisma migrations and generated types synchronized
- Add translations for user-facing text
- Avoid committing credentials or local environment files
- Follow the repository's current contribution process before starting substantial changes
