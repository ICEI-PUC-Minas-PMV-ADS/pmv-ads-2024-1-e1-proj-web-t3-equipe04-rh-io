# Especificação do Projeto

## Perfis de Usuários

[Enumere e faça o detalhamento dos perfis de usuários. Utilize o modelo de tabela abaixo para sintetizá-los.]

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 01: Analista de RH</th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Profissional do setor de RH </td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
1. Gerenciar o quadro de funcionários. 
2. Acompanhar o processo de recrutamento e seleção. 
3. Gerenciar a lista de reprovados. </td>
</tr>
</tbody>
</table>



<table>
<tbody>
<tr align=center>
<th colspan="2">Auxiliar de Recursos Humanos</th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px"> Auxilia no setor de RH </td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
Acesso rápido a informação para admissão e demissão de colaboradores.  </td>
</tr>
</tbody>
</table>


<table>
<tbody>
<tr align=center>
<th colspan="2">Candidato</th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px"> Candidatos concorrendo à vaga </td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
1. Conhecer o processo de recrutamento e seleção. 
2. Se aplicar à vaga e ser selecionado.  
3. Receber um feedback </td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Coordenador de RH</th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px"> Coordenador de RH </td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
Saber o status dos processos de admissão e demissão.  </td>
</tr>
</tbody>
</table>


<table>
<tbody>
<tr align=center>
<th colspan="2">Gerente de RH</th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Gerente de RH  </td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
1.Agilizar o processo de admissão. 
2. Fácil acesso a informações dos candidatos.  </td>
</tr>
</tbody>
</table>

## Histórias de Usuários


[Utilize o modelo de tabela abaixo para apresentar as histórias de usuários.]

|EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE` |PARA ... `PORQUE`                 |
|--------------------|---------------------------|----------------------------------|
| Analista de RH     | Resolver problema de congestionamento de currículo.                       | Para uma melhor e mais precisa avaliação dos candidatos.                             |
| Candidato                 | Saber do feedback sobre o processo seletivo.                       | Para saber qual status está o seu processo de contratação.                               |
| Gerente de RH                 | Acesso a informações dos novos candidatos, tais como: Faculdades, cursos e experiências profissionais.                       | Saber se o candidato se encaixa no perfil da vaga.                               |
| Colaborador                | Deseja subir de cargo na empresa pois o RH não consegue analisar o currículo de forma eficiente.                       | Aumento salarial.                             |
| Coordenador de RH               | Quero saber como vai o andamento dos processos de admissão e demissão.                       | Garantir que os mesmos ocorram normalmente.                              |
| Coordenador de projetos                | Uma forma de facilitar a comunicação entre setores.                      | Solicitar a admissão de candidatos para o preencimento da vaga do setor específico.                              |

## Requisitos do Projeto

[Com base nas Histórias de Usuários, enumere os requisitos da solução. Lembre-se que cada requisito deve corresponder a uma, e somente uma, característica alvo da solução. Além disso, certifique-se de que todos os aspectos capturados nas Histórias de Usuário foram cobertos.]

### Requisitos Funcionais



|ID    | Descrição                | Prioridade |
|-------|---------------------------------|----|
| RF-01 |A aplicação deve proporcionar ao usuário a capacidade de registar uma conta. |ALTA| 
| RF-02 |A aplicação deve facultar ao utilizador a possibilidade de efetuar o acesso à sua conta. | ALTA|
| RF-03 |A aplicação deve oferecer ao usuário a funcionalidade de uma barra de pesquisa, permitindo a pesquisa de um candidato pelo seu nome ou número de identificação. |ALTA| 
| RF-04 |A aplicação deve permitir que os recrutadores criem marcadores individuais indicando se o candidato foi reprovado ou aprovado. |MÉDIA |
| RF-05 |A aplicação deve facultar ao usuário a capacidade de editar o perfil da sua conta registrada. |BAIXA | 
| RF-06 |A aplicação deve possibilitar ao usuário efetuar o registo de colaboradores. |ALTA  |
| RF-07 |A aplicação deve possibilitar ao recrutador a verificação das informações registradas no perfil do candidato. |ALTA | 
| RF-08 |A aplicação deve permitir que o recrutador adicione documentos relevantes ao perfil do candidato. |ALTA  |
| RF-09 |A aplicação deve permitir que os recrutadores avaliem os candidatos por meio de um sistema feedback. |MÉDIA | 
| RF-10 |A aplicação deve incluir uma funcionalidade que permita aos usuários com daltonismo alterar os esquemas de cores. Essa opção é fundamental para garantir uma experiência acessível e inclusiva. |MÉDIA |
| RF-11 |A aplicação exibe um quadro de solicitações de funcionários para determinados setores. |MÉDIA| 
| RF-12|A aplicação deve possibilitar aos recrutadores enviar automaticamente um email aos candidatos reprovados, informando sobre a decisão. |BAIXA |

**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais

[Utilize o modelo de tabela abaixo para apresentar os requisitos não-funcionais]

|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
| RNF-01 |  A aplicação deve ser disponibilizada em um ambiente acessível ao público na Internet.                    | ALTA    | 
| RNF-02 |  A aplicação deverá ser adaptável, possibilitando a visualização otimizada em diversos dispositivos, tais como computadores, celulares, entre outros.                    | MÉDIA    | 
| RNF-03 |  A aplicação deve apresentar compatibilidade com diversos navegadores. O site deve ser meticulosamente ajustado para assegurar um desempenho consistente nos principais navegadores.                     | ALTA   | 
| RNF-04 |  A aplicação deve otimizar o desempenho do site a fim de assegurar tempos de carregamento rápidos.                     | ALTA   | 
| RNF-05 |  O site deve ser fácil de usar, com uma interface intuitiva que permita aos usuários encontrar rapidamente as informações e funcionalidades que procuram                    | ALTA    | 
| RNF-06 |  O site deve ser capaz de lidar com um aumento significativo no número de usuários e de conteúdo sem comprometer o desempenho ou a usabilidade                     | ALTA    | 

**Prioridade: Alta / Média / Baixa. 

