"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["561"],{7323:function(e,i,n){n.r(i),n.d(i,{default:()=>h,frontMatter:()=>a,metadata:()=>r,assets:()=>l,toc:()=>d,contentTitle:()=>o});var r=JSON.parse('{"id":"backend/docker-usage","title":"Docker usage","description":"This page was last reviewed 29th October 2024. It needs to be reviewed again on the 29th April 2025.","source":"@site/docs/backend/docker-usage.md","sourceDirName":"backend","slug":"/backend/docker-usage","permalink":"/docs/backend/docker-usage","draft":false,"unlisted":false,"editUrl":"https://github.com/Amsterdam/development-standards/edit/main/docs/backend/docker-usage.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Using Git","permalink":"/docs/general/using-git"},"next":{"title":"Accessibility","permalink":"/docs/frontend/accessibility"}}'),s=n("5893"),t=n("65");let a={},o="Docker usage",l={},d=[{value:"What is the standard for Docker?",id:"what-is-the-standard-for-docker",level:2},{value:"When and for whom is this standard applicable?",id:"when-and-for-whom-is-this-standard-applicable",level:2},{value:"What is required when using Docker?",id:"what-is-required-when-using-docker",level:2},{value:"Standard ADO Pipelines",id:"standard-ado-pipelines",level:2},{value:"Example steps for deploying a Docker image to ACR:",id:"example-steps-for-deploying-a-docker-image-to-acr",level:3},{value:"Example of using environment variables:",id:"example-of-using-environment-variables",level:3},{value:"Example of using Docker Secrets (only available with Docker Swarm):",id:"example-of-using-docker-secrets-only-available-with-docker-swarm",level:3},{value:"What to avoid?",id:"what-to-avoid",level:2},{value:"Considerations",id:"considerations",level:2},{value:"Further Reading",id:"further-reading",level:2}];function c(e){let i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",input:"input",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"docker-usage",children:"Docker usage"})}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsx)(i.p,{children:"This page was last reviewed 29th October 2024. It needs to be reviewed again on the 29th April 2025."}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"what-is-the-standard-for-docker",children:"What is the standard for Docker?"}),"\n",(0,s.jsxs)(i.p,{children:["Use Docker for containerization in the development, testing, and production of applications within the Municipality. Developers must use Dockerfiles that meet the minimum requirements outlined below. Dockerfiles are stored in the application repository in ",(0,s.jsx)(i.strong,{children:"GitHub"}),", while the compiled Docker images are stored in ",(0,s.jsx)(i.strong,{children:"Azure Container Registry (ACR)"}),"."]}),"\n",(0,s.jsx)(i.h2,{id:"when-and-for-whom-is-this-standard-applicable",children:"When and for whom is this standard applicable?"}),"\n",(0,s.jsx)(i.p,{children:"This guideline applies to all developers (front-end and back-end), IT administrators, and DevOps teams within the Municipality. It applies to all projects. Projects that started before September 2024 with a different configuration must be adapted to this standard."}),"\n",(0,s.jsx)(i.h2,{id:"what-is-required-when-using-docker",children:"What is required when using Docker?"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Dockerfile"}),": A Dockerfile is mandatory and must meet the following minimum requirements:","\n",(0,s.jsxs)(i.ul,{className:"contains-task-list",children:["\n",(0,s.jsxs)(i.li,{className:"task-list-item",children:[(0,s.jsx)(i.input,{type:"checkbox",disabled:!0})," ",(0,s.jsx)(i.strong,{children:"Base Image"}),": Use well-known and well-maintained base images and make sure that the version number is the latest, otherwise -2/-3 of the latest version. In addition, it is of high importance that the version number should ",(0,s.jsx)(i.strong,{children:"never"})," explicitly state ",(0,s.jsx)(i.code,{children:"latest"}),". The most commonly used images are: Alpine, NGINX, Node.js, PHP, Postgres, Python and Ubuntu."]}),"\n",(0,s.jsxs)(i.li,{className:"task-list-item",children:[(0,s.jsx)(i.input,{type:"checkbox",disabled:!0})," ",(0,s.jsx)(i.strong,{children:"Minimal Installations"}),": Limit the installation of additional packages to what is strictly necessary to keep the image lightweight and secure."]}),"\n",(0,s.jsxs)(i.li,{className:"task-list-item",children:[(0,s.jsx)(i.input,{type:"checkbox",disabled:!0})," ",(0,s.jsx)(i.strong,{children:"Version Control"}),": Explicitly specify the versions of all dependencies to ensure consistency."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Docker Image Storage"}),": Dockerfiles must be stored in the application repository in ",(0,s.jsx)(i.strong,{children:"GitHub"}),". The compiled Docker images must be stored in ",(0,s.jsx)(i.strong,{children:"ACR"}),". Only in cases where an image is shared across multiple teams or other municipalities may ",(0,s.jsx)(i.strong,{children:"Docker Hub"})," be used."]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"standard-ado-pipelines",children:"Standard ADO Pipelines"}),"\n",(0,s.jsxs)(i.p,{children:["For building and pushing images to ",(0,s.jsx)(i.strong,{children:"ACR"}),", you can refer to the standard ADO pipelines available at:\r\n",(0,s.jsx)(i.a,{href:"https://github.com/Amsterdam/common-azure-pipelines",children:"ADO Pipelines for building and pushing images to ACR"})]}),"\n",(0,s.jsx)(i.h3,{id:"example-steps-for-deploying-a-docker-image-to-acr",children:"Example steps for deploying a Docker image to ACR:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"az acr login --name <acr_name>\r\ndocker build -t <acr_name>.azurecr.io/<image_name>:<tag> .\r\ndocker push <acr_name>.azurecr.io/<image_name>:<tag>\n"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Security"}),": The use of environment variables is mandatory for safely managing sensitive data. Avoid hard-coded sensitive information in Dockerfiles. If additional security is required, consider using ",(0,s.jsx)(i.strong,{children:"Docker Secrets"})," or other tools such as ",(0,s.jsx)(i.strong,{children:"GitHub Secrets"}),", ",(0,s.jsx)(i.strong,{children:"Azure Key Vault"}),", or ",(0,s.jsx)(i.strong,{children:"ADO Secrets"}),", depending on the application and the sensitivity of the data."]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"example-of-using-environment-variables",children:"Example of using environment variables:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-dockerfile",children:'# Set the environment variable for the database password\r\nENV DB_PASSWORD=${DB_PASSWORD}\r\n\r\n# Run the Python application using the environment variable\r\nCMD ["python", "app.py"]\n'})}),"\n",(0,s.jsx)(i.h3,{id:"example-of-using-docker-secrets-only-available-with-docker-swarm",children:"Example of using Docker Secrets (only available with Docker Swarm):"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:'# Docker Secrets are only available when using Docker Swarm\r\n# Create a Docker secret for the database password\r\necho "mysecretpassword" | docker secret create db_password -\r\n\r\n# Use the secret to create a Docker service (Docker Swarm required)\r\ndocker service create --name myapp --secret db_password myapp:latest\n'})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Regular Updates"}),": Docker images must be updated regularly to apply security patches and performance improvements. Establishing a minimum update frequency, such as monthly or quarterly, provides a clear framework for maintaining up-to-date images."]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"what-to-avoid",children:"What to avoid?"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Do not use unofficial or uncertified Docker images."}),"\n",(0,s.jsx)(i.li,{children:"Avoid building different images for DTAP/OTAP-environments."}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"considerations",children:"Considerations"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Compatibility with Existing Systems"}),": Thoroughly test Docker images to ensure compatibility with existing infrastructure before they are deployed to production."]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"further-reading",children:"Further Reading"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://docs.docker.com/",children:"Docker Official Documentation"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://docs.microsoft.com/en-us/azure/container-registry/",children:"Azure Container Registry Documentation"})}),"\n"]})]})}function h(e={}){let{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},65:function(e,i,n){n.d(i,{Z:function(){return o},a:function(){return a}});var r=n(7294);let s={},t=r.createContext(s);function a(e){let i=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(t.Provider,{value:i},e.children)}}}]);