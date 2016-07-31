(function (app) {
    app.HeroService = ng.core.Injectable()
        .Class({
            constructor: function () {
                this.getHeroes = function () {
                    var p = new Promise(function(resolve){
                        setTimeout(function(){
                            resolve(app.HEROES);
                        },2000);
                    });
                    return p;
                };
            }
        });
})(window.app || (window.app = {}));