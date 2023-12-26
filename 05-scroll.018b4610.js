var BASE_URL="https://the-one-api.dev/v2",END_POINT="character",KEY="fP9PYRN - X34XoDXpvVl1";function getCharacter(){var t=new URLSearchParams({limit:20,page:1}),a={method:"GET",headers:{Authorization:"Bearer".concat(KEY)}};fetch("".concat(BASE_URL).concat(END_POINT,"?").concat(t),a).then((function(t){return console.log(t)}))}getCharacter();
//# sourceMappingURL=05-scroll.018b4610.js.map
