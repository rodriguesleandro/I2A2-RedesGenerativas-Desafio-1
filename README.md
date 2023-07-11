# I2A2-RedesGenerativas-Desafio-1

Criar um site com as seguintes páginas:
• Página 1: Login

Tela com campos para nome e senha, o botão “entar” e link “esqueci minha senha”.

Os campos devem obrigatoriamente estar preenchidos ao se clicar o botão entrar.

O botão entrar, redireciona para a página de produtos.

• Página 2: Lista de Produtos

Apresentar página com uma lista de 10 produtos (a sua escolha). A lista deve conter – id do produto, nome do
produto, preço unitário, foto do produto.

Página 3: Esqueci minha senha:

Apresentar página com campo para a pessoa informar o e-mail cadastrado e botão “redefinir a senha”. Ao se
clicar o botão “redefinir senha”, validar se o campo e-mail está preenchido. Apresentar um pop-up dizendo que
o link para redefinição foi enviado para o endereço informado e redirecionar para a página de login.

• As páginas devem ser integralmente criadas utilizado o ChatGPT ou outra LLM.

• As páginas devem conter o logo de uma empresa hipotética. O logo deve ser criado por uma rede
generativa de imagens (MidJourney, Dall-E, etc.)

• A linguagem de script deve ser Java Script.

• Enviar as páginas e demais elementos em um arquivo compactado no e-mail. Também enviar o link
se efetuar o teste da página.

• Não esqueça de incluir seu nome e e-mail.

## Prompts Utilizados:

Prompt 1

Hi, we will create a web site using html, javascript and css.
The site is a e-comerce of Curling equipaments, so needs to have a snow theme.
The image logo, call logo.jpg showd appear centered with the name "Curling's Future" above.
The first page will be products.html, it presents a list of products in square cards inline. Each card must have id, Name and a photo
Please use the json file bellow as product list for the cards
{
"Products": [
{
  "id": 1,
  "Name": "Men's BalancePlus 704 Series Curling Shoes",
  "imageURL": "product1.webp"
},
{
  "id": 2,
  "Name": "Women's Goldline Velocity Curling Shoes",
  "imageURL": "product2.webp"
},
{
  "id": 3,
  "Name": "Goldline Impact Curling Broom",
  "imageURL": "product3.webp"
},
{
  "id": 4,
  "Name": "Goldline Curling Rock Tree Ornament",
  "imageURL": "product4.webp"
},
{
  "id": 5,
  "Name": "Asham Pad Cleaning Brush",
  "imageURL": "product5.webp"
},
{
  "id": 6,
  "Name": "Curling Rock Cake Mold",
  "imageURL": "product6.jpeg"
},
{
  "id": 7,
  "Name": "New Blue Trefor Granite Curling Stones with Single Blue Hone Inserts",
  "imageURL": "product7.jpeg"
},
{
  "id": 8,
  "Name": "NEW Direct Drive BOSS Battery Powered Ice Scraper with International Charger",
  "imageURL": "product8.png"
},
{
  "id": 9,
  "Name": "LRM Standard Laser Curling Stone Measure",
  "imageURL": "product9."
},
{
  "id": 10,
  "Name": "Competition Dial Measure",
  "imageURL": "product10."
}
]}

OBS.: 
Os nomes dos produtos e imagens foram buscadas na web

Ele não gerou o json inteiro, apenas o primeiro item da lista e pediu para que eu complementasse depois.

Prompt 2

Now we need the page 'passwordForgot.html' that needs to have a snow theme and
The image logo, call logo.jpg showd appear centered with the name "Curling's Future" above.
At the centered textbox named email and a button with label "redefinir senha". The javascript click event needs to validate if the textbox email is fill,
if is fiiled present a pop up saying that "O link de definição foi eviado para o endereço informado" and redirect to login.html otherwise shows an alert telling "e-mal precisa ser preenchido"
please use passwordForgot.css and passwordForgot.js respectively

Prompt 3 

Finally we will create login.html page with two text box named 'Nome' and 'Senha' and a botton with label 'Entrar'.
The javascript click event needs to validate if the both textbox are filled
if both text boxes are fiiled redirect to products.html otherwise shows an alert telling "Nome e senha precisam ser preenchidos" 
needs to have a snow theme and
The image logo, call logo.jpg showd appear centered with the name "Curling's Future" above.
please use login.css and login.js respectively

Prompt 4

I forgot to ask to include in login.html a link to passwordForgot.html bellow the button

Prompt 5

he label of the link needs to be 'Esqueci minha senha'


