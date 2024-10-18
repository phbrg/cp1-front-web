let assunto = document.querySelector('#assunto');
let nome = document.querySelector('#nome');
let email = document.querySelector('#email');
let numero = document.querySelector('#numero');
let mensagem = document.querySelector('#mensagem');
let btn = document.querySelector('#btn');

if (btn) {
    btn.addEventListener('click', (e) => {
        e.preventDefault();

        if (!nome.value || (nome.value).length < 2) {
            alert('O Nome precisa ter mais de 2 letras.');
        } else if (!email.value || (email.value).length == 0) {
            alert('O Email não pode ser vazio.');
        } else if (!numero.value || (numero.value).length == 0) {
            alert('O Telefone não pode ser vazio.');
        } else if (!mensagem.value || (mensagem.value).length == 0) {
            alert('A Mensagem não pode ser vazia.');
        } else {
            alert(`Enviado!\nAssunto: ${assunto.value}\nNome: ${nome.value}\nEmail: ${email.value}\nNumero: ${numero.value}\nMensagem: ${mensagem.value}`)
        }
    });
}

function animals(animal) {
    if (animal == 'acai') alert('Nome: Açai\nSexo: Macho\nIdade: 4 Meses\nPorte: Medio\nStatus: Castrado, Vacinado e Vermifugado')
    if (animal == 'scooby') alert('Nome: Scooby\nSexo: Macho\nIdade: 8 Meses\nPorte: Medio\nStatus: Castrado, Vacinado e Vermifugado')
    if (animal == 'banana') alert('Nome: Banana\nSexo: Femea\nIdade: 4 Meses\nPorte: Medio\nStatus: Castrado, Vacinado e Vermifugado')
    if (animal == 'luz') alert('Nome: Luz\nSexo: Femea\nIdade: 4 Meses\nPorte: Medio\nStatus: Castrado, Vacinado e Vermifugado')
    if (animal == 'sparks') alert('Nome: Sparks\nStatus: Adotado')
    if (animal == 'duquesa') alert('Nome: Duquesa\nStatus: Adotado')
}

// gambiarra do krai

const adotei = document.querySelector('#adotei');
const saida = document.querySelector('.saida');

let prev = adotei.value
setInterval(() => {
    if (adotei.value !== prev) {
        changeText();
        prev = adotei.value
    }
}, 100)

function changeText() {
    if (adotei.value == 'cuidados') {
        saida.innerHTML = `
            Cuidar de animais domésticos, como cães e gatos, requer atenção e carinho. Aqui estão alguns cuidados básicos:
            Alimentação: Ofereça uma ração adequada à idade e tamanho do animal. Evite alimentos perigosos, como chocolate e cebola.
            Hidratação: Sempre forneça água fresca e limpa.
            Higiene: Banhos regulares são importantes, mas a frequência varia. Escove o pelo para evitar nós e remover pelos soltos.
            Exercício: Leve seu cão para passear diariamente. Para gatos, brinque com brinquedos interativos.
            Saúde: Visite o veterinário regularmente para vacinas e check-ups. Mantenha a vermifugação e a prevenção de pulgas em dia.
            Socialização: Interaja com seu pet e permita que ele socialize com outros animais e pessoas.
            Segurança: Mantenha sua casa segura, evitando objetos perigosos e garantindo que o animal não tenha acesso à rua sem supervisão.
            Com esses cuidados, seu cão ou gato terá uma vida saudável e feliz!
        `
    } else if (adotei.value == 'alimentacao') {
        saida.innerHTML = `
            A alimentação adequada para cães e gatos é essencial para garantir sua saúde e bem-estar. Aqui estão algumas orientações:
            Cães
            Ração de Qualidade: Escolha uma ração específica para a idade, tamanho e necessidades do seu cão. As opções incluem ração seca, úmida ou caseira, mas sempre consulte um veterinário.
            Porções: Siga as recomendações do fabricante quanto à quantidade. Ajuste com base no nível de atividade do animal.
            Evitar Alimentos Perigosos: Não ofereça chocolate, cebola, alho, uvas, passas ou ossos cozidos, pois podem ser tóxicos.
            Petiscos Saudáveis: Use petiscos em moderação e opte por opções saudáveis, como frutas e vegetais adequados, como cenoura e maçã.
            Gatos
            Ração Específica: Assim como os cães, os gatos também precisam de ração de qualidade, específica para sua idade e condição de saúde.
            Proteína: Os gatos são carnívoros obrigatórios, então uma dieta rica em proteínas é crucial. Rações ricas em carne são as melhores.
            Água: Gatos podem ser propensos à desidratação. Ofereça água fresca e considere a ração úmida para aumentar a ingestão de líquidos.
            Evitar Alimentos Tóxicos: Alimentos como cebola, alho, chocolate e álcool são perigosos para os gatos.
            Petiscos: Assim como para cães, escolha petiscos saudáveis e evite excessos.
            Lembre-se de que cada animal é único, então sempre consulte um veterinário para personalizar a dieta do seu pet. Isso ajudará a garantir que ele tenha uma vida longa e saudável!
        `
    } else if (adotei.value == 'adaptacao') {
        saida.innerHTML = `
            A adaptação de cães e gatos a um novo lar é um processo importante e pode levar algum tempo. Aqui estão algumas dicas para facilitar essa transição:
            Cães
            Ambiente Seguro: Crie um espaço tranquilo, com cama, brinquedos e água. Isso ajuda o cão a se sentir mais confortável.
            Rotina: Estabeleça uma rotina de alimentação, passeios e brincadeiras. Isso traz segurança e previsibilidade.
            Socialização: Gradualmente, apresente-o a novos ambientes, pessoas e outros animais. Isso ajuda a construir confiança.
            Treinamento: Invista em treinamento básico. Isso não só ensina comandos, mas também fortalece o vínculo entre você e seu cão.
            Paciência: Cada animal tem seu próprio ritmo. Seja paciente e compreensivo durante a adaptação.
            Gatos
            Espaço Aconchegante: Ofereça um local seguro, como uma caixa ou cama, onde o gato possa se esconder e relaxar.
            Exploração Gradual: Permita que o gato explore a casa aos poucos. Feche portas de cômodos não essenciais inicialmente.
            Brinquedos e Arranhadores: Forneça brinquedos e arranhadores para estimular o comportamento natural e ajudar na adaptação.
            Alimentação Consistente: Mantenha a alimentação no mesmo horário. Isso ajuda a criar uma rotina.
            Calma e Paciência: Gatos podem demorar mais para se adaptar. Respeite o espaço deles e ofereça carinho quando eles estiverem prontos.
            Considerações Finais
            A adaptação pode levar de dias a semanas, dependendo do animal e da situação. O mais importante é oferecer amor, segurança e paciência, ajudando seu pet a se sentir em casa.
        `
    }
}