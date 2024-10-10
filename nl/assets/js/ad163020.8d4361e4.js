"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[634],{9778:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var t=i(4848),s=i(8453);const r={},a="Docker Standard for Internal Application Development and Deployment",o={id:"backend/docker-usage",title:"Docker Standard for Internal Application Development and Deployment",description:"This page was last reviewed 10th October 2024. It needs to be reviewed again on the 10th April 2025.",source:"@site/docs/backend/docker-usage.md",sourceDirName:"backend",slug:"/backend/docker-usage",permalink:"/nl/docs/backend/docker-usage",draft:!1,unlisted:!1,editUrl:"https://github.com/Amsterdam/development-standards/edit/main/docs/backend/docker-usage.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Using Git",permalink:"/nl/docs/general/using-git"},next:{title:"Accessibility",permalink:"/nl/docs/frontend/accessibility"}},l={},d=[{value:"What is the standard for Docker?",id:"what-is-the-standard-for-docker",level:2},{value:"When and for whom is this standard applicable?",id:"when-and-for-whom-is-this-standard-applicable",level:2},{value:"What is required when using Docker?",id:"what-is-required-when-using-docker",level:2},{value:"Standard ADO Pipelines",id:"standard-ado-pipelines",level:2},{value:"Example steps for deploying a Docker image to ACR:",id:"example-steps-for-deploying-a-docker-image-to-acr",level:3},{value:"Example of using environment variables:",id:"example-of-using-environment-variables",level:3},{value:"Example of using Docker Secrets (only available with Docker Swarm):",id:"example-of-using-docker-secrets-only-available-with-docker-swarm",level:3},{value:"What to avoid?",id:"what-to-avoid",level:2},{value:"Considerations",id:"considerations",level:2},{value:"Further Reading",id:"further-reading",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",input:"input",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"docker-standard-for-internal-application-development-and-deployment",children:"Docker Standard for Internal Application Development and Deployment"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"This page was last reviewed 10th October 2024. It needs to be reviewed again on the 10th April 2025."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"what-is-the-standard-for-docker",children:"What is the standard for Docker?"}),"\n",(0,t.jsxs)(n.p,{children:["Use Docker for containerization in the development, testing, and production of applications within the Municipality. Developers must use Dockerfiles that meet the minimum requirements outlined below. Dockerfiles are stored in the application repository in ",(0,t.jsx)(n.strong,{children:"GitHub"}),", while the compiled Docker images are stored in ",(0,t.jsx)(n.strong,{children:"Azure Container Registry (ACR)"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"when-and-for-whom-is-this-standard-applicable",children:"When and for whom is this standard applicable?"}),"\n",(0,t.jsx)(n.p,{children:"This guideline applies to all developers (front-end and back-end), IT administrators, and DevOps teams within the Municipality. It applies to all projects. Projects that started before September 2024 with a different configuration must be adapted to this standard."}),"\n",(0,t.jsx)(n.h2,{id:"what-is-required-when-using-docker",children:"What is required when using Docker?"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Dockerfile"}),": A Dockerfile is mandatory and must meet the following minimum requirements:","\n",(0,t.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",disabled:!0})," ",(0,t.jsx)(n.strong,{children:"Base Image"}),": Use well-known and well-maintained base images and make sure that the version number is the latest, otherwise -2/-3 of the latest version. In addition, it is of high importance that the version number should ",(0,t.jsx)(n.strong,{children:"never"})," explicitly state ",(0,t.jsx)(n.code,{children:"latest"}),". The most commonly used images are: Alpine, NGINX, Node.js, PHP, Postgres, Python and Ubuntu."]}),"\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",disabled:!0})," ",(0,t.jsx)(n.strong,{children:"Minimal Installations"}),": Limit the installation of additional packages to what is strictly necessary to keep the image lightweight and secure."]}),"\n",(0,t.jsxs)(n.li,{className:"task-list-item",children:[(0,t.jsx)(n.input,{type:"checkbox",disabled:!0})," ",(0,t.jsx)(n.strong,{children:"Version Control"}),": Explicitly specify the versions of all dependencies to ensure consistency."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Docker Image Storage"}),": Dockerfiles must be stored in the application repository in ",(0,t.jsx)(n.strong,{children:"GitHub"}),". The compiled Docker images must be stored in ",(0,t.jsx)(n.strong,{children:"ACR"}),". Only in cases where an image is shared across multiple teams or other municipalities may ",(0,t.jsx)(n.strong,{children:"Docker Hub"})," be used."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"standard-ado-pipelines",children:"Standard ADO Pipelines"}),"\n",(0,t.jsxs)(n.p,{children:["For building and pushing images to ",(0,t.jsx)(n.strong,{children:"ACR"}),", you can refer to the standard ADO pipelines available at:\n",(0,t.jsx)(n.a,{href:"https://github.com/Amsterdam/common-azure-pipelines",children:"ADO Pipelines for building and pushing images to ACR"})]}),"\n",(0,t.jsx)(n.h3,{id:"example-steps-for-deploying-a-docker-image-to-acr",children:"Example steps for deploying a Docker image to ACR:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"az acr login --name <acr_name>\ndocker build -t <acr_name>.azurecr.io/<image_name>:<tag> .\ndocker push <acr_name>.azurecr.io/<image_name>:<tag>\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Security"}),": The use of environment variables is mandatory for safely managing sensitive data. Avoid hard-coded sensitive information in Dockerfiles. If additional security is required, consider using ",(0,t.jsx)(n.strong,{children:"Docker Secrets"})," or other tools such as ",(0,t.jsx)(n.strong,{children:"GitHub Secrets"}),", ",(0,t.jsx)(n.strong,{children:"Azure Key Vault"}),", or ",(0,t.jsx)(n.strong,{children:"ADO Secrets"}),", depending on the application and the sensitivity of the data."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"example-of-using-environment-variables",children:"Example of using environment variables:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-dockerfile",children:'# Set the environment variable for the database password\nENV DB_PASSWORD=${DB_PASSWORD}\n\n# Run the Python application using the environment variable\nCMD ["python", "app.py"]\n'})}),"\n",(0,t.jsx)(n.h3,{id:"example-of-using-docker-secrets-only-available-with-docker-swarm",children:"Example of using Docker Secrets (only available with Docker Swarm):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'# Docker Secrets are only available when using Docker Swarm\n# Create a Docker secret for the database password\necho "mysecretpassword" | docker secret create db_password -\n\n# Use the secret to create a Docker service (Docker Swarm required)\ndocker service create --name myapp --secret db_password myapp:latest\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Regular Updates"}),": Docker images must be updated regularly to apply security patches and performance improvements. Establishing a minimum update frequency, such as monthly or quarterly, provides a clear framework for maintaining up-to-date images."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"what-to-avoid",children:"What to avoid?"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Do not use unofficial or uncertified Docker images."}),"\n",(0,t.jsx)(n.li,{children:"Avoid building different images for DTAP/OTAP-environments."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"considerations",children:"Considerations"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Compatibility with Existing Systems"}),": Thoroughly test Docker images to ensure compatibility with existing infrastructure before they are deployed to production."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"further-reading",children:"Further Reading"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.docker.com/",children:"Docker Official Documentation"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/azure/container-registry/",children:"Azure Container Registry Documentation"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var t=i(6540);const s={},r=t.createContext(s);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);