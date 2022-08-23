describe('Проверка на неверный ввод пароля', function () {

	it('Открытие сайта', function () {
		cy.visit('https://staya.dog/');
		cy.get('.header-bottom__right--link').click();
		cy.get('.auth-form > form > [type="email"]').type('amakoffn@gmail.com');
		cy.get('.auth-form > form > [type="password"]').type('89828392724');
		cy.get('.auth-form__submit').click();
		cy.contains('Невозможно войти с предоставленными учетными данными.')
		
		
		})
})