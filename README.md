# Ilojo Bar
❗ Insert image here
## About the project
### The problem
Ilojo Bar or Casa do Fernandez was an iconic national monument in Lagos, Nigeria, which was illegally demolished in 2016. Ilojo Bar was designed and built by Africans returning from slavery in Brazil in the 1800s. Legacy would like an English-language website that becomes a virtual monument of this special building and the many stories surrounding it.

> User stories
> 1. Read, listen and watch stories about Ilojo Bar
> As a resident of Lagos, Nigerian, member of the Nigerian diaspora or interested world citizen, I want to be able to read, listen and see stories about  Ilojo Bar online so that I can learn more about the significance of the building for the metropolis of Lagos and of the cosmopolitan history of it, leading > from Spain to Brazil to Nigeria.
>
> 2. Add stories about Ilojo Bar
> As an artist/visitor I want to be able to add a story about Ilojo Bar to the website, so that I can convey and complement the meaning of the building.
> 
> 3. Experience Ilojo Bar
> As a resident of Lagos, Nigerian, member of the diaspora or interested citizen of the world, I want to be able to get a virtual impression of the building so that I can see what it once was like. 


## Prototype
### Interaction
**Home**
❗
**View the paintings**
❗
**Read the stories**
❗
**Send a story**
❗


## Practical information
### Prismic
We use Prismic as a headless CMS. A headless CMS is a content management system (CMS), only used for back-end purposes, built from the ground up to make content accessible and maintainable. Prismic is supported for lots of frameworks as Next.js & Vue.js, but is also be used with an express server or even just vanilla javascript. In our case, we use it in combination with an express server.

We use Prismic to retrieve the stories and images from. The images are linked to the stories. This is the structure of all the stories:<br>
<img width="25%" alt="Schermafbeelding 2022-06-21 om 10 19 50" src="https://user-images.githubusercontent.com/70577898/174751992-731f9d86-0526-4200-bbe8-f9d908554437.png">

For more information how to use Prismic click [here](https://prismic.io/docs/technologies/express-overview_)

### Activity diagram
❗
### Used packages
- [EJS](https://www.npmjs.com/package/ejs)
- [express](https://www.npmjs.com/package/express)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [body-parser](https://www.npmjs.com/package/body-parser)
- [nodemailer](https://www.npmjs.com/package/nodemailer)
- [@prismicio/client](npmjs.com/package/@prismicio/client)
- [@prismicio/helpers](https://www.npmjs.com/package/@prismicio/helpers)
- [node-dev](https://www.npmjs.com/package/node-dev)

## How to install/use the code
Install and use this repo in a view simple steps:
1. Clone this repo with git clone ``https://github.com/Sophievanderburg/ilojo-bar.git``
2. Install all the used packages with ``npm install``
3. Start the server with ``npm run dev``
4. Open http://localhost:2020/ in your favourite browser
Good luck! 🍀



