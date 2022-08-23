describe('Личный кабинет и переход к заказам', function () {

	it('staya', function () {
		cy.visit('https://staya.dog/');
		cy.get('.header-bottom__right--link').click();
		cy.get('.auth-form > form > [type="email"]').type('amakoffn@gmail.com');
		cy.get('.auth-form > form > [type="password"]').type('89828392724niK');
		cy.get('.auth-form__submit').click();
		cy.contains('Мои заказы');

		
		})
})