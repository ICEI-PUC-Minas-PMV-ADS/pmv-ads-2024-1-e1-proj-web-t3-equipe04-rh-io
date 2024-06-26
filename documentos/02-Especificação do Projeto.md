# Especificação do Projeto

Nesta seção do documento, abordaremos a especificação do projeto RH.IO, focando na perspectiva dos usuários e nas etapas essenciais para seu desenvolvimento. Utilizaremos diversas técnicas e ferramentas, incluindo a histórias de usuários, requisitos funcionais e não funcionais, além das restrições do projeto.

As histórias de usuários serão essenciais para descrever as interações e funcionalidades desejadas pelos usuários ao utilizar a aplicação. Os requisitos funcionais e não funcionais serão estabelecidos para definir as características e capacidades que o sistema deve possuir para atender às necessidades identificadas.

Adicionalmente, consideraremos as restrições do projeto, como o prazo de entrega e as tecnologias a serem utilizadas, garantindo a viabilidade e sucesso do RH.IO. Essas informações serão cruciais para definir uma solução eficaz e satisfatória, alinhada às necessidades e expectativas dos usuários, contribuindo para a otimização dos processos de recrutamento e seleção, e melhorando a experiência tanto dos candidatos quanto das empresas.


## Perfis de Usuários

### Perfil 01: Analista de RH

| **Descrição** | **Necessidades**                                            |
|---------------|-------------------------------------------------------------|
| Profissional do setor de RH | 1. Gerenciar o quadro de funcionários. <br>  2. Acompanhar o processo de recrutamento e seleção. <br>  3. Gerenciar a lista de reprovados. |

### Auxiliar de Recursos Humanos

| **Descrição** | **Necessidades**                                            |
|---------------|-------------------------------------------------------------|
| Auxilia no setor de RH | Acesso rápido a informação para admissão e demissão de colaboradores. |

### Candidato

| **Descrição** | **Necessidades**                                            |
|---------------|-------------------------------------------------------------|
| Candidatos concorrendo à vaga | 1. Conhecer o processo de recrutamento e seleção. <br> 2. Se aplicar à vaga e ser selecionado. <br>  3. Receber um feedback. |

### Coordenador de RH

| **Descrição** | **Necessidades**                                            |
|---------------|-------------------------------------------------------------|
| Coordenador de RH | Saber o status dos processos de admissão e demissão. |

### Gerente de RH

| **Descrição** | **Necessidades**                                            |
|---------------|-------------------------------------------------------------|
| Gerente de RH | 1. Agilizar o processo de admissão. <br> 2. Fácil acesso a informações dos candidatos. |

## Histórias de Usuários

|EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE` |PARA ... `PORQUE`                 |
|--------------------|---------------------------|----------------------------------|
| Analista de RH     | Resolver problema de congestionamento de currículo.                       | Para uma melhor e mais precisa avaliação dos candidatos.                             |
| Candidato          | Saber do feedback sobre o processo seletivo.                       | Para saber qual status está o seu processo de contratação.                               |
| Gerente de RH      | Acesso a informações dos novos candidatos, tais como: Faculdades, cursos e experiências profissionais.                       | Saber se o candidato se encaixa no perfil da vaga.                               |
| Colaborador        | Deseja subir de cargo na empresa pois o RH não consegue analisar o currículo de forma eficiente.                       | Aumento salarial.                             |
| Coordenador de RH  | Quero saber como vai o andamento dos processos de admissão e demissão.                       | Garantir que os mesmos ocorram normalmente.                              |
| Coordenador de projetos | Uma forma de facilitar a comunicação entre setores.                      | Solicitar a admissão de candidatos para o preenchimento da vaga do setor específico.                              |

## Requisitos do Projeto

### Requisitos Funcionais

|ID    | Descrição                | Prioridade |
|-------|---------------------------------|----|
| RF-01 | A aplicação deve proporcionar ao usuário a capacidade de registrar uma conta. | ALTA| 
| RF-02 | A aplicação deve facultar ao usuário a possibilidade de efetuar o acesso à sua conta. | ALTA|
| RF-03 | A aplicação deve oferecer ao usuário a funcionalidade de uma barra de pesquisa, permitindo a pesquisa de um candidato pelo seu nome ou número de identificação. | ALTA| 
| RF-04 | A aplicação deve permitir que os recrutadores criem marcadores individuais indicando se o candidato foi reprovado ou aprovado. | MÉDIA |
| RF-05 | A aplicação deve facultar ao usuário a capacidade de editar o perfil da sua conta registrada. | BAIXA | 
| RF-06 | A aplicação deve possibilitar ao usuário efetuar o registro de colaboradores. | ALTA  |
| RF-07 | A aplicação deve possibilitar ao recrutador a verificação das informações registradas no perfil do candidato. | ALTA | 
| RF-08 | A aplicação deve permitir que o recrutador adicione documentos relevantes ao perfil do candidato. | ALTA  |
| RF-09 | A aplicação deve permitir que os recrutadores avaliem os candidatos por meio de um sistema de feedback. | MÉDIA | 
| RF-10 | A aplicação deve incluir uma funcionalidade que permita aos usuários com daltonismo alterar os esquemas de cores. Essa opção é fundamental para garantir uma experiência acessível e inclusiva. | MÉDIA |
| RF-11 | A aplicação exibe um quadro de solicitações de funcionários para determinados setores. | MÉDIA| 
| RF-12 | A aplicação deve possibilitar aos recrutadores enviar automaticamente um email aos candidatos reprovados, informando sobre a decisão. | BAIXA |


### Requisitos não Funcionais

|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
| RNF-01 |  A aplicação deve ser disponibilizada em um ambiente acessível ao público na Internet.                    | ALTA    | 
| RNF-02 |  A aplicação deverá ser adaptável, possibilitando a visualização otimizada em diversos dispositivos, tais como computadores, celulares, entre outros.                    | MÉDIA    | 
| RNF-03 |  A aplicação deve apresentar compatibilidade com diversos navegadores. O site deve ser meticulosamente ajustado para assegurar um desempenho consistente nos principais navegadores.                     | ALTA   | 
| RNF-04 |  A aplicação deve otimizar o desempenho do site a fim de assegurar tempos de carregamento rápidos.                     | ALTA   | 
| RNF-05 |  O site deve ser fácil de usar, com uma interface intuitiva que permita aos usuários encontrar rapidamente as informações e funcionalidades que procuram                    | ALTA    | 
| RNF-06 |  O site deve ser capaz de lidar com um aumento significativo no número de usuários e de conteúdo sem comprometer o desempenho ou a usabilidade                     | ALTA    | 

