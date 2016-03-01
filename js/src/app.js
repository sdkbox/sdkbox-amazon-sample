
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        var self = this;
        var size = cc.winSize;

        cc.MenuItemFont.setFontName('arial');
        cc.MenuItemFont.setFontSize(32);

        self.menuIAP = new cc.Menu();
        self.menuIAP.setPosition(size.width/2,200);
        this.addChild(self.menuIAP);

        self.coinCount = 0;
        self.coinsLabel = cc.Label.createWithSystemFont("0", "Arial", 32);
        self.coinsLabel.setPosition(200, 200);
        this.addChild(self.coinsLabel);

        var menu = new cc.Menu(
            new cc.MenuItemFont("Load", this.onIAPLoad, this),
            new cc.MenuItemFont("Restore", this.onIAPRestore, this)
            );
        menu.setPosition(200, 400);
        menu.alignItemsVerticallyWithPadding(20);
        this.addChild(menu);

        sdkbox.IAP.setDebug(true);
        sdkbox.IAP.init();

        sdkbox.IAP.setListener({
            onSuccess : function (product) {
                //Purchase success
                console.log("[IAP] Purchase successful: " + product.name)

                if (product.name == "coin_package") {
                    self.coinCount = self.coinCount + 1000;
                    self.coinsLabel.setString(self.coinCount.toString());
                } else if (product.name == "coin_package2") {
                    self.coinCount = self.coinCount + 5000;
                    self.coinsLabel.setString(self.coinCount.toString());
                } else if (product.name == "remove_ads") {
                    console.log("Remove Ads");
                }
            },
            onFailure : function (product, msg) {
                //Purchase failed
                //msg is the error message
                console.log("[IAP] Purchase failed: " + product.name + " error: " + msg);
            },
            onCanceled : function (product) {
                //Purchase was canceled by user
                console.log("[IAP] Purchase canceled: " + product.name);
            },
            onRestored : function (product) {
                //Purchase restored
                console.log("[IAP] Restored: " + product.name);
            },
            onProductRequestSuccess : function (products) {
                self.menuIAP.removeAllChildren();
                //Returns you the data for all the iap products
                //You can get each item using following method
                for (var i = 0; i < products.length; i++) {
                    console.log("[IAP] ================");
                    console.log("[IAP] name: " + products[i].name);
                    console.log("[IAP] price: " + products[i].price);
                    console.log("[IAP] ================");


                    var productName = products[i].name;
                    var btn = new cc.MenuItemFont(productName);
                    btn.name = productName
                    btn.setCallback(function (sender) {
                        console.log("[IAP] buy item " + sender.name);
                        sdkbox.IAP.purchase(sender.name);
                    }, null);
                    self.menuIAP.addChild(btn);
                }
                self.menuIAP.alignItemsVerticallyWithPadding(10);
            },
            onProductRequestFailure : function (msg) {
                //When product refresh request fails.
                console.log("[IAP] Failed to get products");
            }
        });

        return true;
    },
    onIAPLoad: function() {
        console.log("[IAP] load");
        sdkbox.IAP.refresh();
    },
    onIAPRestore: function() {
        console.log("[IAP] restore");
        sdkbox.IAP.restore();
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

