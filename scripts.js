'use strict'

var x = window.matchMedia("(max-width: 1060px)")
var y = window.matchMedia("(max-width: 800px)")

const textArea = document.querySelector('.a-text')
const linhaUm = document.querySelector('.row-one')
const linhaDois = document.querySelector('.row-two')
const linhaTres = document.querySelector('.row-three')
const linhaQuatro = document.querySelector('.row-four')
const linhaCinco = document.querySelector('.row-five')
const linhaSeis = document.querySelector('.row-six')
const linhaSete = document.querySelector('.row-seven')
const linhaOito = document.querySelector('.row-eight')
const linhaNove = document.querySelector('.row-nine')
const linhaDez = document.querySelector('.row-ten')
const linhaOnze = document.querySelector('.row-eleven')
const linhaDoze = document.querySelector('.row-twelve')


//Ajustar icones/Adjust icons
var icons = document.querySelectorAll('.tec i')

function ajustarIcone() {
    if (y.matches) {
        icons.forEach(icon => {
            icon.classList.replace('fa-10x', 'fa-5x')
    })
    } if (x.matches) {
        icons.forEach(icon => {
            icon.classList.replace('fa-10x', 'fa-8x')
        })
    } else {
        return
    }
}

ajustarIcone()


//Header 
const home = document.getElementById('goHome')
const tecnologies = document.getElementById('goTec')
const about = document.getElementById('goAbout')
const projects = document.getElementById('goProject')
const contact = document.getElementById('goContact')

home.addEventListener ('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

tecnologies.addEventListener ('click', () => {
    document.querySelector('.tecnologies-section').scrollIntoView()
})

about.addEventListener ('click', () => {
    document.querySelector('.about-section').scrollIntoView()
})

projects.addEventListener ('click', () => {
    document.querySelector('.projects-section').scrollIntoView()
})

contact.addEventListener ('click', () => {
    document.querySelector('.contact-section').scrollIntoView()
})

//Ajustar texto/Adjust text
function ajustarTexto() {
    if (y.matches) {
            linhaUm.innerHTML = 'Olá! Me chamo Renan e sou um';
            linhaDois.innerHTML = 'desenvolvedor Front-End que';
            linhaTres.innerHTML = 'preza por um design simples,';
            linhaQuatro.innerHTML = 'intuitivo, funcional, e responsivo';
            linhaCinco.innerHTML = 'no desenvolvimento de páginas web.';
            linhaSeis.innerHTML = 'Tenho conhecimentos em Javascript,';
            linhaSete.innerHTML = 'CSS 3 e HTML 5 que vem sendo';
            linhaOito.innerHTML = ' estudados a mais de dois anos,';
            linhaNove.innerHTML = ' buscando sempre incrementar o que foi aprendido. Busco conseguir';
            linhaDez.innerHTML = 'um atendimento de excelência, entendendo necessidades e';
            linhaOnze.innerHTML = 'preferências do cliente para';
            linhaDoze.innerHTML = 'conseguir trabalhar da melhor';
        
        const newLine = document.createElement('span')
        newLine.classList.add('im-left', 'row-thirteen', 'hidden')
        const newText = document.createTextNode('forma possível.')
        newLine.appendChild(newText)
        textArea.appendChild(newLine)
    }
}

ajustarTexto()


//Animações scroll/Scroll animations
const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }
    })
})

const elementsLeft = document.querySelectorAll('.hidden')
const elementsRight = document.querySelectorAll('.hidden-r')

function animation() {
    elementsLeft.forEach((elementL) => myObserver.observe(elementL))
    elementsRight.forEach((elementR) => myObserver.observe(elementR))
}

animation()

//Projects Slider
const doMeio = document.getElementById('2')
const daEsquerda = document.getElementById('1')
const daDireita = document.getElementById('3')

const avancaProjeto = document.getElementById('projectPlus')
const voltaProjeto = document.getElementById('projectMinus')

const theBatman = document.getElementById('batProjecto')
const merchant = document.getElementById('merchantProjecto')
const advogh = document.getElementById('advoghProjecto')
const quiz = document.getElementById('quizProjecto')
const countdown = document.getElementById('countdownProjecto')
const multistep = document.getElementById('multistepProjecto')

const projectos = [
    theBatman, merchant, advogh, quiz, countdown, multistep
]

let projetoExibido = 2

const proceed = () => {
    if (projetoExibido === projectos.length) {
        projetoExibido = 1
    } else {
        projetoExibido ++
    }
}

const retreat = () => {
    if (projetoExibido === 1) {
        projetoExibido = projectos.length
    } else {
        projetoExibido --
    }
}

const handleProjetc = () => {
    const currentProject = projectos[projetoExibido - 1]

    doMeio.innerHTML = currentProject.innerHTML
    daEsquerda.innerHTML = projectos[(projetoExibido - 2 + projectos.length) % projectos.length].innerHTML
    daDireita.innerHTML = projectos[projetoExibido % projectos.length].innerHTML
}


handleProjetc()

avancaProjeto.addEventListener ('click', () => {
    proceed()
    handleProjetc()
    if (idiomaTxt.innerHTML === 'PT-BR') {
        translatePortuguese()
    } else if (idiomaTxt.innerHTML === 'ENG'){
        translateEnlgish()
    }
})

voltaProjeto.addEventListener ('click', () => {
    retreat()
    handleProjetc()
    if (idiomaTxt.innerHTML === 'PT-BR') {
        translatePortuguese()
    } else if (idiomaTxt.innerHTML === 'ENG'){
        translateEnlgish()
    }
})



//Traduzir texto/Translate text
const traduzir = document.querySelector('.translate')
const idiomas = document.querySelector('.language')
const idiomaTxt = document.querySelector('.language span')
const portuguese = document.getElementById('portuguese')
const english = document.getElementById('english')
const mainTitle = document.querySelector('.m-title')
const redline = document.querySelector('.redline span')
const homeText = document.querySelector('.m-text span')
const tecTitleOne = document.querySelector('#tecTitleOne')
const tecTitleTwo = document.querySelector('#skills')
const intuitive = document.getElementById('intuitive')
const dynamics = document.getElementById('dynamics')
const responsives = document.getElementById('responsives')
const links = document.querySelectorAll('.p-link a')

const translateEnlgish = () => {

        document.querySelector('#goHome').innerHTML = "Home"
        document.querySelector('#goTec').innerHTML = "My skills"
        document.querySelector('#goAbout').innerHTML = "About me"
        document.querySelector('#goProject').innerHTML = "Projects"
        document.querySelector('#goContact').innerHTML = "Contact"

        english.style.color = '#431ea7'
        portuguese.style.color = '#FFF'

        mainTitle.innerHTML = `
        <span class="heavy">Transforming</span>
        <span class="heavy htwo">your ideas</span>
        `

        redline.innerHTML = `In <mark>unique</mark> projects`

        homeText.innerHTML = `
        Creativity and innovation go hand in hand. With a unique combination of impactful design, 
        intuitive functionality, and optimization for results, I'm ready to create the online presence of 
        your dreams.
        `
        tecTitleOne.innerHTML = "My skills"

        tecTitleTwo.innerHTML = "My Specialities"

        intuitive.innerHTML = 'Intuitive interface'

        dynamics.innerHTML = 'Dynamic Websites'

        responsives.innerHTML = 'Responsive Websites'

        document.querySelector('.a-title span').innerHTML = "About me"

        linhaUm.innerHTML = `Hello! My name is Renan and i'm a`;
        linhaDois.innerHTML = 'Front-End developer who values for a';
        linhaTres.innerHTML = 'simple, intuitive, responsive and';
        linhaQuatro.innerHTML = 'functional design in the development of ';
        linhaCinco.innerHTML = 'Web pages. I have knowledge in Javascript,';
        linhaSeis.innerHTML = 'CSS3 and HTML 5, witch has been studied';
        linhaSete.innerHTML = 'for more than two years, always seeking';
        linhaOito.innerHTML = 'to improve what was learned.';
        linhaNove.innerHTML = `I'm looking to give an excellence work.`;
        linhaDez.innerHTML = 'understanding needs and preferences of';
        linhaOnze.innerHTML = 'the customer, to deliver my services';
        linhaDoze.innerHTML = 'in the best way possible.';

        document.querySelector('.p-title span').innerHTML = "Projects developed"

        document.querySelector('#mercDesc').innerHTML = "E-commerce project aimed at selling electronics developed in React."

        document.querySelector('#advDesc').innerHTML = "Landing Page project for a law firm."

        document.querySelector('#batDesc').innerHTML = "Website project for ticket sales."

        document.querySelector('#quizDesc').innerHTML = "A quiz about programming developed in React."

        document.querySelector('#multiDesc').innerHTML = "A form divided by steps developed in React."

        document.querySelector('#countDesc').innerHTML = "A customizable countdown developed in React."

        links.forEach(link => {
            link.innerHTML = `Go to project`
        })

        document.querySelector('.c-title span').innerHTML = "Contact me"

        document.querySelector('.f-right span').innerHTML = "Developed by: Renan Nascimento"

        if (y.matches) {
            linhaUm.innerHTML = `Hello! My name is Renan and i'm`;
            linhaDois.innerHTML = 'a Front-End developer who values';
            linhaTres.innerHTML = 'for a intuitive, responsive';
            linhaQuatro.innerHTML = 'and functional design in the';
            linhaCinco.innerHTML = 'development of Web pages. I have';
            linhaSeis.innerHTML = 'knowledge in Javascript, CSS3 and';
            linhaSete.innerHTML = 'HTML5, witch has been studied for';
            linhaOito.innerHTML = 'more than two years, always';
            linhaNove.innerHTML = `seeking to improve what was`;
            linhaDez.innerHTML = ` learned. I'm looking to give an `;
            linhaOnze.innerHTML = 'excellence work. Understanding';
            linhaDoze.innerHTML = 'needs and preferences of the';
        
            document.querySelector('.row-thirteen').innerHTML = "customer, to deliver my services in the best way possible."
    }
    animation()
}

const translatePortuguese = () => {
        document.querySelector('#goHome').innerHTML = "Início"
        document.querySelector('#goTec').innerHTML = "Tecnologias"
        document.querySelector('#goAbout').innerHTML = "Sobre mim"
        document.querySelector('#goProject').innerHTML = "Projetos"
        document.querySelector('#goContact').innerHTML = "Contato"

        english.style.color = '#FFF'
        portuguese.style.color = '#431ea7'

        mainTitle.innerHTML = `
        <span class="heavy">Transformando</span>
        <span class="heavy htwo">suas ideias</span>
        `

        redline.innerHTML = `Em projetos <mark>únicos.</mark>`

        homeText.innerHTML = `
        Criatividade e inovação andam lado a lado. Com uma combinação única de design impactante, 
        funcionalidade intuitiva e otimização para resultados, estou pronto para criar a presença online 
        de seus sonhos.
        `
        tecTitleOne.innerHTML = "Tecnologias"

        tecTitleTwo.innerHTML = "Especialidades"

        intuitive.innerHTML = 'Interface intuitiva'

        dynamics.innerHTML = 'Sites dinâmicos'

        responsives.innerHTML = 'Sites responsivos'

        document.querySelector('.a-title span').innerHTML = "Sobre mim"

        linhaUm.innerHTML = `Olá! Me chamo Renan e sou um desenvolvedor`;
        linhaDois.innerHTML = 'Front-End que preza por um design simples,';
        linhaTres.innerHTML = 'intuitivo, funcional e responsivo';
        linhaQuatro.innerHTML = 'no desenvolvimento de páginas web.';
        linhaCinco.innerHTML = 'Tenho conhecimentos em Javascript, CSS 3 e';
        linhaSeis.innerHTML = 'HTML 5 , que vem sendo estudados';
        linhaSete.innerHTML = 'a mais de dois anos, buscando sempre';
        linhaOito.innerHTML = 'incrementar o que foi aprendido.';
        linhaNove.innerHTML = `Busco conseguir um atendimento de`;
        linhaDez.innerHTML = 'excelência, entendendo necessidades e';
        linhaOnze.innerHTML = 'preferências do cliente para conseguir';
        linhaDoze.innerHTML = 'trabalhar da melhor forma possível.';

        document.querySelector('.p-title span').innerHTML = "Projetos desenvolvidos"

        document.querySelector('#mercDesc').innerHTML = "Projeto de E-commerce destinado a venda de eletrônicos desenvolvido com React."

        document.querySelector('#advDesc').innerHTML = "Projeto de Landing Page Para escritório de advocacia."

        document.querySelector('#batDesc').innerHTML = "Projeto de site destinado á venda de ingressos."

        document.querySelector('#quizDesc').innerHTML = "Quiz sobre programação desenvolvido em React."

        document.querySelector('#multiDesc').innerHTML = "Projeto em React de um formulário dividido por etapas."

        document.querySelector('#countDesc').innerHTML = "Projeto em React de contagem regressiva personalizável."

        links.forEach(link => {
            link.innerHTML = `Ver projeto`
        })

        document.querySelector('.c-title span').innerHTML = "Entre em contato"

        document.querySelector('.f-right span').innerHTML = "Desenvolvido por: Renan Nascimento"

        if (y.matches) {
            linhaUm.innerHTML = 'Olá! Me chamo Renan e sou um';
            linhaDois.innerHTML = 'desenvolvedor Front-End que';
            linhaTres.innerHTML = 'preza por um design simples,';
            linhaQuatro.innerHTML = 'intuitivo, funcional, e responsivo';
            linhaCinco.innerHTML = 'no desenvolvimento de páginas web.';
            linhaSeis.innerHTML = 'Tenho conhecimentos em Javascript,';
            linhaSete.innerHTML = 'CSS 3 e HTML 5 que vem sendo';
            linhaOito.innerHTML = ' estudados a mais de dois anos,';
            linhaNove.innerHTML = ' buscando sempre incrementar o que foi aprendido. Busco conseguir';
            linhaDez.innerHTML = 'um atendimento de excelência, entendendo necessidades e';
            linhaOnze.innerHTML = 'preferências do cliente para';
            linhaDoze.innerHTML = 'conseguir trabalhar da melhor';
        
            document.querySelector('.row-thirteen').innerHTML = "forma possível."
    }

        animation()
}


traduzir.addEventListener('click', () => {
    idiomas.classList.toggle('direita')
    if (idiomaTxt.innerHTML === 'PT-BR') {
        translateEnlgish()
        idiomaTxt.innerHTML = 'ENG'
    } else {
        translatePortuguese()
        idiomaTxt.innerHTML = 'PT-BR'
    }
    
})
