document.addEventListener('DOMContentLoaded', () => {
    const menuPrincipal = document.getElementById('menu');
    const htmlMenu = `
                <a class="navbar-brand logo" href="#"> <img class="logo" src="assets/images/logo.png" /> </a>
                <div class="social-media">
                    <a href="https://instagram.com/ospatricios.mg" target="_blank"><i
                            class="fa-brands fa-instagram"></i></a>
                    <a href="https://wa.me/5535988027379" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
                    <a href="mailto:contato@ospatricios.com.br"><i class="fa-regular fa-envelope"></i></a>
                </div>


                <div class="header-right gitan-medium">
                    <a class="navbar-item" href="./natal/">Encomendas de Natal</a>
                    <a class="navbar-item" href="./cardapio/">Cardápio</a>
                    <a class="navbar-item" href="#sobre">Sobre Nós</a>
                    <a class="navbar-item" href="#localizacao">Localização</a>
                    <button id="btn-abrir-reserva" class="header-btn"> Reservas</button>
                </div>\n`;
    menuPrincipal.innerHTML = htmlMenu;

    const lightboxHTML = `
                <!-- Lightbox de Reserva -->
                <div id="reserva-lightbox" class="lightbox-overlay gitan">
                    <div class="lightbox-container reserva-modal">
                        <button class="lightbox-fechar" id="fechar-reserva">&times;</button>

                        <div class="reserva-header">
                            <h2 class="gitan-bold">Faça a sua Reserva</h2>
                            <p>Garanta a sua mesa. Receberemos os dados pelo WhatsApp e confirmaremos em instantes.</p>
                        </div>

                        <div class="reserva-form-container">
                            <form id="form-reserva" class="form-reserva">
                                <div class="form-group">
                                    <label for="res-nome">Nome Completo</label>
                                    <input type="text" id="res-nome" placeholder="Ex: João da Silva" required>
                                </div>

                                <div class="form-row">
                                    <div class="form-group">
                                        <label for="res-data">Data</label>
                                        <input type="date" id="res-data" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="res-hora">Horário</label>
                                        <input type="time" id="res-hora" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="res-pessoas">Nº de Pessoas (máx. 24)</label>
                                        <input type="number" id="res-pessoas" min="1" max="24" value="2" required>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="res-obs">Observações (Opcional)</label>
                                    <textarea id="res-obs" rows="2"
                                        placeholder="Alguma restrição alimentar ou comemoração especial?"></textarea>
                                </div>

                                <button type="submit" class="btn btn-whatsapp">
                                    Solicitar Reserva no WhatsApp
                                </button>
                            </form>
                        </div>
                    </div>
                </div> \n`;

    document.body.insertAdjacentHTML('beforeend', lightboxHTML);
    // Controlos da Lightbox
    const modalReserva = document.getElementById('reserva-lightbox');
    const btnAbrir = document.getElementById('btn-abrir-reserva');
    const btnFechar = document.getElementById('fechar-reserva');

    // Abrir modal
    if (btnAbrir) {
        btnAbrir.addEventListener('click', () => {
            modalReserva.classList.add('ativa');
        });
    }

    // Fechar modal no X
    if (btnFechar) {
        btnFechar.addEventListener('click', () => {
            modalReserva.classList.remove('ativa');
        });
    }

    // Fechar modal ao clicar fora da caixa branca
    if (modalReserva) {
        modalReserva.addEventListener('click', (e) => {
            if (e.target === modalReserva) {
                modalReserva.classList.remove('ativa');
            }
        });
    }

    // Lógica do Formulário
    const form = document.getElementById('form-reserva');
    if (!form) return;

    // Impede datas no passado
    const dataInput = document.getElementById('res-data');
    const hoje = new Date().toISOString().split('T')[0];
    dataInput.setAttribute('min', hoje);

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nome = document.getElementById('res-nome').value.trim();
        const data = document.getElementById('res-data').value;
        const hora = document.getElementById('res-hora').value;
        const pessoas = parseInt(document.getElementById('res-pessoas').value);
        const obs = document.getElementById('res-obs').value.trim();

        if (pessoas < 1 || pessoas > 24) {
            alert('Aceitamos reservas para o limite máximo de 24 pessoas.');
            return;
        }

        const dataObj = new Date(`${data}T${hora}`);
        const diaSemana = dataObj.getDay();
        const horaMinutos = hora.split(':');
        const tempoDecimal = parseInt(horaMinutos[0]) + (parseInt(horaMinutos[1]) / 60);

        if (diaSemana === 2 || diaSemana === 3) {
            const conf = confirm('Normalmente estamos fechados às Terças e Quartas. Se for um feriado, clique em OK para prosseguir.');
            if (!conf) return;
        }

        const isAlmoco = tempoDecimal >= 12 && tempoDecimal <= 15;
        const isJantar = tempoDecimal >= 18 && tempoDecimal <= 22;

        if (diaSemana === 1) {
            if (!isJantar) {
                alert('Às segundas-feiras, abrimos apenas para o jantar (18:00 às 22:00).');
                return;
            }
        } else if (diaSemana === 0 || diaSemana >= 4) {
            if (!isAlmoco && !isJantar) {
                alert('Por favor, escolha um horário entre 12:00-15:00 ou 18:00-22:00.');
                return;
            }
        }

        // ALTERE AQUI PARA O SEU NÚMERO
        const telefoneRestaurante = "5535988027379";

        const dataFormatada = data.split('-').reverse().join('/');
        let mensagem = `*Nova Solicitação de Reserva* 🍷\n\n*Nome:* ${nome}\n*Data:* ${dataFormatada}\n*Horário:* ${hora}\n*Pessoas:* ${pessoas}\n`;
        if (obs) mensagem += `*Observações:* ${obs}\n`;

        const urlWhatsApp = `https://wa.me/${telefoneRestaurante}?text=${encodeURIComponent(mensagem)}`;
        window.open(urlWhatsApp, '_blank');

        // Fecha a lightbox após enviar
        modalReserva.classList.remove('ativa');
    });
});