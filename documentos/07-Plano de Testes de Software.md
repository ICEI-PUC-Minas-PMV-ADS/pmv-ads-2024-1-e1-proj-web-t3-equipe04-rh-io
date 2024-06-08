# Plano de Testes de Software

Os requisitos para realização dos testes de software são:
<ul><li>Site publicado na internet;</li>
<li>Navegador da internet: Chrome, Firefox ou Edge.</li>
</ul>

Os testes funcionais a serem realizados na aplicação são descritos a seguir.


<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-01: Verificar o funcionamento da tela de login</td>
  <td>
   <ul>
    <li>RF-002: O site deve permitir ao usuário fazer o login da sua conta.</li>
   </ul>
  </td>
  <td>Verificar se o sistema de login está permitindo que o usuário conecte em sua conta corretamente</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site: <a href="https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2024-1-e1-proj-web-t3-equipe04-rh-io/codigo-fonte/login.html">link</a></li>
    <li>Visualizar a página de login.</li>
    <li>Digitar o login e senha (exemplo = login: admin senha:123).</li>
    <li>Clicar em entrar.</li>
   </ol>
   </td>
  <td>O usuário deve ser encaminhado para a página home </td>
  <td>Rayssa</td>
 </tr>
</table>

<hr/>
<br>
<br>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-02:Verificar o funcionamento da tela de cadastro.</td>
  <td>
   <ul>
    <li>RF-001: O site deve permitir ao usuário cadastrar uma conta.</li>
   </ul>
  </td>
  <td>Verificar se o sistema de registro de constas está permitindo que o usuário cadastre uma nova conta.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site: <a href="https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2024-1-e1-proj-web-t3-equipe04-rh-io/codigo-fonte/login.html">link</a></li>
    <li>Visualizar a página de login.</li>
    <li>Clicar na seta para alterar a tela e realizar o cadastro de novas contas</li>
    <li>Preencher todos os campos solicitados.</li>
    <li>Clicar em registrar.</li>
   </ol>
   </td>
  <td>O usuário deve ser encaminhado para a página home </td>
  <td>Rayssa</td>
 </tr>
</table>

<hr/>
<br>
<br>



<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-03: Verificar o funcionamento da tela de cadastro de vagas</td>
  <td>
   <ul>
    <li>RF-11: Tela de cadastro de vagas </li>
   </ul>
  </td>
  <td>Verificar se o sistema de cadastro de vagas está permitindo que o usuário cadastre uma nova vaga.</td>
    <td>
        <ol>
            <li>Acessar o navegador.</li>
            <li>Informar o Endereço do site;  <a href="https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2024-1-e1-proj-web-t3-equipe04-rh-io/codigo-fonte/login.html">link</a></li>
            <li>Visualizar a tela de inicial;</li>
            <li>Acessar o menu no canto superior esquedo da tela;</li>
            <li>Clicar em "Solicitações de funcionários";</li>
            <li>Visualizar a página de cadastro de vagas.</li>
            <li>Preencher os campos </li>
            <li>Clicar em Enviar.</li>
        </ol>
    </td>
  <td>Deve mostrar uma menssagem: "Candidato inserido com sucesso"</td>
  <td>Hudson</td>
 </tr>
</table>


<hr/>
<br>
<br>


<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-04: Verificar o funcionamento da tela de visualização de vagas a ser preenchida</td>
  <td>
   <ul>
    <li>RF-xx:</li>
   </ul>
  </td>
  <td>Verificar se o sistema de visualização de vagas está mostrando as vagas cadastrada.</td>
    <td>
        <ol>
            <li>Acessar o navegador.</li>
            <li>Informar o Endereço do site;  <a href="https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2024-1-e1-proj-web-t3-equipe04-rh-io/codigo-fonte/login.html">link</a></li>
            <li>Visualizar a tela de inicial;</li>
            <li>Acessar o menu no canto superior esquedo da tela;</li>
            <li>Clicar em "Nova solicitação";</li>
            <li>Visualizar a página de Nova solicitação.</li>
            <li>Verificar se esta mostrando as vagas cadastrada</li>
        </ol>
    </td>
  <td>Deve mostrar uma menssagem: "Candidato inserido com sucesso"</td>
  <td>Hudson</td>
 </tr>
</table>

<hr/>
<br>
<br>


<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-05: Verificar funcionamento da funcionalidade de edição do perfil do candidato.</td>
  <td>
   <ul>
    <li>RF - 07:A aplicação deve possibilitar a verificação de datos do candidato;</li>
    <li>RF - 08:A aplicação deve possibilitar o usuário adicionar informação ao perfil do candidato;</li>
   </ul>
  </td>
  <td>Editar o perfil do candidato, Vizualizar informações, Criar marcações individuais.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o Endereço do site;  <a href="https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2024-1-e1-proj-web-t3-equipe04-rh-io/codigo-fonte/login.html">link</a></li>
    <li>Visualizar a tela de inicial;</li>
    <li>Acessar o menu no canto superior esquedo da tela;</li>
    <li>Clicar em "Banco de Dados";</li>
    <li>Clicar em 'editar' ao lado no nome do funcionário.</li>
   </ol>
   </td>
  <td>Deve ser possível editar, excluir e salvar as informações do canditado, criar marcadores individuais e adicionar informações ao perfil do candidato já cadastrado.</td>
  <td>Davi de Assis Vilela</td>
 </tr>
</table>

<hr/>
<br>
<br>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-06: Verificar funcionamento da funcionalidade de banco de dados.</td>
  <td>
   <ul>
    <li>RF - 03: A aplicação deve possibilitar um mecanismo de pesquisa;</li>
    <li>RF - 04:A aplicação deve possibilitar marcações de candidato;</li>
   </ul>
  </td>
  <td>Visualizar os dados de todos os candidatos.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o Endereço do site;  <a href="https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2024-1-e1-proj-web-t3-equipe04-rh-io/codigo-fonte/login.html">link</a></li>
    <li>Visualizar a tela de inicial;</li>
    <li>Acessar o menu no canto superior esquedo da tela;</li>
    <li>Clicar em "Banco de Dados";</li>
   </ol>
   </td>
  <td>Deve ser possível visualizar os dados dos candidatos e pesquisar por candidatos específicos.</td>
  <td>Davi de Assis Vilela</td>
 </tr>
</table>

<hr/>
<br>
<br>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-07: Verificar o funcionamento da tela de cadastro de novos candidatos.</td>
  <td>
   <ul>
    <li>RF-006: A aplicação deve possibilitar ao usuário efetuar o registro de colaboradores.</li>
   </ul>
  </td>
  <td>Cadastro de candidatos, salvar informações de candidatos e envia-las ao banco de dados.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o Endereço do site;  <a href="https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2024-1-e1-proj-web-t3-equipe04-rh-io/codigo-fonte/login.html">link</a></li>
    <li>Visualizar a tela de inicial;</li>
    <li>Clicar no menu no canto superior esquerdo;</li>
    <li>Acessar "Cadastro de candidatos".</li>
   </ol>
   </td>
  <td>O usuário deve conseguir criar um perfil e inserir as informações dos candidatos.</td>
  <td>Fernando Cardoso</td>
 </tr>
</table>