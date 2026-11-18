document.addEventListener('DOMContentLoaded', () => {
    const slideshowContainer = document.getElementById('slideshow-container');
    if (!slideshowContainer) return;

    // Caminho para o seu arquivo JSON de cardápio
    const jsonUrl = 'assets/json/cardapio.json';
    
    let currentSlide = 0;
    let slides = [];
    let autoPlayInterval;

    // 1. Busca os dados no JSON
    fetch(jsonUrl)
        .then(response => {
            if (!response.ok) throw new Error('Erro ao carregar o JSON do cardápio');
            return response.json();
        })
        .then(data => {
            let destaques = [];
            
            // Itera sobre as categorias do cardápio para buscar pratos com imagens reais
            for (const categoria in data) {
                if (data.hasOwnProperty(categoria)) {
                    data[categoria].forEach(prato => {
                        // Filtra pratos que têm imagem definida e que NÃO usam a imagem de placeholder (logo.png)
                        if (prato.imagem && prato.imagem.trim() !== "" && !prato.imagem.includes('logo.png')) {
                            if(categoria.startsWith("Bacalhau") && prato.item !="Bacalhoada") { prato.item = "Bacalhau " + prato.item; } // Ajuste do nome para Bacalhau
                            if(categoria.startsWith("Risoto")) { prato.item = "Risoto " + prato.item; } // Ajuste do nome para Risoto
                            destaques.push(prato);
                        }
                    });
                }
            }

            // Opcional: Embaralhar ou limitar a quantidade de destaques para o carrossel (ex: máximo 5)
            // Aqui pegamos os 5 primeiros pratos válidos encontrados
            // destaques = destaques.slice(0, 15);

            if (destaques.length > 0) {
                buildSlideshow(destaques);
            } else {
                throw new Error('Nenhum prato com imagem válida encontrado para o slideshow');
            }
        })
        .catch(error => {
            console.error('Erro:', error);
            slideshowContainer.innerHTML = '<p class="error-msg" style="text-align:center; padding: 2rem;">Não foi possível carregar os destaques no momento.</p>';
        });

    // 2. Constrói o HTML dinamicamente
    function buildSlideshow(data) {
        if (!data || data.length === 0) return;
        console.log('Destaques para o slideshow:', data);
        // Wrapper para os slides
        const slidesWrapper = document.createElement('div');
        slidesWrapper.className = 'slides-wrapper';
        slideshowContainer.appendChild(slidesWrapper);

        data.forEach((prato, index) => {
            const slide = document.createElement('div');
            slide.className = `slide ${index === 0 ? 'active' : ''}`;
            
            // Ajusta o caminho da imagem caso venha com "../" do JSON
            const imagemUrl = prato.imagem.replace('../', '');

            // Define a imagem de fundo com um overlay
            slide.style.backgroundImage = `url('${imagemUrl}')`;
            slide.style.backgroundSize = '80%';

            const content = document.createElement('div');
            content.className = 'slide-content';

            content.innerHTML = `
                <h2 class="ganache">${prato.item}</h2>`;

            slide.appendChild(content);
            slidesWrapper.appendChild(slide);
        });

        slides = document.querySelectorAll('.slide');

        // Cria a navegação apenas se houver mais de 1 slide
        if (data.length > 1) {
            createNavigation(data.length);
            startAutoPlay();
        }
    }

    // 3. Cria Setas e Bolinhas (Indicadores)
    function createNavigation(totalSlides) {
        const prevBtn = document.createElement('button');
        prevBtn.className = 'slide-nav prev';
        prevBtn.innerHTML = '&#10094;';
        prevBtn.setAttribute('aria-label', 'Slide anterior');
        prevBtn.onclick = () => moveSlide(-1);

        const nextBtn = document.createElement('button');
        nextBtn.className = 'slide-nav next';
        nextBtn.innerHTML = '&#10095;';
        nextBtn.setAttribute('aria-label', 'Próximo slide');
        nextBtn.onclick = () => moveSlide(1);

        slideshowContainer.appendChild(prevBtn);
        slideshowContainer.appendChild(nextBtn);

/*         const indicatorsContainer = document.createElement('div');
        indicatorsContainer.className = 'slide-indicators';

        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('span');
            dot.className = `dot ${i === 0 ? 'active' : ''}`;
            dot.onclick = () => goToSlide(i);
            indicatorsContainer.appendChild(dot);
        }
        slideshowContainer.appendChild(indicatorsContainer); */
    }

    // 4. Lógica de transição
    function moveSlide(direction) {
        let newIndex = currentSlide + direction;
        if (newIndex < 0) newIndex = slides.length - 1;
        if (newIndex >= slides.length) newIndex = 0;
        goToSlide(newIndex);
    }

    function goToSlide(index) {
        slides[currentSlide].classList.remove('active');
/*         const dots = document.querySelectorAll('.dot');
        if(dots.length > 0) dots[currentSlide].classList.remove('active'); */

        currentSlide = index;

        slides[currentSlide].classList.add('active');
/*         if(dots.length > 0) dots[currentSlide].classList.add('active'); */

        resetAutoPlay();
    }

    // 5. Auto-play
    function startAutoPlay() {
        autoPlayInterval = setInterval(() => {
            moveSlide(1);
        }, 5000);
    }

    function resetAutoPlay() {
        clearInterval(autoPlayInterval);
        startAutoPlay();
    }
});