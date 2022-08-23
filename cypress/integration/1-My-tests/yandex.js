describe('Поиск картинки с котятами', function () {

	it('Открытие поисковика', function () {
		cy.visit('https://yandex.ru/');
		cy.get('#text').type('Котята').type('{enter}');
		cy.get('.Composite > :nth-child(1) > .UniSearchHeader > .Link > .UniSearchHeader-Title-Text')
		})
})