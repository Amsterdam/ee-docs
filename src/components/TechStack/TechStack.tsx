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
import NlxLogo from '@site/static/img/stack/nlx.svg';
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
        highlights the main languages, frameworks, data stores, platforms and tooling commonly used
        in our projects.
      </Paragraph>
      <hr />
      <Heading level={2} className="ams-mb-m">
        Frontend languages
      </Heading>

      <LogoGrid
        images={[
          { node: <JavaScriptLogo title="JavaScript" />, height: 75 },
          { node: <TypeScriptLogo title="TypeScript" />, height: 75 },
        ]}
      />

      <hr />
      <Heading level={2} className="ams-mb-m">
        Frontend libraries/frameworks
      </Heading>

      <LogoGrid
        images={[
          <Image
            src={useBaseUrl('/img/stack/React_logo_wordmark.png')}
            alt="React"
            key="react-logo"
          />,
          <Image
            src={useBaseUrl('/img/stack/react-native.png')}
            alt="React-Native"
            key="react-native-logo"
          />,
          {
            dark: <NextJsLogoDark title="Next.js" />,
            light: <NextJsLogo title="Next.js" />,
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
            node: <PythonLogo key="python-logo" title="Python" />,
            height: 70,
          },
          {
            dark: <NodeJsLogoDark key="nodejs-logo" title="Node.js" />,
            light: <NodeJsLogo key="nodejs-logo" title="Node.js" />,
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
          <DjangoLogo title="Django" key="django-logo" />,
          {
            dark: <ExpressJsLogoDark title="Express" />,
            light: <ExpressJsLogo title="Express" />,
            height: 30,
          },
          {
            node: <FastApiLogo title="FastAPI" />,
            height: 30,
          },
          <NestJsLogo title="Nest" key="nest-logo" />,
        ]}
      />

      <hr />
      <Heading level={2} className="ams-mb-m">
        Low Code
      </Heading>

      <LogoGrid
        images={[
          <Image
            src={useBaseUrl('/img/stack/Mendix-Primary-Logo-RGB-Blue-Large.webp')}
            alt="Mendix"
            key="mendix-logo"
          />,
        ]}
      />

      <hr />
      <Heading level={2} className="ams-mb-m">
        Databases
      </Heading>

      <LogoGrid
        images={[
          {
            node: <PostgresLogo title="PostgreSQL" />,
            height: 50,
          },
          {
            node: <AzureCosmosLogo title="Azure Cosmos DB" />,
            height: 70,
          },
          {
            dark: <MongoDbLogoDark title="MongoDB" />,
            light: <MongoDbLogo title="MongoDB" />,
          },
          {
            dark: (
              <Image
                src={useBaseUrl('/img/stack/ms-sql-server-logo-dark.png')}
                alt="Microsoft SQL Server"
              />
            ),
            light: (
              <Image
                src={useBaseUrl('/img/stack/ms-sql-server-logo.png')}
                alt="Microsoft SQL Server"
              />
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
            node: <NlxLogo title="NLX" width="56" height="22" />,
            height: 30,
          },
          {
            node: <GraphQLLogo title="GraphQL" />,
            height: 70,
          },
          {
            node: <Image src={useBaseUrl('/img/stack/rest api.jpg')} alt="REST API" />,
            height: 90,
          },
          {
            node: <ApolloGraphQlLogo title="Apollo Graph QL" />,
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
              <Image src={useBaseUrl('/img/stack/arm.png')} alt="Azure Resource Manager (ARM)" />
            ),
            height: 90,
          },
          {
            dark: <KubernetesLogoDark title="Kubernetes" />,
            light: <KubernetesLogo title="Kubernetes" />,
            height: 50,
          },
          {
            dark: <DockerLogoDark title="Docker" />,
            light: <DockerLogo title="Docker" />,
          },
          {
            dark: <HelmLogoDark title="Helm" />,
            light: <HelmLogo title="Helm" />,
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
            node: <Image src={useBaseUrl('/img/stack/Azure-DevOps-Logo.png')} alt="Azure DevOps" />,
            height: 80,
          },
          {
            dark: <JiraLogoDark title="Jira" />,
            light: <JiraLogo title="Jira" />,
          },
          {
            dark: <GitHubLogoDark title="GitHub" />,
            light: <GitHubLogo title="GitHub" />,
            span: 2,
          },
        ]}
      />
    </>
  );
}
