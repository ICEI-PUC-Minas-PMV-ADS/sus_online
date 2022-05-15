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

Tela que permite ao usuário a seleção de agendamento e reagendamento para consulta. A seleção de data e hora são armazenadas no LocalStorage com estruturas dados baseada em JSON. 

![alt text](/docs/img/template/agendamento.png)
##### *Figura 24 - tela de agendamento do paciente*

A tela de agendamento do paciente permite ao usuário selecionar a especialidade médica desejada, através do botão que marcará somente uma opção. Através da opção escolhida, o usuário poderá escolher a data e a hora da consulta, que serão armazenados no LocalStorage com estruturas dados baseada em JSON, retornando no campo agendamentos realizados confirmação da consulta contendo o nome do médico, data e horário. Um exemplo da tela é apresentado na figura 25. 

![alt text](/docs/img/template/agendamentorealizado.png)
##### *Figura 25 - tela com agendamento realizado*

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