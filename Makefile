all: prepare express-test

test: prepare

prepare:
	@cd express && npm install
	@cd ..
	@cd koa1 && npm install
	@cd ..
	@cd koa1 && npm install
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
