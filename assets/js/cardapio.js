    // Função para transformar o nome da categoria em um ID válido para os links (slug)
    function gerarIdLink(texto) {
        return texto.toString().toLowerCase()
            .normalize("NFD").replace(/[\u0300-\u036f]/g, "") 
            .replace(/[^\w\s-]/g, "") 
            .trim()
            .replace(/\s+/g, "-"); 
    }

    // Função para renderizar o cardápio
    function carregarCardapio() {
        fetch('cardapio.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Falha ao carregar o cardápio.');
                }
                return response.json();
            })
            .then(dados => {
                const container = document.getElementById('cardapio');
                let html = '';

                // Percorre cada categoria (Entradas, Carnes, etc.)
                for (const [categoria, itens] of Object.entries(dados)) {
                    
                    const idSecao = gerarIdLink(categoria);

                    // Adiciona a section, o H2 e o link "Voltar ao topo" usando flexbox para alinhamento
                    html += `
                    <section id="${idSecao}">
                        <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 15px;">
                            <h2 style="margin-bottom: 0;">${categoria}</h2>
                            <a href="#" class="voltar-topo">
                                <i class="fa-solid fa-chevron-up"></i><span class="desktop"> Voltar ao topo</span>
                            </a>
                        </div>\n`;

                    // Percorre os pratos dentro da categoria
                    itens.forEach(prato => {
                        const usarFallback = !prato.imagem || prato.imagem === "" || prato.imagem.includes('logo.png');
                        const imgSrc = usarFallback ? "../assets/images/logo.png" : prato.imagem;
                        const imgAlt = usarFallback ? "Imagem não disponível" : (prato.alt || prato.item);
                        const classeImg = usarFallback ? "item-img center" : "item-img";
                        
                        let precoFormatado = prato.preco.toFixed(2).replace('.', ',');
                        if (precoFormatado.endsWith(',00')) {
                            precoFormatado = precoFormatado.replace(',00', ',');
                        }

                        const descHTML = prato.descricao && prato.descricao.trim() !== "" 
                            ? `<p class="item-desc gitan-medium">${prato.descricao}</p>` 
                            : "";

                        html += `
                        <div class="menu-item">
                            <div class="${classeImg}">
                                <img src="${imgSrc}" alt="${imgAlt}">
                            </div>
                            <div class="item-header">
                                <p class="item-name ganache">${prato.item}</p>
                                ${descHTML}
                            </div>
                            <div class="item-price ganache">${precoFormatado}</div>
                        </div>\n`;
                    });

                    html += `</section>\n`;
                }

                container.innerHTML = html;
            })
            .catch(erro => {
                console.error('Erro:', erro);
                document.getElementById('cardapio-dinamico').innerHTML = '<p style="text-align: center;">Erro ao carregar o cardápio. Tente novamente mais tarde.</p>';
            });
    }

    document.addEventListener('DOMContentLoaded', carregarCardapio);