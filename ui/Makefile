build/dev: build/html
	./node_modules/.bin/webpack --config webpack.config.js --mode development

build: build/html
	./node_modules/.bin/webpack --config webpack.config.js --mode production


watch/build: build/html
	./node_modules/.bin/webpack --progress --watch --config webpack.config.js --mode development

build/html:
	cp -rf resources/public/ __dist/

clean:
	rm -rf __dist

deploy: build
	firebase deploy

setup/deploy:
	npm install -g firebase-utils
	firebase login
