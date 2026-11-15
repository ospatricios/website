    // Função para transformar o nome da categoria em um ID válido para os links (slug)
    function gerarIdLink(texto) {
        return texto.toString().toLowerCase()
            .normalize("NFD").replace(/[\u0300-\u036f]/g, "") 
            .replace(/[^\w\s-]/g, "") 
            .trim()
            .replace(/\s+/g, "-"); 
    }

    function carregarCarta() {
        fetch('vinhos.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Falha ao carregar a carta de vinhos.');
                }
                return response.json();
            })
            .then(dados => {
                const container = document.getElementById('carta');
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
                    itens.forEach(vinho => {
                        if(vinho.indisponivel==1){return;}
                        let precoFormatado = vinho.valor.toFixed(1).replace('.', ',');
                        if (precoFormatado.endsWith(',0')) {
                            precoFormatado = precoFormatado.replace(',0', ',');
                        }
                        let teor = vinho.teor_alcoolico.toFixed(1).replace('.', ',') + '%';
                        if (teor.endsWith(',0%')) {
                            teor = teor.replace(',0%', '%');
                        }

                        const classificacao = vinho.classificacao && vinho.classificacao.trim() !== "" ? `  ${vinho.classificacao} |` : "";
                        const regiao = vinho.regiao && vinho.regiao.trim() !== "" ? `  ${vinho.regiao} | ` : "";
                        const descHTML = `<p class="item-vinho-desc gitan-bold2b6298">${classificacao}${regiao}${teor}</p>`;
                        const uvas = `<p class="item-vinho-uvas gitan-medium"><b>Uvas:</b> <span class="item-vinho-value">${vinho.uvas.join(', ')}</span></p>`;
                        const valores = `<p class="item-vinho-valores gitan-medium">
                        <span class="item-vinho-value">Corpo: <img src="../assets/images/vinhos/${vinho.corpo}.png" alt="${vinho.corpo}"></span>
                        <span class="item-vinho-value">Taninos: <img src="../assets/images/vinhos/${vinho.taninos}.png" alt="${vinho.taninos}"></span>
                        <span class="item-vinho-value">Doçura: <img src="../assets/images/vinhos/${vinho.docura}.png" alt="${vinho.docura}"></span>
                        <span class="item-vinho-value">Acidez: <img src="../assets/images/vinhos/${vinho.acidez}.png" alt="${vinho.acidez}"></span>
                        </p>` 
                        html += `
                        <div class="menu-item">
                            <div class="item-vinho-header">
                                <p class="item-vinho-name ganache">${vinho.nome}</p>
                                ${descHTML}
                                ${uvas}
                                ${valores}  
                            </div>
                            <div class="item-vinho-price ganache">${precoFormatado}</div>
                        </div>\n`;
                    });

                    html += `</section>\n`;
                }

                container.innerHTML = html;
            })
            .catch(erro => {
                console.error('Erro:', erro);
                document.getElementById('carta').innerHTML = '<p style="text-align: center;">Erro ao carregar a carta de vinhos. Tente novamente mais tarde.</p>';
            });
    }

    document.addEventListener('DOMContentLoaded', carregarCarta);