const schemaCardapio ={
  "@context": "https://schema.org",
  "@type": "Menu",
  "name": "Cardápio - Os Patrícios Culinária Luso-Brasileira",
  "hasMenuSection": [
    {
      "@type": "MenuSection",
      "name": "Entradas",
      "hasMenuItem": [
        {
          "@type": "MenuItem",
          "name": "Degustalhau",
          "description": "Bolinho de aipim com bacalhau, mostarda Dijon e queijo Gorgonzola, servido em cama de couve, acompanha creme de queijo com vinho do Porto e geléia de pimenta.",
          "offers": {
            "@type": "Offer",
            "price": "50.00",
            "priceCurrency": "BRL"
          }
        },
        {
          "@type": "MenuItem",
          "name": "Bolinho de Bacalhau",
          "description": "O Melhor Bolinho de Bacalhau do Sul de Minas. Porção com 6 unidades.",
          "offers": {
            "@type": "Offer",
            "price": "30.00",
            "priceCurrency": "BRL"
          }
        },
        {
          "@type": "MenuItem",
          "name": "Sardinha Frita",
          "description": "Sardinhas selecionadas, empanadas em fina crosta de fubá e fritas até a crocância ideal. Porção com 6 unidades.",
          "offers": {
            "@type": "Offer",
            "price": "36.00",
            "priceCurrency": "BRL"
          }
        },
        {
          "@type": "MenuItem",
          "name": "Meio a Meio",
          "description": "Seleção combinada com 3 unidades do nosso clássico bolinho de bacalhau artesanal e 3 sardinhas crocantes.",
          "offers": {
            "@type": "Offer",
            "price": "38.00",
            "priceCurrency": "BRL"
          }
        },
        {
          "@type": "MenuItem",
          "name": "Mata Bicho",
          "description": "Couvert composto por variedade de pães artesanais, patê de sardinha da casa, azeitonas pretas selecionadas e 3 unidades de bolinho de bacalhau.",
          "offers": {
            "@type": "Offer",
            "price": "48.00",
            "priceCurrency": "BRL"
          }
        },
        {
          "@type": "MenuItem",
          "name": "Punhetas de Bacalhau",
          "description": "Salada fria de lascas nobres de bacalhau marinadas em azeite de oliva extra-virgem premium, cebola brunoise e azeitonas pretas.",
          "offers": {
            "@type": "Offer",
            "price": "65.00",
            "priceCurrency": "BRL"
          }
        },
        {
          "@type": "MenuItem",
          "name": "Pataniscas de Bacalhau",
          "description": "Lascas de bacalhau envolvidas em uma massa leve de ovos e farinha, temperadas com cebola e salsa fresca, fritas até ficarem douradas e crocantes.",
          "offers": {
            "@type": "Offer",
            "price": "60.00",
            "priceCurrency": "BRL"
          }
        },
        {
          "@type": "MenuItem",
          "name": "Pica Pau",
          "description": "Iscas de filé bovino salteadas ao molho de mostarda, cerveja e picles artesanais da casa. Acompanham torradas finas.",
          "offers": {
            "@type": "Offer",
            "price": "65.00",
            "priceCurrency": "BRL"
          }
        },
        {
          "@type": "MenuItem",
          "name": "Rissois de Leitão",
          "description": "Massa artesanal leve e crocante, recheada com leitão assado lentamente, desfiado e temperado com especiarias tradicionais. Porção com 6 unidades.",
          "offers": {
            "@type": "Offer",
            "price": "36.00",
            "priceCurrency": "BRL"
          }
        }
      ]
    },
    {
      "@type": "MenuSection",
      "name": "Carnes & Tradicionais",
      "hasMenuItem": [
        {
          "@type": "MenuItem",
          "name": "Leitão à Bairrada",
          "description": "Leitão assado lentamente ao forno com especiarias tradicionais da região da Bairrada, destacando-se pela suculência e pele perfeitamente crocante (pururuca). Acompanha batatas rústicas.",
          "offers": {
            "@type": "Offer",
            "price": "85.00",
            "priceCurrency": "BRL"
          }
        },
        {
          "@type": "MenuItem",
          "name": "Carne de Porco à Portuguesa",
          "description": "Cubos de lombo suino marinados em vinho branco e alho, salteados com batatas em cubos e finalizados com picles artesanais e coentros frescos.",
          "offers": {
            "@type": "Offer",
            "price": "65.00",
            "priceCurrency": "BRL"
          }
        },
        {
          "@type": "MenuItem",
          "name": "Arroz de Pato",
          "description": "Arroz cozido no caldo do próprio pato com a carne desfiada, finalizado no forno com rodelas de linguiça portuguesa.",
          "offers": {
            "@type": "Offer",
            "price": "75.00",
            "priceCurrency": "BRL"
          }
        },
        {
          "@type": "MenuItem",
          "name": "Medalhão à Piamontese",
          "description": "Medalhão de filé mignon grelhado, acompanhado de risoto cremoso à piamontese com champignon e batatas chips artesanais.",
          "offers": {
            "@type": "Offer",
            "price": "95.00",
            "priceCurrency": "BRL"
          }
        },
        {
          "@type": "MenuItem",
          "name": "Lingua à Portuguesa",
          "description": "Língua bovina cozida lentamente em redução de vinho tinto, tomates assados, cebola, alho e louro. Acompanha purê de batata e arroz branco.",
          "offers": {
            "@type": "Offer",
            "price": "70.00",
            "priceCurrency": "BRL"
          }
        },
        {
          "@type": "MenuItem",
          "name": "Carne Assada à Moda do Chef",
          "description": "Corte bovino selecionado, assado lentamente em seu próprio suco com ervas finas. Servido com batatas cozidas e arroz branco.",
          "offers": {
            "@type": "Offer",
            "price": "75.00",
            "priceCurrency": "BRL"
          }
        }
      ]
    },
    {
      "@type": "MenuSection",
      "name": "Bacalhau (Individual)",
      "hasMenuItem": [
        {
          "@type": "MenuItem",
          "name": "Zé do Pipo",
          "description": "Lascas nobres de bacalhau sobre cama de purê de batatas cremoso e cebolas confitadas, cobertas com maionese artesanal e azeitonas pretas, gratinadas ao forno.",
          "offers": {
            "@type": "Offer",
            "price": "159.00",
            "priceCurrency": "BRL"
          }
        },
        {
          "@type": "MenuItem",
          "name": "Gomes de Sá",
          "description": "Clássica combinação de lascas de bacalhau, batatas cozidas e douradas no azeite de oliva, cebolas fatiadas, ovos cozidos e azeitonas pretas, finalizada com salsa fresca.",
          "offers": {
            "@type": "Offer",
            "price": "159.00",
            "priceCurrency": "BRL"
          }
        },
        {
          "@type": "MenuItem",
          "name": "Bacalhoada",
          "description": "Postas de bacalhau assadas ao forno com pimentões coloridos, cebolas, tomates-cereja, ovos cozidos e azeitonas, regadas com azeite extra-virgem. Acompanha porção de arroz",
          "offers": {
            "@type": "Offer",
            "price": "159.00",
            "priceCurrency": "BRL"
          }
        },
        {
          "@type": "MenuItem",
          "name": "Natas",
          "description": "Lascas de bacalhau envolvidas em um aveludado molho béchamel com natas frescas e cubos de batatas levemente fritos, gratinadas ao forno com queijo parmesão.",
          "offers": {
            "@type": "Offer",
            "price": "159.00",
            "priceCurrency": "BRL"
          }
        }
      ]
    },
    {
      "@type": "MenuSection",
      "name": "Bacalhau (Para Compartilhar)",
      "hasMenuItem": [
        {
          "@type": "MenuItem",
          "name": "Ao Lagareiro",
          "description": "Lombo nobre de bacalhau Gadus Morhua assado, guarnecido de batatas ao murro, couve salteada, crosta crocante de panko com alho, pimentões confitados e azeitonas pretas.",
          "offers": {
            "@type": "Offer",
            "price": "289.00",
            "priceCurrency": "BRL"
          }
        },
        {
          "@type": "MenuItem",
          "name": "Minota",
          "description": "Posta de bacalhau frita em azeite de oliva, coberta por generosa cebolada confitada e servida com batatas portuguesas em rodelas.",
          "offers": {
            "@type": "Offer",
            "price": "289.00",
            "priceCurrency": "BRL"
          }
        }
      ]
    },
    {
      "@type": "MenuSection",
      "name": "Risotos",
      "hasMenuItem": [
        {
          "@type": "MenuItem",
          "name": "Tio Jorge",
          "description": "Risoto de arroz arbóreo com lascas nobres de bacalhau, queijo Alagoa premium, vinho branco e manteiga.",
          "offers": {
            "@type": "Offer",
            "price": "85.00",
            "priceCurrency": "BRL"
          }
        },
        {
          "@type": "MenuItem",
          "name": "Do Álvaro",
          "description": "Risoto de arroz arbóreo com tiras de filé mignon, queijo gorgonzola e creme de leite.",
          "offers": {
            "@type": "Offer",
            "price": "75.00",
            "priceCurrency": "BRL"
          }
        },
        {
          "@type": "MenuItem",
          "name": "Camarão",
          "description": "Risoto de arroz arbóreo com camarões grelhados e alho-poró confitado, finalizado com queijo Alagoa, vinho branco e manteiga.",
          "offers": {
            "@type": "Offer",
            "price": "75.00",
            "priceCurrency": "BRL"
          }
        }
      ]
    },
    {
      "@type": "MenuSection",
      "name": "Sopas e Caldos",
      "hasMenuItem": [
        {
          "@type": "MenuItem",
          "name": "Caldo Verde",
          "description": "Creme aveludado de batatas com finas fitas de couve e rodelas de linguiça portuguesa.",
          "offers": {
            "@type": "Offer",
            "price": "30.00",
            "priceCurrency": "BRL"
          }
        },
        {
          "@type": "MenuItem",
          "name": "Caldo de Costela",
          "description": "Caldo encorpado de costela bovina cozida lentamente, aipim cremoso e agrião fresco.",
          "offers": {
            "@type": "Offer",
            "price": "30.00",
            "priceCurrency": "BRL"
          }
        },
        {
          "@type": "MenuItem",
          "name": "Caldo de Alho-Poró",
          "description": "Creme leve de alho-poró com base de inhame e batata, finalizado com creme de leite sem lactose e ervas finas.",
          "offers": {
            "@type": "Offer",
            "price": "30.00",
            "priceCurrency": "BRL"
          }
        }
      ]
    },
    {
      "@type": "MenuSection",
      "name": "Frutos do Mar",
      "hasMenuItem": [
        {
          "@type": "MenuItem",
          "name": "Espetada de Salmão",
          "description": "Cubos de salmão intercalados com pimentões e cebola, grelhados na chapa e servidos no espeto. Acompanha arroz branco e batatas chips artesanais.",
          "offers": {
            "@type": "Offer",
            "price": "80.00",
            "priceCurrency": "BRL"
          }
        },
        {
          "@type": "MenuItem",
          "name": "Moqueca Capixaba",
          "description": "Postas de peixe cozidas na panela de barro com tomates, cebola, coentro e azeite de urucum. Feitas de forma tradicional, sem leite de coco ou azeite de dende. Acompanha arroz branco e pirão.",
          "offers": {
            "@type": "Offer",
            "price": "95.00",
            "priceCurrency": "BRL"
          }
        },
        {
          "@type": "MenuItem",
          "name": "Arroz de Frutos do Mar",
          "description": "Arroz caldoso cozido no caldo de frutos do mar com camarão, lula, mexilhão e polvo, finalizado com tomate e coentro fresco.",
          "offers": {
            "@type": "Offer",
            "price": "110.00",
            "priceCurrency": "BRL"
          }
        }
      ]
    },
    {
      "@type": "MenuSection",
      "name": "Prato Infantil",
      "hasMenuItem": [
        {
          "@type": "MenuItem",
          "name": "Tirinhas de Filé Mignon",
          "description": "Corte extra macio de filé mignon em tiras. Acompanha arroz branco e opção de purê de batatas da casa ou batatas Smiles.",
          "offers": {
            "@type": "Offer",
            "price": "42.00",
            "priceCurrency": "BRL"
          }
        }
      ]
    },
    {
      "@type": "MenuSection",
      "name": "Acompanhamentos",
      "hasMenuItem": [
        {
          "@type": "MenuItem",
          "name": "Arroz Branco, Arroz de Brócolis, Legumes Cozidos, Batatas ao Murro ou Purê de Batata",
          "description": "Valor por porção de acompanhamento extra.",
          "offers": {
            "@type": "Offer",
            "price": "15.00",
            "priceCurrency": "BRL"
          }
        }
      ]
    },
    {
      "@type": "MenuSection",
      "name": "Sobremesas",
      "hasMenuItem": [
        {
          "@type": "MenuItem",
          "name": "Pastel de Nata",
          "description": "Massa folhada crocante recheada com um creme rico e aveludado à base de gemas, leite e um toque de canela.",
          "offers": {
            "@type": "Offer",
            "price": "14.00",
            "priceCurrency": "BRL"
          }
        },
        {
          "@type": "MenuItem",
          "name": "Aletria",
          "description": "Feita com finos fios de massa tipo aletria, cozida em leite com açúcar e gemas, aromatizada com casca de limão e polvilhada com canela.",
          "offers": {
            "@type": "Offer",
            "price": "14.00",
            "priceCurrency": "BRL"
          }
        },
        {
          "@type": "MenuItem",
          "name": "Quindim da Dona Patroa",
          "description": "Doce brasileiro irresistível, com base de coco ralado fresco, açúcar e gemas, assado até atingir uma textura cremosa e brilho dourado intenso.",
          "offers": {
            "@type": "Offer",
            "price": "15.00",
            "priceCurrency": "BRL"
          }
        },
        {
          "@type": "MenuItem",
          "name": "Leite Creme",
          "description": "A versão portuguesa do crème brûlée, com textura cremosa e aveludada, coberto por uma irresistível e fina crosta de açúcar caramelizado com o maçarico.",
          "offers": {
            "@type": "Offer",
            "price": "15.00",
            "priceCurrency": "BRL"
          }
        },
        {
          "@type": "MenuItem",
          "name": "Serradura",
          "description": "Sobremesa fria e reconfortante, feita com camadas alternadas de natas batidas com café e biscoito Maria finamente triturado.",
          "offers": {
            "@type": "Offer",
            "price": "15.00",
            "priceCurrency": "BRL"
          }
        },
        {
          "@type": "MenuItem",
          "name": "Baba de Camelo",
          "description": "Mousse de doce de leite, feito de acordo com a tradição portuguesa",
          "offers": {
            "@type": "Offer",
            "price": "15.00",
            "priceCurrency": "BRL"
          }
        },
        {
          "@type": "MenuItem",
          "name": "Café Expresso",
          "offers": {
            "@type": "Offer",
            "price": "10.00",
            "priceCurrency": "BRL"
          }
        }
      ]
    },
    {
      "@type": "MenuSection",
      "name": "Drinks",
      "hasMenuItem": [
        {
          "@type": "MenuItem",
          "name": "Caipirinha",
          "description": "Cachaça Ouro + Fruta (perguntar sabores disponíveis)",
          "offers": {
            "@type": "Offer",
            "price": "29.00",
            "priceCurrency": "BRL"
          }
        },
        {
          "@type": "MenuItem",
          "name": "Caipivodka",
          "description": "Absolut + Fruta (perguntar sabores disponíveis)",
          "offers": {
            "@type": "Offer",
            "price": "32.00",
            "priceCurrency": "BRL"
          }
        },
        {
          "@type": "MenuItem",
          "name": "Minas Sour",
          "description": "Cachaça Ouro, Limão, Xarope de Açúcar e Vinho Tinto",
          "offers": {
            "@type": "Offer",
            "price": "35.00",
            "priceCurrency": "BRL"
          }
        },
        {
          "@type": "MenuItem",
          "name": "Soda Italiana",
          "description": "Perguntar sobre sabores disponíveis",
          "offers": {
            "@type": "Offer",
            "price": "18.00",
            "priceCurrency": "BRL"
          }
        }
      ]
    },
    {
      "@type": "MenuSection",
      "name": "Digestivos",
      "hasMenuItem": [
        {
          "@type": "MenuItem",
          "name": "Bagaceira",
          "offers": {
            "@type": "Offer",
            "price": "25.00",
            "priceCurrency": "BRL"
          }
        },
        {
          "@type": "MenuItem",
          "name": "Vinho do Porto",
          "offers": {
            "@type": "Offer",
            "price": "25.00",
            "priceCurrency": "BRL"
          }
        },
        {
          "@type": "MenuItem",
          "name": "Licor de Pastel de Nata",
          "offers": {
            "@type": "Offer",
            "price": "22.00",
            "priceCurrency": "BRL"
          }
        }
      ]
    },
    {
      "@type": "MenuSection",
      "name": "Vinhos",
      "hasMenuItem": [
        {
          "@type": "MenuItem",
          "name": "Taça de Vinho",
          "offers": {
            "@type": "Offer",
            "price": "29.00",
            "priceCurrency": "BRL"
          }
        }
      ]
    },
    {
      "@type": "MenuSection",
      "name": "Sucos e Refrigerantes",
      "hasMenuItem": [
        {
          "@type": "MenuItem",
          "name": "Coca KS / Coca Zero KS",
          "offers": {
            "@type": "Offer",
            "price": "11.00",
            "priceCurrency": "BRL"
          }
        },
        {
          "@type": "MenuItem",
          "name": "Refrigerante Lata",
          "description": "Coca Cola Original / Coca Cola Zero/Sprite/Fanta Uva/Guaraná Antarctica/Guaraná Antarctica Zero/H2O Limão/H20 Limonetto",
          "offers": {
            "@type": "Offer",
            "price": "10.00",
            "priceCurrency": "BRL"
          }
        },
        {
          "@type": "MenuItem",
          "name": "Água Mineral São Lourenço",
          "description": "Com ou Sem Gás",
          "offers": {
            "@type": "Offer",
            "price": "10.00",
            "priceCurrency": "BRL"
          }
        },
        {
          "@type": "MenuItem",
          "name": "Shot de limão",
          "offers": {
            "@type": "Offer",
            "price": "5.00",
            "priceCurrency": "BRL"
          }
        },
        {
          "@type": "MenuItem",
          "name": "Matte Leão ou Ice Tea",
          "offers": {
            "@type": "Offer",
            "price": "10.00",
            "priceCurrency": "BRL"
          }
        },
        {
          "@type": "MenuItem",
          "name": "Limonada",
          "offers": {
            "@type": "Offer",
            "price": "12.00",
            "priceCurrency": "BRL"
          }
        },
        {
          "@type": "MenuItem",
          "name": "Suco de Laranja",
          "offers": {
            "@type": "Offer",
            "price": "12.00",
            "priceCurrency": "BRL"
          }
        },
        {
          "@type": "MenuItem",
          "name": "Jarra de Suco",
          "offers": {
            "@type": "Offer",
            "price": "24.00",
            "priceCurrency": "BRL"
          }
        }
      ]
    },
    {
      "@type": "MenuSection",
      "name": "Chopp & Cervejas",
      "hasMenuItem": [
        {
          "@type": "MenuItem",
          "name": "Chopp Pilsen",
          "offers": {
            "@type": "Offer",
            "price": "15.00",
            "priceCurrency": "BRL"
          }
        },
        {
          "@type": "MenuItem",
          "name": "Cerveja Long Neck",
          "description": "Heineken/Heineken Zero Alcool, Stella Artois / Stella Artois Gold",
          "offers": {
            "@type": "Offer",
            "price": "15.00",
            "priceCurrency": "BRL"
          }
        },
        {
          "@type": "MenuItem",
          "name": "Therezópolis Rubine Bock",
          "offers": {
            "@type": "Offer",
            "price": "22.00",
            "priceCurrency": "BRL"
          }
        }
      ]
    },
    {
      "@type": "MenuSection",
      "name": "Destilados",
      "hasMenuItem": [
        {
          "@type": "MenuItem",
          "name": "Vodka Absolut",
          "offers": {
            "@type": "Offer",
            "price": "35.00",
            "priceCurrency": "BRL"
          }
        },
        {
          "@type": "MenuItem",
          "name": "Whisky Black Label / Jameson",
          "offers": {
            "@type": "Offer",
            "price": "35.00",
            "priceCurrency": "BRL"
          }
        },
        {
          "@type": "MenuItem",
          "name": "Cachaça Prata ou Ouro",
          "offers": {
            "@type": "Offer",
            "price": "16.00",
            "priceCurrency": "BRL"
          }
        }
      ]
    }
  ]
};

// 2. Crie o elemento <script> dinamicamente
const scriptSchema = document.createElement('script');
scriptSchema.type = 'application/ld+json';
scriptSchema.text = JSON.stringify(schemaCardapio);

// 3. Injete o elemento no <head> da página
document.head.appendChild(scriptSchema);