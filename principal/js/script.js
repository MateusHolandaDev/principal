$('#noite').click(function () {
    $('#noite').css('visibility', 'hidden');
    $('#dia').css('visibility', 'visible');
    $('body').css('backgroundColor', '#333333')
    $('.bio').css('color', 'rgb(248, 234, 234)')
    $('.nav-a').css('color', 'rgb(252 134 14')
    $('.containerlingua').css('backgroundColor', 'rgb(252 134 14)')
    $('#footerprincipal').css({
        'backgroundColor': 'white',
        'color': '#333333'
    })
    $('footer a').css('color', '#333333')
    $('#copy').css({'backgroundColor': 'white', 'color': '#333333'})
    $(function () {
        $(".nav-a").hover(
            function () { $(this).css("color", "white") },
            function () { $(this).css("color", "rgb(252 134 14)") }
        );
    });

    $(function () {
        $("#brasil2").hover(
            function () { $(this).css("boxShadow", "0px 0px 10px 2px black") },
            function () { $(this).css("boxShadow", "0px 0px 0px 0px") }
        );
    });

    $(function () {
        $("#estadosunidos2").hover(
            function () { $(this).css("boxShadow", "0px 0px 10px 2px black") },
            function () { $(this).css("boxShadow", "0px 0px 0px 0px") }
        );
    });

    $(function () {
        $("#espanha2").hover(
            function () { $(this).css("boxShadow", "0px 0px 10px 2px black") },
            function () { $(this).css("boxShadow", "0px 0px 0px 0px") }
        );
    });

    $(function () {
        $("#franca2").hover(
            function () { $(this).css("boxShadow", "0px 0px 10px 2px black") },
            function () { $(this).css("boxShadow", "0px 0px 0px 0px") }
        );
    });
})

$('#dia').click(function () {
    $('#dia').css('visibility', 'hidden');
    $('#noite').css('visibility', 'visible');
    $('body').css('backgroundColor', 'white')
    $('.nav-a').css('color', '#333333')
    $('.textowhite, .bio').css('color', '#333333')
    $('.containerlingua').css('backgroundColor', '#333333')
    $('#footerprincipal').css({
        'backgroundColor': '#333333',
        'color': 'rgb(248, 234, 234)'
    })
    $('#copy').css({
        'backgroundColor': '#333333',
        'color': 'rgb(248, 234, 234)'
    })
    $('#calculadora-footer, #formulario-footer, #cadastro-footer').css('color','rgb(248, 234, 234')
    $(function () {
        $(".nav-a").hover(
            function () { $(this).css("color", "rgb(252 134 14)") },
            function () { $(this).css("color", "#333333") }
        );
    });

    $(function () {
        $("#brasil2").hover(
            function () { $(this).css("boxShadow", "0px 0px 10px 2px rgb(252, 134, 14)") },
            function () { $(this).css("boxShadow", "0px 0px 0px 0px") }
        );
    });

    $(function () {
        $("#estadosunidos2").hover(
            function () { $(this).css("boxShadow", "0px 0px 10px 2px rgb(252, 134, 14)") },
            function () { $(this).css("boxShadow", "0px 0px 0px 0px") }
        );
    });

    $(function () {
        $("#espanha2").hover(
            function () { $(this).css("boxShadow", "0px 0px 10px 2px rgb(252, 134, 14)") },
            function () { $(this).css("boxShadow", "0px 0px 0px 0px") }
        );
    });

    $(function () {
        $("#franca2").hover(
            function () { $(this).css("boxShadow", "0px 0px 10px 2px rgb(252, 134, 14)") },
            function () { $(this).css("boxShadow", "0px 0px 0px 0px") }
        );
    });
})

$('.containerlingua').hide()

let brasil = document.getElementById('brasil')
let estadosunidos = document.getElementById('estadosunidos')
let espanha = document.getElementById('espanha')
let franca = document.getElementById('franca')

let brasil2 = document.getElementById('brasil2')
let estadosunidos2 = document.getElementById('estadosunidos2')
let espanha2 = document.getElementById('espanha2')
let franca2 = document.getElementById('franca2')



brasil.addEventListener('click', brasilanime)


function brasilanime() {
    $('.containerlingua').fadeIn('2000')
}

brasil2.addEventListener('click', brasilanime2)


function brasilanime2() {
    $('#estadosunidos').css('visibility', 'hidden')
    $('#franca').css('visibility', 'hidden')
    $('#espanha').css('visibility', 'hidden')
    $('#brasil').css('visibility', 'visible')

    $('#calculadora').text("CALCULADORA")
    $('#formulario').text("FORMULÁRIO")
    $('#cadastro').text("CADASTRO")

    $('#quemsomos').text("Somos uma agência de soluções digitais. Com uma equipe eficiente, formada por jovens desenvolvedores, criamos e solucionamos quesitos para melhor atender a sua empresa. Buscando pelo cumprimento de prazos e resultados satisfatórios.")

    $('#conheca-nossa-equipe').text("Conheça a nossa equipe")

    $('#brunatexto').text("Bruna é estudante de Desenvolvimento Full Stack na SoulCode Academy, ama trabalhar em equipe e é bastante comunicativa. Graduada em Fisioterapia, experiência de intercâmbio estudantil na Itália, possui MBA em Gestão Estratégica da Saúde e experiência com liderança. Apaixonada por tecnologia e acredita que a mulher tem grande potencial para explorar essa área tão desafiadora. Em conjunto com Mateus Holanda ficaram responsáveis pela ferramenta de cadastrar produtos.")

    $('#mateustexto').text("Mateus Alves de Holanda é um entusiasta no mundo da Tecnologia, gosta muito de aprender e acredita que a consistência no aprendizado é um princípio para evoluir no conhecimento, gosta de ler bastante sobre Cyber Security e Programação. Aprendendo sempre além. Atualmente é um estudante na SoulCode Academy cursando o bootcamp Web Full Stack Developer com mais de 700 horas de carga horária. Junto com sua colega de equipe Bruna Hirano, foram responsáveis pela ferramenta de cadastrar produtos.")
    

    $('#gabrielatexto').text("Recém formada no ensino médio, Gabriela hoje é estudante do Bootcamp de desenvolvimento full stack na SoulCode Academy. Apaixonada por tecnologia, busca sua primeira oportunidade no mercado de trabalho. Sua participação para o projeto Creative Idea foi a criação do formulário de cadastro. Totalmente responsivo, utilizando HTML, CSS e aplicando as validações aprendidas em aula com o JAVASCRIPT.")

    $('#eduardotexto').text("Eduardo é estudante de Desenvolvimento Full Stack na SoulCode Academy. É fascinado em adquirir novos conhecimentos. O desejo pelo desenvolvimento web surgiu no começo de 2021 e desde então tornou-se uma paixão imensurável pela área. Na participação do projeto criado para a empresa Criative Idea, ficou responsável pela criação de uma calculadora simples e científica usando HTML, CSS, JavaScript e JQuery.")

    $('#emiliatexto').text("Emilia é estudante de Desenvolvimento Full Stack na SoulCode Academy. Formada em Cinema Digital, de personalidade mediadora e comunicativa, gosta de trabalhar em grupo e conhecer novos pensamentos. Decidiu estudar tecnologia, embarcando no curso intensivo da SoulCode. Dentro deste projeto, desenvolveu o front-end. Sendo responsável pelo layout, escrita e responsividade desta landing page, adicionando o uso de atributos de inclusão de pessoas com deficiência auditiva e visual, uma grande oportunidade de por em prática do que foi aprendido, e o que envolve a produção de um projeto.")

    $('#ferramentas').text("Ferramentas")
    $('#calculadora-footer').text("Calculadora")
    $('#formulario-footer').text("Formulario")
    $('#cadastro-footer').text("Cadastro")
    $('#central-de-atendimento').text("Central de atendimento")

    $('.containerlingua').fadeOut('2000')
}

franca.addEventListener('click', francaanime)
function francaanime() {
    $('.containerlingua').fadeIn('2000')
}

franca2.addEventListener('click', francaanime2)

function francaanime2() {
    $('#estadosunidos').css('visibility', 'hidden')
    $('#espanha').css('visibility', 'hidden')
    $('#brasil').css('visibility', 'hidden')
    $('#franca').css('visibility', 'visible')

    $('#calculadora').text("CALCULATRICE")
    $('#formulario').text("FORMER")
    $('#cadastro').text("ENREGISTREMENT")

    $('#quemsomos').text("Nous sommes une agence de solutions numériques. Avec une équipe efficace, formée de jeunes développeurs, nous créons et résolvons des questions pour mieux servir votre entreprise. Chercher à respecter les délais et des résultats satisfaisants.")

    $('#conheca-nossa-equipe').text("Rencontrez notre équipe")

    $('#brunatexto').text("Bruna est étudiante en développement Full Stack à la SoulCode Academy, aime le travail d'équipe et est très communicative. Diplômée en physiothérapie, avec une expérience d'échange d'étudiants en Italie, elle possède un MBA en gestion stratégique de la santé et une expérience en leadership. Passionnée par la technologie et convaincue que les femmes ont un grand potentiel pour explorer ce domaine très difficile. Avec Mateus Holanda, ils étaient responsables de l'outil d'enregistrement des produits.")

    $('#mateustexto').text("Mateus Alves de Holanda est un passionné du monde de la technologie, il aime beaucoup apprendre et croit que la cohérence dans l'apprentissage est un principe pour évoluer dans les connaissances, il aime beaucoup lire sur la cybersécurité et la programmation. Toujours apprendre au-delà. Il est actuellement étudiant à la SoulCode Academy et participe au bootcamp Web Full Stack Developer avec plus de 700 heures de charge de travail. Avec sa coéquipière Bruna Hirano, ils étaient responsables de l'outil d'enregistrement des produits.")
    

    $('#gabrielatexto').text("Récemment diplômée du lycée, Gabriela est maintenant étudiante au Bootcamp de développement full stack de la SoulCode Academy. Passionnée de technologie, elle est à la recherche de sa première opportunité sur le marché du travail. Sa participation au projet Creative Idea a été la création du formulaire d'inscription. Entièrement responsive, utilisant HTML, CSS et appliquant les validations apprises en classe avec JAVASCRIPT.")

    $('#eduardotexto').text("Eduardo est un étudiant en développement Full Stack à la SoulCode Academy. Il est fasciné par l'acquisition de nouvelles connaissances. Le désir de développement Web a émergé au début de 2021 et est depuis devenu une passion incommensurable pour le domaine. Participant au projet créé pour la société Criative Idea, il était chargé de créer une calculatrice simple et scientifique utilisant HTML, CSS, JavaScript et JQuery.")

    $('#emiliatexto').text("Emilia est étudiante en développement Full Stack à la SoulCode Academy. Diplômée en cinéma numérique, dotée d'une personnalité médiatrice et communicative, elle aime travailler en groupe et découvrir de nouvelles pensées. Il a décidé d'étudier la technologie, en se lançant dans le cours intensif de SoulCode. Au sein de ce projet, développé le front-end. Être responsable de la mise en page, de la rédaction et de la réactivité de cette page de destination, en ajoutant l'utilisation d'attributs d'inclusion pour les personnes malentendantes et visuelles, une excellente occasion de mettre en pratique ce qui a été appris et ce qui implique la production d'un projet.")

    $('#ferramentas').text("Outils")
    $('#calculadora-footer').text("CALCULATRICE")
    $('#formulario-footer').text("FORMER")
    $('#cadastro-footer').text("ENREGISTREMENT")
    $('#central-de-atendimento').text("Centre d'appel")

    $('.containerlingua').fadeOut('2000')
}

estadosunidos.addEventListener('click', estadosunidosanime)
function estadosunidosanime() {
    $('.containerlingua').fadeIn('2000')
}

estadosunidos2.addEventListener('click', estadosunidosanime2)

function estadosunidosanime2() {
    $('#espanha').css('visibility', 'hidden')
    $('#brasil').css('visibility', 'hidden')
    $('#franca').css('visibility', 'hidden')
    $('#estadosunidos').css('visibility', 'visible')

    $('#calculadora').text("CALCULATOR")
    $('#formulario').text("FORM")
    $('#cadastro').text("REGISTRATION")

    $('#quemsomos').text("We are a digital solutions agency. With an efficient team, formed by young developers, we create and solve questions to better serve your company. Seeking to meet deadlines and satisfactory results.")

    $('#conheca-nossa-equipe').text("Meet our team")

    $('#brunatexto').text("Bruna is a Full Stack Development student at SoulCode Academy, loves teamwork and is very communicative. Graduated in Physiotherapy, with student exchange experience in Italy, she has an MBA in Strategic Health Management and experience in leadership. Passionate about technology and believes that women have great potential to explore this very challenging area. Together with Mateus Holanda, they were responsible for the product registration tool.")

    $('#mateustexto').text("Mateus Alves de Holanda is an enthusiast in the world of Technology, he likes to learn a lot and believes that consistency in learning is a principle to evolve in knowledge, he likes to read a lot about Cyber ​​Security and Programming. Always learning beyond. He is currently a student at SoulCode Academy attending the Web Full Stack Developer bootcamp with over 700 hours of workload. Together with her teammate Bruna Hirano, they were responsible for the product registration tool.")
    

    $('#gabrielatexto').text("Recently graduated from high school, Gabriela is now a student at the full stack development Bootcamp at SoulCode Academy. Passionate about technology, she is looking for her first opportunity in the job market. His participation in the Creative Idea project was the creation of the registration form. Fully responsive, using HTML, CSS and applying the validations learned in class with JAVASCRIPT.")

    $('#eduardotexto').text("Eduardo is a Full Stack Development student at SoulCode Academy. He is fascinated with acquiring new knowledge. The desire for web development emerged in early 2021 and has since become an immeasurable passion for the field. Participating in the project created for the company Criative Idea, he was responsible for creating a simple and scientific calculator using HTML, CSS, JavaScript and JQuery.")

    $('#emiliatexto').text("Emilia is a Full Stack Development student at SoulCode Academy. Graduated in Digital Cinema, with a mediating and communicative personality, she enjoys working in groups and getting to know new thoughts. He decided to study technology, embarking on the intensive SoulCode course. Within this project, developed the front-end. Being responsible for the layout, writing and responsiveness of this landing page, adding the use of inclusion attributes for people with hearing and visual impairments, a great opportunity to put into practice what was learned, and what involves the production of a project.")

    $('#ferramentas').text("Tools")
    $('#calculadora-footer').text("Calculator")
    $('#formulario-footer').text("Form")
    $('#cadastro-footer').text("Registration")
    $('#central-de-atendimento').text("Call Center")

    $('.containerlingua').fadeOut('2000')
}

espanha.addEventListener('click', espanhaanime)
function espanhaanime() {
    $('.containerlingua').fadeIn('2000')
}

espanha2.addEventListener('click', espanhaanime2)

function espanhaanime2() {
    $('#estadosunidos').css('visibility', 'hidden')
    $('#brasil').css('visibility', 'hidden')
    $('#franca').css('visibility', 'hidden')
    $('#espanha').css('visibility', 'visible')

    $('#calculadora').text("CALCULADORA")
    $('#formulario').text("FORMULÁRIO")
    $('#cadastro').text("REGISTRO")

    $('#quemsomos').text("Somos una agencia de soluciones digitales. Con un equipo eficiente, formado por jóvenes desarrolladores, creamos y resolvemos preguntas para servir mejor a su empresa. Buscando cumplir plazos y resultados satisfactorios.")

    $('#conheca-nossa-equipe').text("Conozca a nuestro equipo")

    $('#brunatexto').text("Bruna es una estudiante de Full Stack Development en SoulCode Academy, ama el trabajo en equipo y es muy comunicativa. Licenciada en Fisioterapia, con experiencia de intercambio de estudiantes en Italia, tiene un MBA en Gestión Estratégica de la Salud y experiencia en liderazgo. Apasionada de la tecnología y cree que las mujeres tienen un gran potencial para explorar esta área tan desafiante. Junto con Mateus Holanda, fueron los responsables de la herramienta de registro de productos.")

    $('#mateustexto').text("Mateus Alves de Holanda es un entusiasta del mundo de la Tecnología, le gusta mucho aprender y cree que la consistencia en el aprendizaje es un principio para evolucionar en el conocimiento, le gusta leer mucho sobre Ciberseguridad y Programación. Siempre aprendiendo más allá. Actualmente es un estudiante en SoulCode Academy que asiste al bootcamp Web Full Stack Developer con más de 700 horas de carga de trabajo. Junto con su compañera de equipo Bruna Hirano, fueron responsables de la herramienta de registro de productos.")
    

    $('#gabrielatexto').text("Recién graduada de la escuela secundaria, Gabriela ahora es estudiante en el Bootcamp de desarrollo de pila completa en SoulCode Academy. Apasionada de la tecnología, busca su primera oportunidad en el mercado laboral. Su participación en el proyecto Idea Creativa fue la creación del formulario de registro. Totalmente responsive, usando HTML, CSS y aplicando las validaciones aprendidas en clase con JAVASCRIPT.")

    $('#eduardotexto').text("Eduardo es un estudiante de Full Stack Development en SoulCode Academy. Le fascina adquirir nuevos conocimientos. El deseo por el desarrollo web surgió a principios de 2021 y desde entonces se ha convertido en una pasión inconmensurable por el campo. Participando en el proyecto creado para la empresa Criative Idea, fue el responsable de crear una calculadora simple y científica utilizando HTML, CSS, JavaScript y JQuery.")

    $('#emiliatexto').text("Emilia es estudiante de Full Stack Development en SoulCode Academy. Licenciada en Cine Digital, con personalidad mediadora y comunicativa, disfruta trabajando en grupo y conociendo nuevos pensamientos. Decidió estudiar tecnología, embarcándose en el curso intensivo de SoulCode. Dentro de este proyecto, desarrolló el front-end. Ser responsable de la maquetación, redacción y capacidad de respuesta de esta landing page, agregando el uso de atributos de inclusión para personas con discapacidad auditiva y visual, una gran oportunidad para poner en práctica lo aprendido y lo que involucra la producción de un proyecto.")

    $('#ferramentas').text("Instrumentos")
    $('#calculadora-footer').text("Calculadora")
    $('#formulario-footer').text("Formulário")
    $('#cadastro-footer').text("Registro")
    $('#central-de-atendimento').text("Central de atendimiento")

    $('.containerlingua').fadeOut('2000')
}






    var elementBody = document.querySelector('*');
    var elementBtnIncreaseFont = document.getElementById('aumentar');
    var elementBtnDecreaseFont = document.getElementById('diminuir');
    // Padrão de tamanho, equivale a 100% do valor definido no Body
    var fontSize = 100;
    // Valor de incremento ou decremento, equivale a 10% do valor do Body
    var increaseDecrease = 10;

    // Evento de click para aumentar a fonte
    elementBtnIncreaseFont.addEventListener('click', function(event) {
        fontSize = fontSize + increaseDecrease;
        elementBody.style.fontSize = fontSize + '%';
        if(elementBody.style.fontSize == 160 +'%'){
            elementBtnIncreaseFont.hidden = true;
        }
        if(elementBody.style.fontSize > 40 +'%'){
            elementBtnDecreaseFont.hidden = false;
        }
    });

    // Evento de click para diminuir a fonte
    elementBtnDecreaseFont.addEventListener('click', function(event) {
        fontSize = fontSize - increaseDecrease;
        elementBody.style.fontSize = fontSize + '%';
        if(elementBody.style.fontSize == 40 + '%'){
            elementBtnDecreaseFont.hidden = true;
        }
        if(elementBody.style.fontSize < 160 +'%'){
            elementBtnIncreaseFont.hidden = false;
        }
    });