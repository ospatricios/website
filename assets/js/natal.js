document.addEventListener('DOMContentLoaded', () => {
    let cart = [];
    const cartButton = document.createElement('button');
    cartButton.id = 'cart-button';
    cartButton.textContent = 'Continuar meu pedido';
    cartButton.style.display = 'none';
    cartButton.style.position = 'fixed';
    cartButton.style.bottom = '20px';
    cartButton.style.right = '20px';
    cartButton.style.padding = '15px 30px';
    cartButton.style.backgroundColor = '#9f3e35';
    cartButton.style.color = '#fff';
    cartButton.style.border = 'none';
    cartButton.style.borderRadius = '5px';
    cartButton.style.fontSize = '1.2em';
    cartButton.style.cursor = 'pointer';
    cartButton.style.boxShadow = '0 4px 10px rgba(0,0,0,0.3)';
    cartButton.style.zIndex = '1000';
    document.body.appendChild(cartButton);

    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.style.display = 'none';
    lightbox.style.position = 'fixed';
    lightbox.style.top = '0';
    lightbox.style.left = '0';
    lightbox.style.width = '100%';
    lightbox.style.height = '100%';
    lightbox.style.backgroundColor = 'rgba(0,0,0,0.8)';
    lightbox.style.zIndex = '1001';
    lightbox.style.justifyContent = 'center';
    lightbox.style.alignItems = 'center';
    
    const lightboxContent = document.createElement('div');
    lightboxContent.style.backgroundColor = '#FAF6ED';
    lightboxContent.style.padding = '30px';
    lightboxContent.style.borderRadius = '8px';
    lightboxContent.style.width = '90%';
    lightboxContent.style.maxWidth = '500px';
    lightboxContent.style.maxHeight = '90vh';
    lightboxContent.style.overflowY = 'auto';
    lightboxContent.style.border = '2px solid #B8924B';
    lightboxContent.style.position = 'relative';

    const closeBtn = document.createElement('span');
    closeBtn.innerHTML = '&times;';
    closeBtn.style.position = 'absolute';
    closeBtn.style.top = '10px';
    closeBtn.style.right = '20px';
    closeBtn.style.fontSize = '2em';
    closeBtn.style.cursor = 'pointer';
    closeBtn.style.color = '#0F3B73';
    closeBtn.onclick = () => lightbox.style.display = 'none';

    lightboxContent.appendChild(closeBtn);
    lightbox.appendChild(lightboxContent);
    document.body.appendChild(lightbox);

    function updateCartButton() {
        if (cart.length > 0) {
            cartButton.style.display = 'block';
        } else {
            cartButton.style.display = 'none';
            lightbox.style.display = 'none'; // Auto-close if empty
        }
    }

    function parsePrice(priceStr) {
        let cleaned = priceStr.replace(/<[^>]*>?/gm, '');
        cleaned = cleaned.replace(/[R$]/g, '').trim();
        cleaned = cleaned.replace(/\./g, '');
        cleaned = cleaned.replace(',', '.');
        let val = parseFloat(cleaned);
        return isNaN(val) ? 0 : val;
    }

    function syncUI() {
        document.querySelectorAll('.add-btn').forEach(btn => {
            const itemName = btn.dataset.itemName;
            const inCart = cart.find(item => item.name === itemName);
            const cardEl = btn.closest('.price-card');
            
            if (inCart) {
                btn.textContent = 'Remover';
                btn.style.backgroundColor = '#8B1E15';
                if (cardEl) {
                    cardEl.style.backgroundColor = '#E2EFDA';
                    cardEl.style.border = '2px solid #521914';
                }
            } else {
                btn.textContent = 'Adicionar';
                btn.style.backgroundColor = '#0F3B73';
                if (cardEl) {
                    cardEl.style.backgroundColor = '';
                    cardEl.style.border = '';
                }
            }
        });
        updateCartButton();
        if (lightbox.style.display === 'flex' && cart.length > 0) {
            renderCartHTML();
        }
    }

    function toggleItem(baseName, itemName, priceHTML, isPortion) {
        const price = parsePrice(priceHTML);
        
        if (isPortion) {
            const existingIndex = cart.findIndex(i => i.name === itemName);
            // Ao adicionar uma porção, limpamos qualquer outra porção do mesmo prato
            cart = cart.filter(i => i.baseName !== baseName);
            if (existingIndex === -1) {
                cart.push({ name: itemName, baseName: baseName, price: price, qty: 1, isPortion: true });
            }
        } else {
            const existingIndex = cart.findIndex(i => i.name === itemName);
            if (existingIndex !== -1) {
                cart.splice(existingIndex, 1);
            } else {
                cart.push({ name: itemName, baseName: baseName, price: price, qty: 1, isPortion: false });
            }
        }
        syncUI();
    }

    window.removeFromCart = function(itemName) {
        cart = cart.filter(item => item.name !== itemName);
        syncUI();
    };

    const itemRows = document.querySelectorAll('.item-row');
    itemRows.forEach(row => {
        const nameEl = row.querySelector('.item-name');
        const priceUnitEl = row.querySelector('.item-price-unit');
        const priceGrid = row.querySelector('.price-grid');
        
        if (nameEl) {
            const baseName = nameEl.textContent.trim();
            if (priceGrid) {
                const priceCards = priceGrid.querySelectorAll('.price-card');
                priceCards.forEach(card => {
                    const addBtn = document.createElement('button');
                    addBtn.className = 'add-btn';
                    addBtn.style.display = 'block';
                    addBtn.style.margin = '10px auto 0 auto';
                    addBtn.style.padding = '5px 15px';
                    addBtn.style.backgroundColor = '#0F3B73';
                    addBtn.style.color = 'white';
                    addBtn.style.border = 'none';
                    addBtn.style.borderRadius = '4px';
                    addBtn.style.cursor = 'pointer';
                    addBtn.style.fontSize = '0.9em';
                    addBtn.style.fontFamily ='ferryman, sans-serif';

                    const priceEl = card.querySelector('.card-price');
                    const paxEl = card.querySelector('.card-pax');
                    const itemName = `${baseName} (${paxEl.textContent.trim()})`;
                    
                    addBtn.dataset.baseName = baseName;
                    addBtn.dataset.itemName = itemName;
                    addBtn.dataset.isPortion = 'true';
                    
                    addBtn.onclick = () => toggleItem(baseName, itemName, priceEl.innerHTML, true);
                    card.appendChild(addBtn);
                });
            } else if (priceUnitEl) {
                const addBtn = document.createElement('button');
                addBtn.className = 'add-btn';
                addBtn.style.display = 'block';
                addBtn.style.margin = '10px auto 0 auto';
                addBtn.style.padding = '10px 20px';
                addBtn.style.backgroundColor = '#0F3B73';
                addBtn.style.color = 'white';
                addBtn.style.border = 'none';
                addBtn.style.borderRadius = '4px';
                addBtn.style.cursor = 'pointer';
                addBtn.style.fontSize = '1em';
                addBtn.style.fontFamily ='ferryman, sans-serif';
                
                addBtn.dataset.baseName = baseName;
                addBtn.dataset.itemName = baseName;
                addBtn.dataset.isPortion = 'false';
                
                addBtn.onclick = () => toggleItem(baseName, baseName, priceUnitEl.innerHTML, false);
                row.appendChild(addBtn);
            }
        }
    });

    function renderCartHTML() {
        let total = 0;
        let cartHTML = '<h2 style="color:#0F3B73; text-align:center; font-family:ferryman,sans-serif;">Resumo do Pedido</h2><hr style="border:1px solid #B8924B; margin-bottom:20px;">';
        
        cartHTML += '<div style="max-height: 250px; overflow-y: auto; margin-bottom: 20px;">';
        cart.forEach((item) => {
            const itemTotal = item.price * item.qty;
            total += itemTotal;
            cartHTML += `<div style="display:flex; justify-content:space-between; margin-bottom:10px; border-bottom:1px solid #ddd; padding-bottom:5px; font-family: sans-serif; align-items:center;">
                            <div style="flex:1; padding-right:10px;">
                                <strong>${item.name}</strong>
                            </div>
                            <div style="display:flex; align-items:center; white-space:nowrap;">
                                <span style="font-weight:bold; color:#8B1E15; margin-right:15px;">
                                    R$ ${itemTotal.toFixed(2).replace('.', ',')}
                                </span>
                                <button onclick="removeFromCart('${item.name}')" style="background:none; border:none; color:#8B1E15; font-size:1.2em; cursor:pointer; padding:0;" title="Remover item">&#128465;</button>
                            </div>
                         </div>`;
        });
        cartHTML += '</div>';
        
        cartHTML += `<div style="text-align:right; font-size:1.4em; font-weight:bold; color:#0F3B73; margin-bottom:20px; font-family: sans-serif;">Total: R$ ${total.toFixed(2).replace('.', ',')}</div>`;
        
        cartHTML += `
            <form id="order-form" style="font-family: sans-serif;">
                <input type="text" id="c-name" placeholder="Seu Nome Completo" required style="width:100%; padding:10px; margin-bottom:10px; box-sizing:border-box; border:1px solid #ccc; border-radius:4px;">
                
                <select id="c-date" required style="width:100%; padding:10px; margin-bottom:10px; box-sizing:border-box; border:1px solid #ccc; border-radius:4px;">
                    <option value="" disabled selected>Data da Encomenda</option>
                    <option value="Dia 24 (Natal)">Dia 24 (Natal)</option>
                    <option value="Dia 31 (Réveillon)">Dia 31 (Réveillon)</option>
                </select>

                <select id="c-service" required style="width:100%; padding:10px; margin-bottom:10px; box-sizing:border-box; border:1px solid #ccc; border-radius:4px;">
                    <option value="" disabled selected>Forma de Recebimento</option>
                    <option value="Retirada">Retirada no Local</option>
                    <option value="Entrega">Entrega (Taxa sob consulta)</option>
                </select>
                
                <input type="text" id="c-address" placeholder="Endereço Completo (Se for entrega)" style="width:100%; padding:10px; margin-bottom:20px; box-sizing:border-box; border:1px solid #ccc; border-radius:4px;">

                <button type="submit" style="width:100%; padding:15px; background-color:#25D366; color:white; border:none; border-radius:5px; font-size:1.2em; font-weight:bold; cursor:pointer;">
                    Enviar Pedido por WhatsApp
                </button>
            </form>
        `;

        lightboxContent.innerHTML = '';
        lightboxContent.appendChild(closeBtn);
        lightboxContent.insertAdjacentHTML('beforeend', cartHTML);
        
        document.getElementById('order-form').onsubmit = (e) => {
            e.preventDefault();
            const name = document.getElementById('c-name').value;
            const date = document.getElementById('c-date').value;
            const service = document.getElementById('c-service').value;
            const address = document.getElementById('c-address').value;
            
            let message = `*NOVO PEDIDO - OS PATRÍCIOS* 🎄\n\n`;
            message += `*Cliente:* ${name}\n`;
            message += `*Data:* ${date}\n`;
            message += `*Serviço:* ${service}\n`;
            if (service === 'Entrega' && address) {
                message += `*Endereço:* ${address}\n`;
            }
            message += `\n*ITENS:*\n`;
            
            cart.forEach(item => {
                message += `- 1x ${item.name} (R$ ${item.price.toFixed(2).replace('.', ',')})\n`;
            });
            message += `\n*TOTAL ESTIMADO: R$ ${total.toFixed(2).replace('.', ',')}*\n`;
            message += `(Aguardando confirmação do valor de entrega, se aplicável)`;
            
            const encodedMsg = encodeURIComponent(message);
            window.open(`https://wa.me/5535988027379?text=${encodedMsg}`, '_blank');
        };
    }

    cartButton.onclick = () => {
        renderCartHTML();
        lightbox.style.display = 'flex';
    };
    
    syncUI();
});
