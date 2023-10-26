describe('Find a product', () => {
    it('Search', () => {
        cy.visit('https://giftly.klickly-dev.com/marketplace');

        // Чекаємо поки загрузяться ціни на товари (вони останні загружаються)
        cy.get('p.sc-fotOHu.fMhiff').should('not.have.text', 'NaN', { timeout: 20000 }); 

        // Прокручуємо елемент з товарами вниз
        cy.get('main.sc-eySxxw.eaCkwW').parent().scrollTo('bottom');

        // Перевіряємо що наступна сторінка загрузилась
        cy.get('main.sc-eySxxw.eaCkwW h3').should('have.length', 48, { timeout: 15000 });

        // Перевіряємо, що заголовки перших 24 товаріа не співпадають з заголовками товарів з 25 по 48
        cy.get('main.sc-eySxxw.eaCkwW h3') // Виділяємо всі заголовки h3 елементів з товаром
        .should('have.length', 48) // Перевіряємо, що їх 48
        .then(($headings) => {
            const first24 = $headings.slice(0, 24).toArray().map((el) => el.textContent);
            const next24 = $headings.slice(24).toArray().map((el) => el.textContent);

            // Перевірка перших 24 товарів та наступних 24 товарів
            expect(first24).to.not.deep.equal(next24);
        });
    });
})