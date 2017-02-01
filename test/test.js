var app = require('../server/webapp.service')();
var expect = require('chai').expect;
var assert = require('chai').assert;
var request = require("supertest");
<<<<<<< HEAD
var deleteToTest = require('../server/domains/domainNeo4jController').getDeleteRelationCallback;

=======
var TermsToTest = require('../server/domains/domainNeo4jController').getTermsIntendsCallback;
var intentToTest = require('../server/domains/intentNeo4jController').getPublishIntentCallback;
>>>>>>> fad6d322220549390c413d559f3b19079fabd7a8
request = request(app);
describe("Make get requests for terms", function() {
    it('Simple post Request to root url', function(done) {
        request.get('/').expect(200, done);
    });
    it('Testing for not defined route', function(done) {
        request.get('/_undefined_route').expect(404, done);
        this.timeout(10000)
    });
});
describe("testing", function() {
    it('content length', function(done) {
        request.get('/domain/:intentName/terms')
            .expect('Content-Length', '37', done)
    });
    it('content type', function(done) {
        request.get('/domain/:intentName/terms')
            .expect('Content-Type', /json/, done)
    });
});

<<<<<<< HEAD
describe("Make get requests to delete ", function() {
	it('Simple post Request to root url', function(done) {
		request.get('/').expect(200, done);
=======
>>>>>>> fad6d322220549390c413d559f3b19079fabd7a8

describe("Make GET requests to intent :", function() {
    it('Testing for all intent', function(done) {
        request.get('/domain/add/intent').expect(200, done);
        this.timeout(10000);
    });
});


describe("Make GET requests to intent along with intent name ", function() {
    it('Testing for a intent which is not present', function(done) {
        request.get('/domain/add/nullIntent').
        expect({
            error: 'Null intent object while retriving the intent from mongo..!'
        }, done);
        this.timeout(10000);
    });
});

<<<<<<< HEAD
// describe("Make GET requests to intent :", function() {
// 	it('Testing for all intent', function(done) {
// 		request.get('/domain/add/intent').expect(200, done);
// 		this.timeout(10000);
// 	});
// });


// describe("Make GET requests to intent along with intent name ", function() {
// 	it('Testing for a intent which is not present', function(done) {
// 		request.get('/domain/nullIntent').
// 		expect({ error: 'Null intent object while retriving the intent from mongo..!' }, done);
// 		this.timeout(10000);
// 	});
// });
//

describe("testing", function(){
    it('content length', function(done){
        request.post('/domain/delete/relation')
        .expect('Content-Length', '218', done)
    });

		it('content type', function(done){
        request.post('/domain/delete/relation')
        .expect('Content-Type', /json/)
				done();
    });
});

describe("Make GET requests to deleteRelation :", function() {
    it('Testing for all relations', function(done) {
        request.post('/domain/delete/relation').expect(200, done);
        this.timeout(10000);
    });
});


describe("Make POST requests to delete relation along with relation name", function(){
	it('Testing for a relation which is  present', function(done){
		request.post('/domain/delete/relation').
		expect({error: 'relations are deleted from mongo'})
		done();
	});
});

describe("fetching relation which is not present", function() {
	let deleteObj = {
		domain: "no_domain",
		concept:"no_domain"
	};

	it('trying to get the relation of domain which is not there', function() {

		request.post('/domain/introduction/terms').
		expect({error: 'relations are deleted from mongo'})

		//expect(Object.keys(intentToTest(intentObj))).to.have.lengthOf(0);
=======

describe("Make POST requests to intents along with intent name", function() {
    it('Testing for a intent which is not present', function(done) {
        request.post('/domain/add/intent').
        expect({
            error: 'Intents are not added from mongo'
        })
        done();
    });
});

describe("fetching terms from the intent which is not present", function() {
    let intentObj = {
        domain: "no_domain",
        intent: "no_domain"
    };

    it('trying to get the Terms of intent which is not there', function() {
>>>>>>> fad6d322220549390c413d559f3b19079fabd7a8

        //	expect(Object.keys(intentToTest(intentObj))).to.have.lengthOf(0);
        request.post('/domain/introduction/terms').
        expect({
            error: 'Intent is not present'
        })
    });

}); //end of describe
