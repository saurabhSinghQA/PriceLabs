/// <reference types="cypress" />
describe('API test suite', () => {


    it('Verify pricing page GET call', () => {

        cy.request({
            method: 'GET',
            url: 'https://pricelabs.co/pricing',
            headers: {
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
                'Content-Type': 'text/html; charset=utf-8',
            },
        }).then(response => {
            expect(response.status).to.eq(200)
            cy.log(response.st)
        });
    })


    it('Verify saving note Post call', () => {

        cy.request({
            method: 'POST',
            url: 'https://app.pricelabs.co/api/listing_notes',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json',
            },
            body: {
                listingId: "5d0a4acaa5dbf000106e1b6a",
                pmsName: "stays",
                notes: "123",
                notesId: null
            },
        }).then(response => {
            expect(response.status).to.eq(200);
            expect(response.body.message).to.eq("SUCCESS");
            
        });
    })



})