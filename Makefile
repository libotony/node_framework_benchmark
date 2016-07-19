all: prepare test

test: express-test koa1-test koa2-test

prepare:
	@cd express && npm install
	@cd ..
	@cd koa1 && npm install
	@cd ..
	@cd koa2 && npm install
	@cd ..
	@echo	'prepare complete'


version:
	@node -v
	@npm -v
	@echo

express-test:
	@echo	'benchmark express'
	@./run express/express.js
	@echo

koa1-test:
	@echo	'benchmark koa1'
	@./run koa1/koa1.js
	@echo

koa2-test:
	@echo	'benchmark koa2'
	@./run koa2/koa2.js
	@echo
