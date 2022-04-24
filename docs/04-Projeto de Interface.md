
# PROJETO DE INTERFACE

Dentre as preocupações para a montagem da interface do sistema, estamos estabelecendo foco em questões como agilidade, acessibilidade e usabilidade. Desta forma, o projeto tem uma identidade visual padronizada em todas as telas que são projetadas para funcionamento em desktops e dispositivos móveis.  

## Fluxo do usuário 

O diagrama apresentado na Figura 9 mostra o fluxo de interação do usuário pelas telas do sistema. Cada uma das telas deste fluxo é detalhada na seção de Wireframes que se segue. Para visualizar o wireframe interativo, acesse o <a href="https://app.mockplus.com/app/rwcs6lNwjzZ/specs/design/06MMndz_Yn_?hmsr=share">Ambiente Mockplus do Projeto</a>

![alt text](/docs/img/projeto-interface/fluxograma.png)
##### Figura 9 - Fluxo de telas do usuário 

Observação: Na tela de login, inserimos o link de acesso para cada usuário, porém a diferenciação de acesso será por meio do CPF e registro realizado CNS (Paciente), CRM (Médico), COREN (Profissional da saúde). 

## Wireframes 

Conforme fluxo de telas do projeto apresentado no item anterior, as telas do sistema estão detalhadas nos itens que se seguem. As telas do sistema exibem uma estrutura comum que é exposta na Figura 10.  

- Cabeçalho - local onde são dispostos elementos fixos de identidade (logo) e navegação principal do site (menu da aplicação);  
- Conteúdo - apresenta o conteúdo da tela em questão;  
- Barra lateral - apresenta os elementos de navegação secundária, geralmente associados aos elementos do bloco de conteúdo; 
- Rodapé - Contém informações sobre o autor da seção de dados, direitos autorais ou links para documentos relacionados. 

![alt text](/docs/img/projeto-interface/1-estrutura-site.png)
##### Figura 10 - Estrutura padrão do site

- **Tela de login** 

Efetuar a autenticação do usuário através do preenchimento dos campos CPF e senha. Caso seja o primeiro acesso, o usuário deverá realizar o cadastro por meio do link “cadastre-se como paciente” ou “cadastre-se com profissional da saúde”. Caso o usuário precise redefinir senha, ele pode acessar o link “recuperar senha”

![alt text](/docs/img/projeto-interface/2-login.png)

- **Tela de recuperação de senha**

Caso o usuário opte por recuperar senha, opção apresentada na tela anterior, será direcionado para tela abaixo, que irá requerer um telefone cadastrado ou e-mail válidos para receber um código e efetivar a alteração.

![alt text](/docs/img/projeto-interface/3-redefinir.png)

- **Tela paciente home**

Após efetuar o login como paciente o usuário é direcionado para a Home-Page, que é apresentado os seguintes componentes abaixo: 

- Menu lateral – contém os acessos as páginas de: agendamentos, consulta on-line e exames/prescrições; 

- Conteúdo - contém quadros de avisos ao paciente; 

- Cabeçalho – contém o nome do usuário, foto e o menu, onde ao clicá-lo é apresentado as opções de dados cadastrais e sair. 

![alt text](/docs/img/projeto-interface/6-paciente-home.png)

- **Tela paciente dados cadastrais**

Caso o usuário seja um paciente e deseja se cadastrar, após ele clicar no link “*cadastre-se como paciente*” na tela de login, ele será direcionado para tela de cadastro que solicitará os seguintes dados: nome completo, CPF, RG, data de nascimento, CNS, nome da mãe, endereço, CEP, número, complemento, telefone, e-mail, senha e confirmação de senha para efetivar o cadastramento. Posteriormente, os usuários podem alterar seus dados, bem como a senha de acesso no menu. Na sequência, a tela é fechada voltando para a tela de login. 

![alt text](/docs/img/projeto-interface/4-cadastro-paciente.png)

- **Tela paciente agendamentos**

No bloco conteúdo, o paciente poderá fazer o agendamento e marcar as opções disponíveis de consulta para: clínico geral, psicólogo, retorno para entrega de resultados, exames e receitas. Após selecionar a opção desejada, ficará disponível um calendário para escolha de data e horário para a consulta. Nesta mesma tela, o paciente poderá reagendar e cancelar qualquer agendamento feito anteriormente.

![alt text](/docs/img/projeto-interface/7-paciente-agendamento.png)

- **Tela paciente consulta**

No bloco conteúdo, será informado ao paciente as seguintes informações: nome do médico, hora e data referentes ao seu atendimento, bem como um botão para inicializar e encerrar a videochamada. 

![alt text](/docs/img/projeto-interface/8-paciente-consulta.png)

- **Tela paciente exames**

No bloco conteúdo, o paciente poderá visualizar e imprimir os exames e prescrições médicas. Adicionamos um botão para anexar documentos em casos de retorno. 

![alt text](/docs/img/projeto-interface/9-paciente-exame.png)

- **Tela médico home**

Após efetuar o login como profissional da saúde, o usuário é direcionado para a Home-Page, que é apresentado os seguintes componentes abaixo: 

- Menu lateral – contém os acessos as páginas de: atendimentos, consulta on-line e exames/prescrições; 

- Conteúdo - contém quadros de avisos ao médico; 

- Cabeçalho – contém o nome do usuário, foto e o menu, onde ao clicá-lo é apresentado as opções de dados cadastrais e sair. 

![alt text](/docs/img/projeto-interface/10-medico-home.png)

- **Tela médico dados cadastrais**

aso o usuário seja um profissional da saúde e deseja se cadastrar, após ele clicar no link “*cadastre-se como profissional da saúde*” na tela de login, ele será direcionado para tela de cadastro que solicitará os seguintes dados: nome completo, CPF, RG, data de nascimento, CRM ou COREN, nome da mãe, endereço, CEP, número, complemento, telefone, e-mail, senha e confirmação de senha para efetivar o cadastramento. Posteriormente, os usuários podem alterar seus dados, bem como a senha de acesso no menu. Na sequência, a tela é fechada voltando para a tela de login. 

![alt text](/docs/img/projeto-interface/5-cadastro-profissional.png)

- **Tela médico atendimentos**

Constará a lista de pacientes, no bloco de conteúdo, que o médico deverá atender no dia, com horário e status do atendimento. Inserimos outras duas opções para confirmação e cancelamento caso haja alguma intercorrência, finalizado, o médico pode iniciar o atendimento

![alt text](/docs/img/projeto-interface/11-medico-atendimentos.png)

- **Tela médico consulta**

No conteúdo da página teremos: 

- Vídeo – A tela de vídeo será picture-in-picture, sendo possível ampliá-la ou minimizá-la para o preenchimento das demais informações. 

- Container de prontuário – O médico anotará as informações passadas pelo paciente, nesta área o profissional deverá analisar se é necessário o encaminhamento para um especialista, constatada a necessidade ele deverá salvar e encaminhar para o paciente. Quando há solicitação de consulta especializada, o prontuário é enviado para o departamento do posto de saúde para agendamento de forma convencional. 

- Container de receitas e de atestado – O médico preencherá com as devidas informações, adicionará a assinatura digital em seguida enviará para a tela de **exames e prescrições** do paciente. 

![alt text](/docs/img/projeto-interface/12-medico-consulta.png)

- **Tela médico exames**

No bloco conteúdo será possível realizar buscas por meio do nome do paciente, uma vez selecionado terá acesso a todos os exames e consultas feitas. Se desejar, o médico terá a opção de visualizar, imprimir e anexar documento. 

![alt text](/docs/img/projeto-interface/13-medico-exame.png)

- **Tela posto home**

Após efetuar o login como profissional da saúde, o usuário é direcionado para a Home-Page, que é apresentado os seguintes componentes abaixo: 

- Menu lateral – Acesso a página de exames e receitas; 

- Conteúdo - Quadros de avisos ao profissional da saúde; 

- Cabeçalho – Nome do usuário, foto e o menu, que ao clicar é apresentado as opções de dados cadastrais e sair. 

![alt text](/docs/img/projeto-interface/14-posto-home.png)

- **Tela posto receita**

No conteúdo da página teremos: 

- Barra de pesquisa - O profissional da saúde realizará buscas por meio do nome do paciente, uma vez selecionado terá acesso a todos os exames, consultas, prontuários e receitas. 

- Container de exames e consultas - Ao analisar o prontuário, ele efetuará o agendamento da consulta especializada ou exame de forma convencional e dará o retorno via anexação do documento e envio para o paciente. Após preenchimento deverá clicar em CONFIRMAR para que o paciente receba os avisos e possa acessá-los na parte Exames/Prescrições, encontradas na barra lateral esquerda da tela inicial.  

- Container de receitas – o profissional da saúde pode informar ao paciente os medicamentos disponíveis e indisponíveis no posto para retirada. Após preenchimento deverá clicar em CONFIRMAR para que o paciente receba os avisos. 

![alt text](/docs/img/projeto-interface/15-posto-receita.png)










