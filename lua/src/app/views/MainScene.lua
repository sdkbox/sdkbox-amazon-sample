
local MainScene = class("MainScene", cc.load("mvc").ViewBase)

-- MainScene.RESOURCE_FILENAME = "MainScene.csb"

function MainScene:onCreate()
    math.newrandomseed()
    cc.MenuItemFont:setFontName("arial")
    cc.MenuItemFont:setFontSize(32)

    local menuIAP = cc.Menu:create()
    menuIAP:move(display.cx,200)
           :addTo(self)

    local coinsCount = 0
    local coins = cc.MenuItemFont:create("0")
    cc.Menu:create(
        cc.MenuItemFont:create("Load"):onClicked(function()
                print("[IAP] load")
                sdkbox.IAP:refresh()
            end),
        cc.MenuItemFont:create("Restore"):onClicked(function()
                print("[IAP] restore")
                sdkbox.IAP:restore()
            end),
        cc.MenuItemFont:create("Close"):onClicked(function()
                cc.Director:getInstance():endToLua()
                os.exit(0)
            end),
        coins
        )
    :move(200,400)
    :addTo(self)
    :alignItemsVerticallyWithPadding(20)

    sdkbox.IAP:setDebug(true)
    sdkbox.IAP:init()

    sdkbox.IAP:setListener(function(args)
            dump(args, "IAP")

            if args.event == "onSuccess" then
                -- Purchase success
                local product = args.product
                print("[IAP] Purchase successful:", product.name)

                if product.name == "coin_package" then
                    coinsCount = coinsCount + 1000
                    coins:setString(tostring(coinsCount))
                elseif product.name == "coin_package2" then
                    coinsCount = coinsCount + 5000
                    coins:setString(tostring(coinsCount))
                elseif product.name == "remove_ads" then
                    print("Remove Ads")
                end

            elseif args.event == "onFailure" then
                -- Purchase failed
                -- msg is the error message
                local product = args.product
                print("[IAP] Purchase failed:", product.name, "error:", args.msg)
            elseif args.event == "onCanceled" then
                -- Purchase was canceled by user
                local product = args.product
                print("[IAP] Purchase canceled: ", product.name)
            elseif args.event == "onRestored" then
                local product = args.product
                print("[IAP] Restored: ", product.name)
            elseif args.event == "onProductRequestSuccess" then
                menuIAP:removeAllChildren()
                -- Returns you the data for all the iap products
                -- You can get each item using following method
                local products = args.products
                print("[IAP] onProductRequestSuccess", products)
                for k,v in pairs(products) do
                    print("[IAP] ================")
                    print("[IAP] name: ", v.name)
                    print("[IAP] price: ", v.price)
                    print("[IAP] ================")

                    cc.MenuItemFont:create(v.name):onClicked(function()
                            print("[IAP] buy item ", v.name)
                            sdkbox.IAP:purchase(v.name)
                        end)
                    :addTo(menuIAP)
                end
                menuIAP:alignItemsVerticallyWithPadding(10)

            elseif args.event == "onProductRequestFailure" then
                -- When product refresh request fails.
                print("[IAP] Failed to get products")
            end
        end)

end

return MainScene
