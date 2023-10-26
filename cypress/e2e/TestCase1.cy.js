describe('Find a product', () => {
  it('Search', () => {
    const searchText = 'Stray'; //слово для пошуку
    cy.visit('https://giftly.klickly-dev.com/marketplace');
    cy.viewport(1920, 1080)
    cy.get('input[class="sc-iIUQWv jpNogh"]').type(searchText);
    cy.get('div.sc-kTLmzF button').should('be.visible'); //чекаємо поки поле пошуку відреагує
    cy.get("button:contains('Search')").click();
    
    cy.contains('h3', searchText, { timeout: 10000 }).click();

    });
})