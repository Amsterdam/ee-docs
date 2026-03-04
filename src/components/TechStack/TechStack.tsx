import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { Heading, Image, Paragraph } from '@amsterdam/design-system-react';
import { useColorMode } from '@docusaurus/theme-common';
import LogoGrid from '../LogoGrid/LogoGrid';

import JavaScriptLogo from '@site/static/img/stack/javascript.svg';
import TypeScriptLogo from '@site/static/img/stack/typescript.svg';
import NextJsLogo from '@site/static/img/stack/Next.js_Logo_0.svg';
import NextJsLogoDark from '@site/static/img/stack/nextjs-logotype-dark.svg';
import PythonLogo from '@site/static/img/stack/Python-logo-notext.svg';
import NodeJsLogo from '@site/static/img/stack/nodejsStackedDark.svg';
import NodeJsLogoDark from '@site/static/img/stack/nodejsStackedLight.svg';
import DjangoLogo from '@site/static/img/stack/django-logo-negative.svg';
import ExpressJsLogo from '@site/static/img/stack/expressjs.svg';
import ExpressJsLogoDark from '@site/static/img/stack/expressjs-dark.svg';
import FastApiLogo from '@site/static/img/stack/FastAPI_logo.svg';
import NestJsLogo from '@site/static/img/stack/NestJS-logo-wordmark.svg';
import PostgresLogo from '@site/static/img/stack/PostgreSQL_logo.3colors.svg';
import MongoDbLogo from '@site/static/img/stack/MongoDB_SlateBlue.svg';
import MongoDbLogoDark from '@site/static/img/stack/MongoDB_White.svg';
import GraphQLLogo from '@site/static/img/stack/graphql.svg';
import ApolloGraphQlLogo from '@site/static/img/stack/apollo-graphql.svg';
import DockerLogo from '@site/static/img/stack/docker-logo-blue.svg';
import DockerLogoDark from '@site/static/img/stack/docker-logo-white.svg';
import HelmLogo from '@site/static/img/stack/helm-horizontal-color.svg';
import HelmLogoDark from '@site/static/img/stack/helm-horizontal-white.svg';
import JiraLogo from '@site/static/img/stack/Jira_attribution_light.svg';
import JiraLogoDark from '@site/static/img/stack/Jira_attribution_dark.svg';
import GitHubLogo from '@site/static/img/stack/GitHub_Lockup_Black.svg';
import GitHubLogoDark from '@site/static/img/stack/GitHub_Lockup_White.svg';
import KubernetesLogo from '@site/static/img/stack/kubernetes.svg';
import KubernetesLogoDark from '@site/static/img/stack/kubernetes-dark.svg';
import AzureCosmosLogo from '@site/static/img/stack/Azure_Cosmos_DB.svg';

export default function PreferredTechStack(): JSX.Element {
  const { colorMode } = useColorMode();

  return (
    <>
      <Paragraph
        className="ams-mb-s"
        style={{
          color: colorMode === 'dark' ? '#fff' : 'inherit',
        }}
      >
        This is a visual overview of the city of Amsterdam&apos;s primary technology stack. It
        highlights the main languages, frameworks, data stores, platforms and tooling selected as
        the standard for development teams in our organization.
      </Paragraph>
      <hr />
      <Heading level={2} className="ams-mb-m">
        Frontend languages
      </Heading>

      <LogoGrid
        images={[
          {
            node: (
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                rel="noreferrer"
              >
                <JavaScriptLogo title="JavaScript" />
              </a>
            ),
            height: 75,
          },
          {
            node: (
              <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
                <TypeScriptLogo title="TypeScript" />
              </a>
            ),
            height: 75,
          },
        ]}
      />

      <hr />
      <Heading level={2} className="ams-mb-m">
        Frontend libraries/frameworks
      </Heading>

      <LogoGrid
        images={[
          <a href="https://react.dev/" target="_blank" rel="noreferrer" key="react-logo-link">
            <Image src={useBaseUrl('/img/stack/React_logo_wordmark.png')} alt="React" />
          </a>,
          <a
            href="https://reactnative.dev/"
            target="_blank"
            rel="noreferrer"
            key="react-native-logo-link"
          >
            <Image src={useBaseUrl('/img/stack/react-native.png')} alt="React-Native" />
          </a>,
          {
            dark: (
              <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
                <NextJsLogoDark title="Next.js" />
              </a>
            ),
            light: (
              <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
                <NextJsLogo title="Next.js" />
              </a>
            ),
            height: 36,
            span: 2,
          },
        ]}
      />

      <hr />
      <Heading level={2} className="ams-mb-m">
        Backend languages
      </Heading>

      <LogoGrid
        images={[
          {
            node: (
              <a href="https://www.python.org/" target="_blank" rel="noreferrer">
                <PythonLogo key="python-logo" title="Python" />
              </a>
            ),
            height: 70,
          },
          {
            dark: (
              <a
                href="https://www.nodejs.org/"
                target="_blank"
                rel="noreferrer"
                key="nodejs-logo-link"
              >
                <NodeJsLogoDark title="Node.js" />
              </a>
            ),
            light: (
              <a
                href="https://www.nodejs.org/"
                target="_blank"
                rel="noreferrer"
                key="nodejs-logo-link"
              >
                <NodeJsLogo key="nodejs-logo" title="Node.js" />
              </a>
            ),
            height: 70,
          },
        ]}
      />

      <hr />
      <Heading level={2} className="ams-mb-m">
        Backend frameworks
      </Heading>

      <LogoGrid
        images={[
          <a
            href="https://www.djangoproject.com/"
            target="_blank"
            rel="noreferrer"
            key="django-logo-link"
          >
            <DjangoLogo title="Django" />
          </a>,
          {
            dark: (
              <a
                href="https://expressjs.com/"
                target="_blank"
                rel="noreferrer"
                key="express-logo-link"
              >
                <ExpressJsLogoDark title="Express" />
              </a>
            ),
            light: (
              <a
                href="https://expressjs.com/"
                target="_blank"
                rel="noreferrer"
                key="express-logo-link"
              >
                <ExpressJsLogo title="Express" />
              </a>
            ),
            height: 30,
          },
          {
            node: (
              <a href="https://fastapi.tiangolo.com/" target="_blank" rel="noreferrer">
                <FastApiLogo title="FastAPI" />
              </a>
            ),
            height: 30,
          },
          <a href="https://nestjs.com/" target="_blank" rel="noreferrer" key="nest-logo-link">
            <NestJsLogo title="Nest" />
          </a>,
        ]}
      />

      <hr />
      <Heading level={2} className="ams-mb-m">
        Low Code
      </Heading>

      <LogoGrid
        images={[
          <a href="https://www.mendix.com/" target="_blank" key="mendix-logo-link" rel="noreferrer">
            <Image
              src={useBaseUrl('/img/stack/Mendix-Primary-Logo-RGB-Blue-Large.webp')}
              alt="Mendix"
            />
          </a>,
        ]}
      />

      <hr />
      <Heading level={2} className="ams-mb-m">
        Databases
      </Heading>

      <LogoGrid
        images={[
          {
            node: (
              <a
                href="https://www.postgresql.org/"
                target="_blank"
                rel="noreferrer"
                key="postgres-logo-link"
              >
                <PostgresLogo title="PostgreSQL" />
              </a>
            ),
            height: 50,
          },
          {
            node: (
              <a
                href="https://azure.microsoft.com/en-us/products/cosmos-db"
                target="_blank"
                rel="noreferrer"
                key="azure-cosmos-link"
              >
                <AzureCosmosLogo title="Azure Cosmos DB" />
              </a>
            ),
            height: 70,
          },
          {
            dark: (
              <a
                href="https://www.mongodb.com/"
                target="_blank"
                rel="noreferrer"
                key="mongodb-logo-link"
              >
                <MongoDbLogoDark title="MongoDB" />
              </a>
            ),
            light: (
              <a
                href="https://www.mongodb.com/"
                target="_blank"
                rel="noreferrer"
                key="mongodb-logo-link"
              >
                <MongoDbLogo title="MongoDB" />
              </a>
            ),
          },
          {
            dark: (
              <a
                href="https://www.microsoft.com/en-us/sql-server"
                target="_blank"
                rel="noreferrer"
                key="microsoft-sql-server-link"
              >
                <Image
                  src={useBaseUrl('/img/stack/ms-sql-server-logo-dark.png')}
                  alt="Microsoft SQL Server"
                />
              </a>
            ),
            light: (
              <a
                href="https://www.microsoft.com/en-us/sql-server"
                target="_blank"
                rel="noreferrer"
                key="microsoft-sql-server-link"
              >
                <Image
                  src={useBaseUrl('/img/stack/ms-sql-server-logo.png')}
                  alt="Microsoft SQL Server"
                />
              </a>
            ),
            height: 70,
          },
        ]}
      />

      <hr />
      <Heading level={2} className="ams-mb-m">
        API
      </Heading>

      <LogoGrid
        images={[
          {
            node: (
              <a href="https://graphql.org/" target="_blank" rel="noreferrer" key="graphql-link">
                <GraphQLLogo title="GraphQL" />
              </a>
            ),
            height: 70,
          },
          {
            node: (
              <a
                href="https://developer.mozilla.org/en-US/docs/Glossary/REST"
                target="_blank"
                rel="noreferrer"
                key="rest-api-link"
              >
                <Image src={useBaseUrl('/img/stack/rest api.jpg')} alt="REST API" />
              </a>
            ),
            height: 90,
          },
          {
            node: (
              <a
                href="https://www.apollographql.com/"
                target="_blank"
                rel="noreferrer"
                key="graphql-link"
              >
                <ApolloGraphQlLogo title="Apollo Graph QL" />
              </a>
            ),
            height: 70,
          },
        ]}
      />

      <hr />
      <Heading level={2} className="ams-mb-m">
        Hosting/System deployment
      </Heading>

      <LogoGrid
        images={[
          {
            node: (
              <a
                href="https://learn.microsoft.com/en-us/azure/azure-resource-manager/"
                target="_blank"
                rel="noreferrer"
                key="azure-resource-manager-link"
              >
                <Image src={useBaseUrl('/img/stack/arm.png')} alt="Azure Resource Manager (ARM)" />
              </a>
            ),
            height: 90,
          },
          {
            dark: (
              <a
                href="https://kubernetes.io/"
                target="_blank"
                rel="noreferrer"
                key="kubernetes-link"
              >
                <KubernetesLogoDark title="Kubernetes" />
              </a>
            ),
            light: (
              <a
                href="https://kubernetes.io/"
                target="_blank"
                rel="noreferrer"
                key="kubernetes-link"
              >
                <KubernetesLogo title="Kubernetes" />
              </a>
            ),
            height: 50,
          },
          {
            dark: (
              <a href="https://www.docker.com/" target="_blank" rel="noreferrer" key="docker-link">
                <DockerLogoDark title="Docker" />
              </a>
            ),
            light: (
              <a href="https://www.docker.com/" target="_blank" rel="noreferrer" key="docker-link">
                <DockerLogo title="Docker" />
              </a>
            ),
          },
          {
            dark: (
              <a href="https://helm.sh/" target="_blank" rel="noreferrer" key="helm-link">
                <HelmLogoDark title="Helm" />
              </a>
            ),
            light: (
              <a href="https://helm.sh/" target="_blank" rel="noreferrer" key="helm-link">
                <HelmLogo title="Helm" />
              </a>
            ),
            height: 70,
          },
        ]}
      />

      <hr />
      <Heading level={2} className="ams-mb-m">
        Repo/CICD/Backlog
      </Heading>

      <LogoGrid
        images={[
          {
            node: (
              <a
                href="https://azure.microsoft.com/en-us/products/devops"
                target="_blank"
                rel="noreferrer"
                key="azure-devops-link"
              >
                <Image src={useBaseUrl('/img/stack/Azure-DevOps-Logo.png')} alt="Azure DevOps" />
              </a>
            ),
            height: 80,
          },
          {
            dark: (
              <a
                href="https://www.atlassian.com/software/jira"
                target="_blank"
                rel="noreferrer"
                key="jira-link"
              >
                <JiraLogoDark title="Jira" />
              </a>
            ),
            light: (
              <a
                href="https://www.atlassian.com/software/jira"
                target="_blank"
                rel="noreferrer"
                key="jira-link"
              >
                <JiraLogo title="Jira" />
              </a>
            ),
          },
          {
            dark: (
              <a href="https://github.com/" target="_blank" rel="noreferrer" key="github-link">
                <GitHubLogoDark title="GitHub" />
              </a>
            ),
            light: (
              <a href="https://github.com/" target="_blank" rel="noreferrer" key="github-link">
                <GitHubLogo title="GitHub" />
              </a>
            ),
            span: 2,
          },
        ]}
      />
    </>
  );
}
