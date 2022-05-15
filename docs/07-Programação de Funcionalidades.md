# FUNCIONALIDADES DO SISTEMA

Nesta seção são apresentadas as telas desenvolvidas para cada uma das funcionalidades do sistema com a atribuição dos requisitos atendidos.

- **Tela de Login (RF–02, RF–03)**

Tela que permite ao usuário realizar o login ou o registro na aplicação, o usuário poderá escolher entre se registrar como médico, paciente ou profissional da saúde, sendo assim cada persona na aplicação poderá acessar rotas e funcionalidades diferentes.

![alt text](/docs/img/template/login.png)
##### *Figura 23 - tela de Login*

<u>**Requisitos atendidos**</u>

<li>RF-02 - O sistema deve cadastrar usuários. O cadastro deve conter nome completo, tipo de função no sistema (role), documento, e-mail e senha.</li>
<li>RF-03 - O sistema deve solicitar a senha do paciente para acesso.</li>

<u>**Artefatos da funcionalidade**</u>

- index_cadastro.html
- style_cadastro.css
- cadastro.js

<u>**Estrutura de Dados**</u>

![alt text](/docs/img/template/estrutura-login.png)
##### *Figura 28 - estrutura de dados*

<u>**Instruções de acesso**</u>

1. Abra um navegador de Internet e informe a seguinte URL: https://icei-puc-minas-pmv-ads.github.io/sus_online/views/authorization/
2. A tela de login é a primeira funcionalidade exibida pelo aplicativo.

- **Tela de agendamento – Paciente (RF–07, RF–08, RF–09 e RF–10)**

Tela que permite ao usuário selecionar a especialidade médica desejada e através da opção selecionada, o usuário poderá escolher a data e a hora da consulta, que serão armazenados no LocalStorage com estruturas dados baseada em JSON, retornando no campo agendamentos realizados a confirmação da consulta contendo o nome do médico, data e horário.  

![alt text](/docs/img/template/agendamento.png)
##### *Figura 24 - tela de agendamento do paciente*

<u>**Requisitos atendidos**</u>

RF-07 - O sistema deve disponibilizar para o paciente o recurso para agendamento de consultas. As consultas serão restritas as seguintes áreas: Clínico geral, psicólogo, retorno para entrega de resultados, exames e receitas.  

RF-08 - O sistema deve disponibilizar o quadro de horários para agendamento de consultas.  

RF-09 - O sistema deve disponibilizar para o paciente o recurso para cancelamento de uma consulta já marcada. 

RF-10 - O sistema deve disponibilizar para o paciente o recurso de reagendamento de consultas.

<u>**Artefatos da funcionalidade**</u>

- index.html 
- index.css 
- index.js 
- favicon.ico 
- logo.png 
- user.png 

<u>**Estrutura de Dados**</u>

![alt text](/docs/img/template/estrutura.png)
##### *Figura 26 – estrutura*

<u>**Instruções de acesso**</u>

1. Faça o download do arquivo do projeto (ZIP) ou clone do projeto no GitHub; 
2. Descompacte o arquivo em uma pasta específica; 
3. Abra o Visual Studio Code e execute o Live Server; 

- **Tela de Cadastro do Paciente (RF-04, RF-05, RNF-01, RNF-07, RNF-09)**

A tela de cadastro do paciente permite ao usuário informar seus dados pessoais, em seguida, efetua o cadastro. 

![alt text](/docs/img/template/cadastro.png)
##### *Figura 27 - tela de cadastro do paciente*

<u>**Requisitos atendidos**</u>

RF-04 - O sistema deve ser capaz de disponibilizar ao paciente a alteração de seus dados, exceto do CPF.

<u>**Artefatos da funcionalidade**</u>

- index_cadastro.html 
- style_cadastro.css 
- cadastro.js 

<u>**Estrutura de Dados**</u>

![alt text](/docs/img/template/estrutura-cadastro.png)
##### *Figura 28 - estrutura de dados*

<u>**Instruções de acesso**</u>

1. Faça o download do arquivo do projeto (ZIP) ou clone do projeto no GitHub; 
2. Descompacte o arquivo em uma pasta específica; 
3. Abra o Visual Studio Code e execute o Live Server; 

- **Tela home-page do paciente (RF-12, RNF-01, RNF-03, RNF-04)**

A tela home-page do paciente permite a visualização dos alertas sobre medicamentos, consultas etc.

![alt text](/docs/img/template/home_paciente.png)
##### *Figura 29 - Tela Home-Page do Paciente*

<u>**Requisitos Atendidos**</u>

RF-12 - O sistema deve notificar o paciente por SMS, e-mail e quadro de notificação, eventuais intercorrências referentes ao seu atendimento, casos como ausência do médico e atrasos.

<u>**Artefatos da funcionalidade**</u>

- index.html
- home_paciente.css
- foto_usuario.png
- warning.png
- alert.png

<u>**Instruções de acesso**</u>

1. Faça o download do arquivo do projeto (ZIP) ou clone do projeto no GitHub; 
2. Descompacte o arquivo em uma pasta específica; 
3. Abra o Visual Studio Code e execute o Live Server; 

- **Tela de consulta do paciente (RF-1, RF-13, RNF-11)**

A tela de consultas do paciente permite a interaçao por chamada de vídeo entre o paciente e o médico.

![alt text](/docs/img/template/paciente-consulta.png)
##### *Figura 30 - Tela de consulta do Paciente*

<u>**Requisitos Atendidos**</u>

RF-13 - O sistema deve oferecer consultas através de videochamada entre médico e paciente.

<u>**Artefatos da funcionalidade**</u>

- index.html
- style.css

<u>**Instruções de acesso**</u>

1. Faça o download do arquivo do projeto (ZIP) ou clone do projeto no GitHub; 
2. Descompacte o arquivo em uma pasta específica; 
3. Abra o Visual Studio Code e execute o Live Server; 
