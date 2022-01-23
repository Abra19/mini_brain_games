install:
	npm ci

brain-games:
	node bin/brain-games.js

lint:
	npx eslint --fix .

publish:
	npm publish --dry-run

.PHONY: brain-games