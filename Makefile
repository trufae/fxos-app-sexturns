all:
	jsfmt -w *.js

dist:
	rm -f ../fxos-app-sexturns.zip
	zip -r ../fxos-app-sexturns.zip *
