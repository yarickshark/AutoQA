describe('Find STAR WARS', () => {
    it('Search', () => {
      const searchText = 'STAR WARS'; //слово для пошуку
      cy.visit('https://giftly.klickly-dev.com/marketplace');

      // Вводимо у поле пошуку необхідне слово
      cy.get('input[class="sc-iIUQWv jpNogh"]').type(searchText);

      // Чекаємо поки поле пошуку відреагує
      cy.get('div.sc-kTLmzF button').should('be.visible'); 

      // Натискаємо кнопку пошуку
      cy.get("button:contains('Search')").click();

      // Очікуємо, поки з'являться товари з необхідним текстом у назві
      cy.get('div[data-e2e="product-card"] h3').should('contain', searchText).then(() => {

        // Знаходимо необхідні товари
        cy.get('div[data-e2e="product-card"]').then((elements) => {
          const firstElement = elements[0];
          const lastElement = elements[elements.length - 1];
        
          // Перевіряємо, що необхідні товари знаходяться в началі та в кінці
          cy.wrap(firstElement).find('h3').should('contain', searchText);
          cy.wrap(lastElement).find('h3').should('contain', searchText);
        });
      });
    });
})