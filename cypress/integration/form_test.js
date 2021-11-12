describe('Quotes App', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza');
    })

    //helpers
    const nameInput = () => cy.get('input[name=name]');
    const anchoviesInput =() =>cy.get('input[name= anchovies]');
    const beefjerkyInput =() =>cy.get('input[name=beefjerky]');
    const goatbloodInput =() =>cy.get('input[name=goatblood]');
    const lollipopsInput =() =>cy.get('input[name=lollipops]');
    const submitBtn = () => cy.get('button[id="submitBtn"]');
    const specialInput = () =>cy.get('input[name=special]');
    //end helpers


    //sanity checks
    it('sanity check to make sure tests work', () => {
        // "it" is a test
        // "expect" is an assertion
        // There can be multiple (and often will be) assertions per test
        // but...they must all relate to the "one thing" we're testing!
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5);
        expect({}).not.to.equal({}); // === strict equality
        expect({}).to.eql({}); // == not strict equality
    })
    //end sanity checks

    it('the proper elements are showing', () => {
        nameInput().should('exist');
        anchoviesInput().should('exist');
        beefjerkyInput().should('exist');
        goatbloodInput().should('exist');
        lollipopsInput().should('exist');
        submitBtn().should('exist');
        specialInput().should('exist')

        cy.contains('Build your own pizza').should('exist'); // case sensitive
        cy.contains(/bUild YouR own PiZzA/i).should('exist'); // NOT case sensitive
    })

    describe('Filling out some inputs and submitting', () => {
            it('can navigate to the site', () =>{
                cy.url().should('include', 'localhost');
            });

            it('can fill in name', () =>{
                nameInput()
                    .should('have.value', '')
                    .type('abc')
                    .should('have.value', 'abc')

                specialInput()
                    .should('have.value', '')
                    .type('abc')
                    .should('have.value', 'abc')

                    anchoviesInput()
                        .click()
                        .should('have.value', 'on')

                        beefjerkyInput()
                        .click()
                        .should('have.value', 'on')

                        goatbloodInput()
                        .click()
                        .should('have.value', 'on')

                        lollipopsInput()
                        .click()
                        .should('have.value', 'on')

            })

          
    })


})