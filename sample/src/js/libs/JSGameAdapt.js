var JSGameAdapt = {

    PAGEVIEW_INTRO_PANEL: "IntroPanel",
    PAGEVIEW_BEGIN_GAMEPLAY: "BeginGameplay",
    PAGEVIEW_END_GAMEPLAY: "EndGameplay",
    PAGEVIEW_BEGIN_LOADING: "BeginLoading",
    PAGEVIEW_CONFIRMATION_PANEL: "ConfirmationPanel",
    PAGEVIEW_LOSEGAME_PANEL: "LosegamePanel",
    PAGEVIEW_OPTIONS_PANEL: "OptionsPanel",
    PAGEVIEW_GAMEPLAY_PROGRESS: "GameplayProgress",

    Track: {
        Active: false,
        G: function() {
            "use strict";
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        },
        Guid: function () {
            "use strict";
            var guid = (G() + G() + "-" + G() + "-" + G() + "-" + G() + "-" + G() + G() + G()).toUpperCase();

            return guid;
        },
        BeginSession: function(payload){
            "use strict";
            if (this.Active) {
                JSGameAdapt.Events.Track.BeginSession(payload);
                return true;
            } else {
                console.log("ERROR: Adapt is turn off.");
                return false;
            }
        },
        PageView: function (pageName, payload, stepNumber) {
            "use strict";
            if (this.Active) {
                JSGameAdapt.Events.Track.PageView(pageName, stepNumber, payload);
                return true;
            } else {
                console.log("ERROR: Adapt is turn off.");
                return false;
            }
        },
        AdImpression: function(adProvider, adDimensions, ad, payload){
            "use strict";
            if (this.Active) {
                JSGameAdapt.Events.Track.AdImpression(adProvider, adDimensions, ad, payload);
                return true;
            } else {
                console.log("ERROR: Adapt is turn off.");
                return false;
            }
        },
        AdClick: function (adProvider, adDimensions, ad, payload) {
            "use strict";
            if (this.Active) {
                JSGameAdapt.Events.Track.AdClick(adProvider, adDimensions, ad, payload);
                return true;
            } else {
                console.log("ERROR: Adapt is turn off.");
                return false;
            }
        },
        BeginGamePlay: function(gamePlayId, level, isReplay, gameMode, gameSubMode, payload){
            "use strict";
            if (this.Active) {
                JSGameAdapt.Events.Track.BeginGamePlay(gamePlayId, level, isReplay, gameMode, gameSubMode, payload);
                return true;
            } else {
                console.log("ERROR: Adapt is turn off.");
                return false;
            }
        },
        EndGamePlay: function(gamePlayId, level, score, endState, payload){
            "use strict";
            if (this.Active) {
                JSGameAdapt.Events.Track.EndGamePlay(gamePlayId, level, score, endState, payload);
                return true;
            } else {
                console.log("ERROR: Adapt is turn off.");
                return false;
            }
        },
        EndSession: function (payload) {
            "use strict";
            if (this.Active) {
                JSGameAdapt.Events.Track.EndSession(payload);
                return true;
            } else {
                console.log("ERROR: Adapt is turn off.");
                return false;
            }
        },
        Purchase: function (transaction, purchaseItem, priceInfo, location, payload) {
            "use strict";
            if (this.Active) {
                JSGameAdapt.Events.Track.Purchase(transaction, purchaseItem, priceInfo, location, payload);
                return true;
            } else {
                console.log("ERROR: Adapt is turn off.");
                return false;
            }
        },
        PurchaseVirtual: function (transaction, purchaseItem, paymentItem, location, payload) {
            "use strict";
            if (this.Active) {
                JSGameAdapt.Events.Track.PurchaseVirtual(transaction, purchaseItem, paymentItem, location, payload);
                return true;
            } else {
                console.log("ERROR: Adapt is turn off.");
                return false;
            }
        },
        CustomEvent: function (eventName, important, payload) {
            "use strict";
            if (this.Active) {
                JSGameAdapt.Events.Track.CustomEvent(eventName, important, payload);
                return true;
            } else {
                console.log("ERROR: Adapt is turn off.");
                return false;
            }
        }
        //TODO: implement InventoryUpdatePurchase AdRequest AdComplete ???EnvironmentChanged???

    },
    EmptyLogger: Arkadium.Connect.Analytics.SDK.Impl.Logging.EmptyLogger,
    Settings: Arkadium.Connect.Analytics.SDK.Settings,
    Events: Arkadium.Connect.Analytics.SDK.Events,

    Initialize: function (appId, hostId, serverUrl, killSwitch) {
        "use strict";
        if (killSwitch) {
            try {
                var settings = this.Settings.Default;
                var logger = new this.EmptyLogger();
                this.Events.Initialize(appId, hostId, "1.0.0.0", serverUrl, settings, jQuery, logger);
                this.Track.Active = true;
            } catch (e) {
                this.Track.Active = false;
                console.log("ERROR: Adapt can't create Events");
            }
        } else {
            console.log("!!!Warning: Adapt is turn off for this arena!!!");
        }
    },
    StringIsNullOrEmpty: function(s) {
        "use strict";
        return (s === null || s === undefined || s === "");
    }
};