build/dev: build/html
	./node_modules/.bin/webpack --config webpack.config.js --mode development

build: build/html
	./node_modules/.bin/webpack --config webpack.config.js --mode production

build/html:
	cp -rf resources/public __dist/

clean:
	rm -rf __dist
