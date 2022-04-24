
# Metodologia

A metodologia contempla as definições de ferramentas utilizadas pela equipe tanto para a manutenção dos códigos e demais artefatos quanto para a organização do time na execução das tarefas do projeto.

## Relação de Ambientes de Trabalho

Os artefatos do projeto serão desenvenvolvidos a partir das plataformas GitHub e Figma, e a relação dos ambientes está apresentada na tabela abaixo.

|Ambiente     | Plataforma  |Link de acesso |
|-------|-------------------------|----|
| Repositório de código fonte | GitHub | <https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t10-sus_online> |
| Design de Interfaces | Figma | <https://www.figma.com/file/AL18hLgkr8t7kHa3BGKWBq/Sus-Online?node-id=0%3A1> |
| Gerenciamento do Projeto | GitHub | <https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t10-sus_online/projects/1> |
| Comunicação e Reuniões | Microsoft Teams | <https://teams.microsoft.com/_#/school/conversations/Geral?threadId=19:x-1C6F33rd95TjwGJk7DnskcTGfOJJXue5s54HXySrY1@thread.tacv2&ctx=channel>|

## Controle de Versão

Para a gestão do código fonte será utilizado o modelo de processo baseado no Git Flow, como mostrado na figura a seguir:

![alt text](/docs/img/git_Flow.png)

*Figura 1 - Fluxo de controle do código fonte*

A ferramenta de controle de versão adotada no projeto foi o [Git](https://git-scm.com/), sendo que o [Github](https://github.com) foi utilizado para hospedagem do repositório.

O projeto segue a seguinte convenção para o nome de branches:

- `main`: versão estável já testada do software
- `unstable`: versão já testada do software, porém instável
- `testing`: versão em testes do software
- `dev`: versão de desenvolvimento do software

Quanto à gerência de issues, o projeto adota a seguinte convenção para
etiquetas:

- `bug`: Indica um problema inesperado ou comportamento involuntário
- `duplicate`: Indica problemas, pull requests ou discussões
- `help wanted`: Indica que um mantenedor deseja ajudar em um problema ou uma pull request
- `enhancement`: uma funcionalidade precisa ser melhorada
- `invalid`: Indica que um problema, pull request ou discussão já não é relevante
- `documentation`: melhorias ou acréscimos à documentação
- `question`: Indica que um problema, pull request ou discussão precisa de mais informações
- `bug`: uma funcionalidade encontra-se com problemas
- `feature`: uma nova funcionalidade precisa ser introduzida
- `wontfix`: Indica que o trabalho não continuará em um problema, pull request ou discussão

## Gerenciamento de Projeto

### Divisão de Papéis

A equipe está organizada da seguinte forma:

- **Scrum Master:**
    - Pedro Vitor
- **Product Owner:**
    - Gabriel Maximino
- **Equipe de Desenvolvimento:**
    - José Vicente
    - Karen Franco
    - Ursula Figueiredo
- **Equipe de Design:**
    - Luiz Souza

### Processo

A ferramenta "projects" do GitHub está sendo utilizada para a organização e distribuição de tarefas e estruturada com as seguintes listas:

- `Backlog`: recebe as tarefas a serem trabalhadas e representa o Product Backlog. Todas as atividades identificadas no decorrer do projeto também devem ser incorporadas a esta lista.

- `To Do`: Esta lista representa o Sprint Backlog. Este é o Sprint atual que estamos trabalhando.

- `In progress`: Quando uma tarefa tiver sido iniciada, ela é movida para esta coluna.

- `Test`: Checagem de Qualidade. Ao certificar que a tarefa foi finalizada e está em teste, é movida para esta coluna.

-  `Done`: nesta lista são colocadas as tarefas que passaram pelos testes e controle de qualidade e estão prontos para ser entregues ao usuário. Não há mais edições ou revisões necessárias.

![alt text](/docs/img/tela_kanban.png)
*Figura 2 - Tela do quadro de distribuição e organização de tarefas no GitHub*

### Ferramentas

As ferramentas empregadas no projeto são:

- GitHub
- Git
- VS Code
- Figma
- Microsoft Teams
- Canva

O VS Code foi escolhido porque ele possui uma integração com o Git e GitHub. O Microsoft Teams foi escolhido por ser o software padrão para as aulas, e por fim, para criar diagramas utilizamos o Figma que permite edição em tempo real de todos os participantes do grupo.