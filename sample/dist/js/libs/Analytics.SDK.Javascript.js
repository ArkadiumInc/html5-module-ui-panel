function G() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}
function Guid() {
    var guid = (G() + G() + "-" + G() + "-" + G() + "-" + G() + "-" + G() + G() + G()).toUpperCase();

    return guid;
}
var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (Tools) {
                var DateTime = (function () {
                    function DateTime() {
                        this._date = new Date();
                    }
                    DateTime.prototype.toString = function () {
                        // 12/3/2014 11:22:22 AM +03:00
                        return this.toDateString(this._date);
                    };

                    DateTime.prototype.format = function (num, count) {
                        var zeroes = [];
                        for (var i = 0; i < count; i++) {
                            zeroes.push(0);
                        }

                        var result = zeroes.join("") + num;
                        return result.substr(result.length - count, count);
                    };

                    DateTime.prototype.toDateString = function (date) {
                        // 12/3/2014 11:22:22 AM +03:00
                        var corrector = ((date.getTime() / 1000) + (-date.getTimezoneOffset() * 60)) * 1000;
                        var correctedDate = new Date(corrector);
                        var offsetSign = date.getTimezoneOffset() < 0 ? "+" : "-";
                        var timezoneHours = Math.round(date.getTimezoneOffset() / 60);
                        var timezoneMinutes = Math.round((date.getTimezoneOffset() / 60 - timezoneHours) / 60);
                        var timezone = offsetSign + this.format(Math.abs(timezoneHours), 2) + ":" + this.format(Math.abs(timezoneMinutes), 2);

                        return (correctedDate.getUTCMonth()+1) + "/" + correctedDate.getUTCDate() + "/" + correctedDate.getUTCFullYear() + " " + this.format(correctedDate.getUTCHours(), 2) + ":" + this.format(correctedDate.getUTCMinutes(), 2) + ":" + this.format(correctedDate.getSeconds(), 2) + " " + timezone;
                    };

                    Object.defineProperty(DateTime, "Now", {
                        get: function () {
                            return new DateTime();
                        },
                        enumerable: true,
                        configurable: true
                    });
                    return DateTime;
                })();
                Tools.DateTime = DateTime;
            })(Analytics.Tools || (Analytics.Tools = {}));
            var Tools = Analytics.Tools;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (Model) {
                /// <summary>
                /// Represents the application which submits data to the ingress service.
                /// </summary>
                var Application = (function () {
                    function Application() {
                    }
                    return Application;
                })();
                Model.Application = Application;
            })(Analytics.Model || (Analytics.Model = {}));
            var Model = Analytics.Model;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (Model) {
                (function (AudioState) {
                    AudioState[AudioState["Undefined"] = 0] = "Undefined";
                    AudioState[AudioState["Off"] = 1] = "Off";
                    AudioState[AudioState["On"] = 2] = "On";
                    AudioState[AudioState["OnCustom"] = 3] = "OnCustom";
                })(Model.AudioState || (Model.AudioState = {}));
                var AudioState = Model.AudioState;
            })(Analytics.Model || (Analytics.Model = {}));
            var Model = Analytics.Model;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (Model) {
                (function (DifficultyLevel) {
                    DifficultyLevel[DifficultyLevel["Undefined"] = 0] = "Undefined";
                    DifficultyLevel[DifficultyLevel["Easiest"] = 1] = "Easiest";
                    DifficultyLevel[DifficultyLevel["Easier"] = 2] = "Easier";
                    DifficultyLevel[DifficultyLevel["Normal"] = 3] = "Normal";
                    DifficultyLevel[DifficultyLevel["Harder"] = 4] = "Harder";
                    DifficultyLevel[DifficultyLevel["Hardest"] = 5] = "Hardest";
                })(Model.DifficultyLevel || (Model.DifficultyLevel = {}));
                var DifficultyLevel = Model.DifficultyLevel;
            })(Analytics.Model || (Analytics.Model = {}));
            var Model = Analytics.Model;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (Model) {
                /// <summary>
                /// The end state of the game.
                /// </summary>
                (function (EndState) {
                    /// <summary>
                    /// Undefined state.
                    /// </summary>
                    EndState[EndState["Undefined"] = 0] = "Undefined";

                    /// <summary>
                    /// The game play was not completed, the user just quitted.
                    /// </summary>
                    EndState[EndState["Quit"] = 1] = "Quit";

                    /// <summary>
                    /// The user won the game.
                    /// </summary>
                    EndState[EndState["Succeeded"] = 2] = "Succeeded";

                    /// <summary>
                    /// The user failed the game.
                    /// </summary>
                    EndState[EndState["Failed"] = 3] = "Failed";

                    /// <summary>
                    /// The user did not complete the game and replayed it
                    /// </summary>
                    EndState[EndState["Replay"] = 4] = "Replay";
                })(Model.EndState || (Model.EndState = {}));
                var EndState = Model.EndState;
            })(Analytics.Model || (Analytics.Model = {}));
            var Model = Analytics.Model;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (Model) {
                /// <summary>
                /// Event which is being processed with analytics system.
                /// </summary>
                var EventMessage = (function () {
                    function EventMessage() {
                    }
                    return EventMessage;
                })();
                Model.EventMessage = EventMessage;
            })(Analytics.Model || (Analytics.Model = {}));
            var Model = Analytics.Model;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (Model) {
                /// <summary>
                /// Container which is used to send many messages as a single one.
                /// </summary>
                var EventMessageBatch = (function () {
                    function EventMessageBatch() {
                    }
                    return EventMessageBatch;
                })();
                Model.EventMessageBatch = EventMessageBatch;
            })(Analytics.Model || (Analytics.Model = {}));
            var Model = Analytics.Model;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (Model) {
                /// <summary>
                /// The gender of the user.
                /// </summary>
                (function (Gender) {
                    /// <summary>
                    /// User is male.
                    /// </summary>
                    Gender[Gender["Male"] = 0] = "Male";

                    /// <summary>
                    /// User is female.
                    /// </summary>
                    Gender[Gender["Female"] = 1] = "Female";

                    /// <summary>
                    /// Could not detect the gender of the user.
                    /// </summary>
                    Gender[Gender["Undefined"] = 2] = "Undefined";
                })(Model.Gender || (Model.Gender = {}));
                var Gender = Model.Gender;
            })(Analytics.Model || (Analytics.Model = {}));
            var Model = Analytics.Model;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (Model) {
                /// <summary>
                /// The details about the place where application is being hosted.
                /// </summary>
                var Host = (function () {
                    function Host() {
                    }
                    return Host;
                })();
                Model.Host = Host;
            })(Analytics.Model || (Analytics.Model = {}));
            var Model = Analytics.Model;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (Model) {
                /// <summary>
                /// The flags of available input abilities.
                /// </summary>
                (function (InputState) {
                    /// <summary>
                    /// Could not detect any input abilities.
                    /// </summary>
                    InputState[InputState["Undefined"] = 0] = "Undefined";

                    /// <summary>
                    /// Is being used or system has a mouse controller.
                    /// </summary>
                    InputState[InputState["Mouse"] = 1] = "Mouse";

                    /// <summary>
                    /// Is being used or system has a touch controller.
                    /// </summary>
                    InputState[InputState["Touch"] = 2] = "Touch";

                    /// <summary>
                    /// Is beting used or system has a keyboard controller.
                    /// </summary>
                    InputState[InputState["Keyboard"] = 4] = "Keyboard";
                })(Model.InputState || (Model.InputState = {}));
                var InputState = Model.InputState;
            })(Analytics.Model || (Analytics.Model = {}));
            var Model = Analytics.Model;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (Model) {
                (function (PaymentType) {
                    PaymentType[PaymentType["FacebookCredits"] = 0] = "FacebookCredits";
                    PaymentType[PaymentType["SocialGold"] = 1] = "SocialGold";
                    PaymentType[PaymentType["UltimatePay"] = 2] = "UltimatePay";
                    PaymentType[PaymentType["SuperRewards"] = 3] = "SuperRewards";
                    PaymentType[PaymentType["Cash"] = 4] = "Cash";
                    PaymentType[PaymentType["Undefined"] = 5] = "Undefined";
                })(Model.PaymentType || (Model.PaymentType = {}));
                var PaymentType = Model.PaymentType;
            })(Analytics.Model || (Analytics.Model = {}));
            var Model = Analytics.Model;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (Model) {
                /// <summary>
                /// Represents the detected screen orientation.
                /// </summary>
                (function (ScreenOrientation) {
                    /// <summary>
                    /// Screen orientation is not detected.
                    /// </summary>
                    ScreenOrientation[ScreenOrientation["None"] = 0] = "None";

                    /// <summary>
                    /// Landscape orientation is detected.
                    /// </summary>
                    ScreenOrientation[ScreenOrientation["Landscape"] = 1] = "Landscape";

                    /// <summary>
                    /// Portrait orientation is detected.
                    /// </summary>
                    ScreenOrientation[ScreenOrientation["Portrait"] = 2] = "Portrait";

                    /// <summary>
                    /// LandscapeFlipped orientation is detected.
                    /// </summary>
                    ScreenOrientation[ScreenOrientation["LandscapeFlipped"] = 3] = "LandscapeFlipped";

                    /// <summary>
                    /// PortraitFlipped orientation is detected.
                    /// </summary>
                    ScreenOrientation[ScreenOrientation["PortraitFlipped"] = 4] = "PortraitFlipped";
                })(Model.ScreenOrientation || (Model.ScreenOrientation = {}));
                var ScreenOrientation = Model.ScreenOrientation;
            })(Analytics.Model || (Analytics.Model = {}));
            var Model = Analytics.Model;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (Model) {
                /// <summary>
                /// Represents the result of payment transaction.
                /// </summary>
                (function (TransactionResult) {
                    /// <summary>
                    /// Transaction was completed successfully.
                    /// </summary>
                    TransactionResult[TransactionResult["Success"] = 1] = "Success";

                    /// <summary>
                    /// Transaction was canceled.
                    /// </summary>
                    TransactionResult[TransactionResult["Cancel"] = 2] = "Cancel";

                    /// <summary>
                    /// Transaction failed by technical reasons.
                    /// </summary>
                    TransactionResult[TransactionResult["FailTechnical"] = 3] = "FailTechnical";

                    /// <summary>
                    /// Transaction failed because of insufficient balance or something like that.
                    /// </summary>
                    TransactionResult[TransactionResult["FailPayment"] = 4] = "FailPayment";
                })(Model.TransactionResult || (Model.TransactionResult = {}));
                var TransactionResult = Model.TransactionResult;
            })(Analytics.Model || (Analytics.Model = {}));
            var Model = Analytics.Model;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (Model) {
                /// <summary>
                /// Expected viral types.
                /// </summary>
                (function (ViralType) {
                    /// <summary>
                    /// Invite to another user.
                    /// </summary>
                    ViralType[ViralType["Invite"] = 1] = "Invite";

                    /// <summary>
                    /// Gift to another user.
                    /// </summary>
                    ViralType[ViralType["Gift"] = 2] = "Gift";

                    /// <summary>
                    /// Asking to an User to send me a Gift.
                    /// </summary>
                    ViralType[ViralType["AskGift"] = 3] = "AskGift";

                    /// <summary>
                    /// Post on the wall.
                    /// </summary>
                    ViralType[ViralType["Post"] = 4] = "Post";

                    /// <summary>
                    /// Sending a message to an User.
                    /// </summary>
                    ViralType[ViralType["Message"] = 5] = "Message";

                    /// <summary>
                    /// Requesting something
                    /// </summary>
                    ViralType[ViralType["Request"] = 6] = "Request";

                    /// <summary>
                    /// Increasing count of something.
                    /// </summary>
                    ViralType[ViralType["Count"] = 7] = "Count";

                    /// <summary>
                    /// Sending news about new user experiance or something like that.
                    /// </summary>
                    ViralType[ViralType["News"] = 8] = "News";

                    /// <summary>
                    /// Sending an event to the site ticker.
                    /// </summary>
                    ViralType[ViralType["Ticker"] = 9] = "Ticker";
                })(Model.ViralType || (Model.ViralType = {}));
                var ViralType = Model.ViralType;
            })(Analytics.Model || (Analytics.Model = {}));
            var Model = Analytics.Model;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (Model) {
                /// <summary>
                /// The detected state of the window.
                /// </summary>
                (function (WindowState) {
                    /// <summary>
                    /// The game is used FullScreenLandscape mode.
                    /// </summary>
                    WindowState[WindowState["FullScreenLandscape"] = 0] = "FullScreenLandscape";

                    /// <summary>
                    /// The game is used FullScreenPortrait mode.
                    /// </summary>
                    WindowState[WindowState["FullScreenPortrait"] = 1] = "FullScreenPortrait";

                    /// <summary>
                    /// The game is used Filled mode.
                    /// </summary>
                    WindowState[WindowState["Filled"] = 2] = "Filled";

                    /// <summary>
                    /// The game is used Snapped View mode.
                    /// </summary>
                    WindowState[WindowState["Snapped"] = 3] = "Snapped";

                    /// <summary>
                    /// The game is being displayed in the window.
                    /// </summary>
                    WindowState[WindowState["Window"] = 4] = "Window";

                    /// <summary>
                    /// Could not detect the representation state.
                    /// </summary>
                    WindowState[WindowState["Undefined"] = 5] = "Undefined";
                })(Model.WindowState || (Model.WindowState = {}));
                var WindowState = Model.WindowState;
            })(Analytics.Model || (Analytics.Model = {}));
            var Model = Analytics.Model;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (SDK) {
                (function (Core) {
                    (function (Api) {
                        /**
                        * Represents an interval of time in various units. Use the static factory methods as
                        * shortcut to create time spans from different unit-types.
                        */
                        var TimeSpan = (function () {
                            function TimeSpan(milliseconds) {
                                this._totalMilliseconds = Math.floor(milliseconds);
                            }
                            Object.defineProperty(TimeSpan.prototype, "days", {
                                get: function () {
                                    return Math.floor(this._totalMilliseconds / TimeSpan.MILLISECONDS_IN_DAY);
                                },
                                enumerable: true,
                                configurable: true
                            });

                            Object.defineProperty(TimeSpan.prototype, "hours", {
                                /**
                                * Gets the number of whole hours (excluding entire days)
                                *
                                * @example In a TimeSpan created from TimeSpan.fromMinutes(1500),
                                *                      totalHours will be 25, but hours will be 1
                                * @return A number representing the number of whole hours in the TimeSpan
                                */
                                get: function () {
                                    return Math.floor((this._totalMilliseconds / TimeSpan.MILLISECONDS_IN_HOUR) % 24);
                                },
                                enumerable: true,
                                configurable: true
                            });

                            Object.defineProperty(TimeSpan.prototype, "minutes", {
                                /**
                                * Gets the number of whole minutes (excluding entire hours)
                                *
                                * @example In a TimeSpan created from TimeSpan.fromMilliseconds(65500),
                                *                      totalSeconds will be 65.5, but seconds will be 5
                                * @return A number representing the number of whole minutes in the TimeSpan
                                */
                                get: function () {
                                    return Math.floor((this._totalMilliseconds / TimeSpan.MILLISECONDS_IN_MINUTE) % 60);
                                },
                                enumerable: true,
                                configurable: true
                            });

                            Object.defineProperty(TimeSpan.prototype, "seconds", {
                                /**
                                * Gets the number of whole seconds (excluding entire minutes)
                                *
                                * @example In a TimeSpan created from TimeSpan.fromMilliseconds(65500),
                                *                      totalSeconds will be 65.5, but seconds will be 5
                                * @return A number representing the number of whole seconds in the TimeSpan
                                */
                                get: function () {
                                    return Math.floor((this._totalMilliseconds / TimeSpan.MILLISECONDS_IN_SECOND) % 60);
                                },
                                enumerable: true,
                                configurable: true
                            });

                            Object.defineProperty(TimeSpan.prototype, "milliseconds", {
                                /**
                                * Gets the number of whole milliseconds (excluding entire seconds)
                                *
                                * @example In a TimeSpan created from TimeSpan.fromMilliseconds(2123),
                                *                      totalMilliseconds will be 2001, but milliseconds will be 123
                                * @return A number representing the number of whole milliseconds in the TimeSpan
                                */
                                get: function () {
                                    return Math.floor((this._totalMilliseconds) % 1000);
                                },
                                enumerable: true,
                                configurable: true
                            });

                            Object.defineProperty(TimeSpan.prototype, "totalDays", {
                                /**
                                * Gets the total number of days.
                                *
                                * @example In a TimeSpan created from TimeSpan.fromHours(25),
                                *                      totalHours will be 1.04, but hours will be 1
                                * @return A number representing the total number of days in the TimeSpan
                                */
                                get: function () {
                                    return this._totalMilliseconds / TimeSpan.MILLISECONDS_IN_DAY;
                                },
                                enumerable: true,
                                configurable: true
                            });

                            Object.defineProperty(TimeSpan.prototype, "totalHours", {
                                /**
                                * Gets the total number of hours.
                                *
                                * @example In a TimeSpan created from TimeSpan.fromMinutes(1500),
                                *                      totalHours will be 25, but hours will be 1
                                * @return A number representing the total number of hours in the TimeSpan
                                */
                                get: function () {
                                    return this._totalMilliseconds / TimeSpan.MILLISECONDS_IN_HOUR;
                                },
                                enumerable: true,
                                configurable: true
                            });

                            Object.defineProperty(TimeSpan.prototype, "totalMinutes", {
                                /**
                                * Gets the total number of minutes.
                                *
                                * @example In a TimeSpan created from TimeSpan.fromMilliseconds(65500),
                                *                      totalSeconds will be 65.5, but seconds will be 5
                                * @return A number representing the total number of minutes in the TimeSpan
                                */
                                get: function () {
                                    return this._totalMilliseconds / TimeSpan.MILLISECONDS_IN_MINUTE;
                                },
                                enumerable: true,
                                configurable: true
                            });

                            Object.defineProperty(TimeSpan.prototype, "totalSeconds", {
                                /**
                                * Gets the total number of seconds.
                                *
                                * @example In a TimeSpan created from TimeSpan.fromMilliseconds(65500),
                                *                      totalSeconds will be 65.5, but seconds will be 5
                                * @return A number representing the total number of seconds in the TimeSpan
                                */
                                get: function () {
                                    return this._totalMilliseconds / TimeSpan.MILLISECONDS_IN_SECOND;
                                },
                                enumerable: true,
                                configurable: true
                            });

                            Object.defineProperty(TimeSpan.prototype, "totalMilliseconds", {
                                /**
                                * Gets the total number of milliseconds.
                                *
                                * @example In a TimeSpan created from TimeSpan.fromMilliseconds(2123),
                                *                      totalMilliseconds will be 2001, but milliseconds will be 123
                                * @return A number representing the total number of milliseconds in the TimeSpan
                                */
                                get: function () {
                                    return this._totalMilliseconds;
                                },
                                enumerable: true,
                                configurable: true
                            });

                            /**
                            * Factory method for creating a TimeSpan from the difference between two dates
                            *
                            * Note that start can be after end, but it will result in negative values.
                            *
                            * @param start The start date of the timespan
                            * @param end The end date of the timespan
                            * @return A TimeSpan that represents the difference between the dates
                            *
                            */
                            TimeSpan.createFromDates = function (start, end) {
                                return new TimeSpan(end.getTime() - start.getTime());
                            };

                            /**
                            * Factory method for creating a TimeSpan from the specified number of milliseconds
                            * @param milliseconds The number of milliseconds in the timespan
                            * @return A TimeSpan that represents the specified value
                            */
                            TimeSpan.createFromMilliseconds = function (milliseconds) {
                                return new TimeSpan(milliseconds);
                            };

                            /**
                            * Factory method for creating a TimeSpan from the specified number of seconds
                            * @param seconds The number of seconds in the timespan
                            * @return A TimeSpan that represents the specified value
                            */
                            TimeSpan.createFromSeconds = function (seconds) {
                                return new TimeSpan(seconds * TimeSpan.MILLISECONDS_IN_SECOND);
                            };

                            /**
                            * Factory method for creating a TimeSpan from the specified number of minutes
                            * @param minutes The number of minutes in the timespan
                            * @return A TimeSpan that represents the specified value
                            */
                            TimeSpan.createFromMinutes = function (minutes) {
                                return new TimeSpan(minutes * TimeSpan.MILLISECONDS_IN_MINUTE);
                            };

                            /**
                            * Factory method for creating a TimeSpan from the specified number of hours
                            * @param hours The number of hours in the timespan
                            * @return A TimeSpan that represents the specified value
                            */
                            TimeSpan.createFromHours = function (hours) {
                                return new TimeSpan(hours * TimeSpan.MILLISECONDS_IN_HOUR);
                            };

                            /**
                            * Factory method for creating a TimeSpan from the specified number of days
                            * @param days The number of days in the timespan
                            * @return A TimeSpan that represents the specified value
                            */
                            TimeSpan.createFromDays = function (days) {
                                return new TimeSpan(days * TimeSpan.MILLISECONDS_IN_DAY);
                            };
                            TimeSpan.MILLISECONDS_IN_DAY = 86400000;
                            TimeSpan.MILLISECONDS_IN_HOUR = 3600000;
                            TimeSpan.MILLISECONDS_IN_MINUTE = 60000;
                            TimeSpan.MILLISECONDS_IN_SECOND = 1000;
                            return TimeSpan;
                        })();
                        Api.TimeSpan = TimeSpan;
                    })(Core.Api || (Core.Api = {}));
                    var Api = Core.Api;
                })(SDK.Core || (SDK.Core = {}));
                var Core = SDK.Core;
            })(Analytics.SDK || (Analytics.SDK = {}));
            var SDK = Analytics.SDK;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (SDK) {
                var GamePlayContext = (function () {
                    function GamePlayContext(gamePlayId, gameMode, gameSubMode) {
                        if (typeof gameMode === "undefined") { gameMode = null; }
                        if (typeof gameSubMode === "undefined") { gameSubMode = null; }
                        this.Stats = new Object();

                        this.GamePlayId = gamePlayId;
                        this.GameMode = gameMode;
                        this.GameSubMode = gameSubMode;
                    }
                    GamePlayContext.prototype.Clone = function () {
                        var context = new GamePlayContext(this.GamePlayId, this.GameMode, this.GameSubMode);

                        context.Stats = new Object();
                        for (var key in this.Stats) {
                            context.Stats[key] = this.Stats[key];
                        }

                        return context;
                    };
                    return GamePlayContext;
                })();
                SDK.GamePlayContext = GamePlayContext;
            })(Analytics.SDK || (Analytics.SDK = {}));
            var SDK = Analytics.SDK;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (SDK) {
                (function (Core) {
                    (function (Api) {
                        /// <summary>
                        /// The status of async operation.
                        /// </summary>
                        (function (AsyncStatus) {
                            /// <summary>
                            /// Action was started.
                            /// </summary>
                            AsyncStatus[AsyncStatus["Started"] = 0] = "Started";

                            /// <summary>
                            /// Action was completed successfully.
                            /// </summary>
                            AsyncStatus[AsyncStatus["Completed"] = 1] = "Completed";

                            /// <summary>
                            /// Action was started but canceled.
                            /// </summary>
                            AsyncStatus[AsyncStatus["Canceled"] = 2] = "Canceled";

                            /// <summary>
                            /// Action was finished with error.
                            /// </summary>
                            AsyncStatus[AsyncStatus["Error"] = 3] = "Error";
                        })(Api.AsyncStatus || (Api.AsyncStatus = {}));
                        var AsyncStatus = Api.AsyncStatus;
                    })(Core.Api || (Core.Api = {}));
                    var Api = Core.Api;
                })(SDK.Core || (SDK.Core = {}));
                var Core = SDK.Core;
            })(Analytics.SDK || (Analytics.SDK = {}));
            var SDK = Analytics.SDK;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (SDK) {
                (function (Core) {
                    (function (Api) {
                        /// <summary>
                        /// Information about item of PersistentStorage.
                        /// </summary>
                        var FileInfo = (function () {
                            /// <summary>
                            /// Creates an empty file descriptor.
                            /// </summary>
                            function FileInfo() {
                            }
                            return FileInfo;
                        })();
                        Api.FileInfo = FileInfo;
                    })(Core.Api || (Core.Api = {}));
                    var Api = Core.Api;
                })(SDK.Core || (SDK.Core = {}));
                var Core = SDK.Core;
            })(Analytics.SDK || (Analytics.SDK = {}));
            var SDK = Analytics.SDK;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (_SDK) {
                (function (Core) {
                    (function (Api) {
                        
                    })(Core.Api || (Core.Api = {}));
                    var Api = Core.Api;
                })(_SDK.Core || (_SDK.Core = {}));
                var Core = _SDK.Core;
            })(Analytics.SDK || (Analytics.SDK = {}));
            var SDK = Analytics.SDK;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (SDK) {
                (function (Core) {
                    (function (Api) {
                        var SendResult = (function () {
                            function SendResult() {
                            }
                            return SendResult;
                        })();
                        Api.SendResult = SendResult;

                        
                    })(Core.Api || (Core.Api = {}));
                    var Api = Core.Api;
                })(SDK.Core || (SDK.Core = {}));
                var Core = SDK.Core;
            })(Analytics.SDK || (Analytics.SDK = {}));
            var SDK = Analytics.SDK;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (SDK) {
                (function (Core) {
                    (function (Api) {
                        
                    })(Core.Api || (Core.Api = {}));
                    var Api = Core.Api;
                })(SDK.Core || (SDK.Core = {}));
                var Core = SDK.Core;
            })(Analytics.SDK || (Analytics.SDK = {}));
            var SDK = Analytics.SDK;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (SDK) {
                (function (Core) {
                    (function (Api) {
                        /// <summary>
                        /// Settings of level filtering.
                        /// </summary>
                        /// <remarks>
                        /// Every logger implementation should implement filtering. Otherwice such logger will write all events of SDK. <br/>
                        /// </remarks>
                        (function (LogLevel) {
                            /// <summary>
                            /// Enables only debug logging.
                            /// </summary>
                            LogLevel[LogLevel["Debug"] = 1] = "Debug";

                            /// <summary>
                            /// Enables only infos logging.
                            /// </summary>
                            LogLevel[LogLevel["Info"] = 2] = "Info";

                            /// <summary>
                            /// Enables only warnings logging.
                            /// </summary>
                            LogLevel[LogLevel["Warning"] = 4] = "Warning";

                            /// <summary>
                            /// Enables only errors logging.
                            /// </summary>
                            LogLevel[LogLevel["Error"] = 8] = "Error";
                        })(Api.LogLevel || (Api.LogLevel = {}));
                        var LogLevel = Api.LogLevel;
                    })(Core.Api || (Core.Api = {}));
                    var Api = Core.Api;
                })(SDK.Core || (SDK.Core = {}));
                var Core = SDK.Core;
            })(Analytics.SDK || (Analytics.SDK = {}));
            var SDK = Analytics.SDK;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (SDK) {
                (function (Impl) {
                    (function (Exceptions) {
                        var AnalyticsException = (function () {
                            function AnalyticsException(message, name) {
                                this.message = message;
                                this.name = name;
                            }
                            return AnalyticsException;
                        })();
                        Exceptions.AnalyticsException = AnalyticsException;
                    })(Impl.Exceptions || (Impl.Exceptions = {}));
                    var Exceptions = Impl.Exceptions;
                })(SDK.Impl || (SDK.Impl = {}));
                var Impl = SDK.Impl;
            })(Analytics.SDK || (Analytics.SDK = {}));
            var SDK = Analytics.SDK;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (SDK) {
                (function (Impl) {
                    (function (Exceptions) {
                        var EventCorruptedException = (function (_super) {
                            __extends(EventCorruptedException, _super);
                            function EventCorruptedException(message, index) {
                                this._index = index;
                                _super.call(this, message, "EventCorruptedException");
                            }
                            Object.defineProperty(EventCorruptedException.prototype, "Index", {
                                get: function () {
                                    return this._index;
                                },
                                enumerable: true,
                                configurable: true
                            });
                            return EventCorruptedException;
                        })(Exceptions.AnalyticsException);
                        Exceptions.EventCorruptedException = EventCorruptedException;
                    })(Impl.Exceptions || (Impl.Exceptions = {}));
                    var Exceptions = Impl.Exceptions;
                })(SDK.Impl || (SDK.Impl = {}));
                var Impl = SDK.Impl;
            })(Analytics.SDK || (Analytics.SDK = {}));
            var SDK = Analytics.SDK;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (SDK) {
                (function (Impl) {
                    (function (Exceptions) {
                        /// <summary>
                        /// Raised when IEventSender can't connect server to send events.
                        /// </summary>
                        var ServerConnectionException = (function (_super) {
                            __extends(ServerConnectionException, _super);
                            function ServerConnectionException() {
                                _super.call(this, "Can't send event(s) to the target server. Check your internet connection.", "ServerConnectionException");
                            }
                            return ServerConnectionException;
                        })(Exceptions.AnalyticsException);
                        Exceptions.ServerConnectionException = ServerConnectionException;
                    })(Impl.Exceptions || (Impl.Exceptions = {}));
                    var Exceptions = Impl.Exceptions;
                })(SDK.Impl || (SDK.Impl = {}));
                var Impl = SDK.Impl;
            })(Analytics.SDK || (Analytics.SDK = {}));
            var SDK = Analytics.SDK;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (SDK) {
                (function (Impl) {
                    (function (Exceptions) {
                        var ServerProcessingException = (function (_super) {
                            __extends(ServerProcessingException, _super);
                            function ServerProcessingException() {
                                _super.call(this, "Message can not be processed on the server.", "ServerProcessingException");
                            }
                            return ServerProcessingException;
                        })(Exceptions.AnalyticsException);
                        Exceptions.ServerProcessingException = ServerProcessingException;
                    })(Impl.Exceptions || (Impl.Exceptions = {}));
                    var Exceptions = Impl.Exceptions;
                })(SDK.Impl || (SDK.Impl = {}));
                var Impl = SDK.Impl;
            })(Analytics.SDK || (Analytics.SDK = {}));
            var SDK = Analytics.SDK;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (SDK) {
                (function (Impl) {
                    (function (Exceptions) {
                        var FileNotFoundException = (function (_super) {
                            __extends(FileNotFoundException, _super);
                            function FileNotFoundException(fileName) {
                                _super.call(this, "File: " + fileName + " could not be found.", "FileNotFoundException");
                            }
                            return FileNotFoundException;
                        })(Exceptions.AnalyticsException);
                        Exceptions.FileNotFoundException = FileNotFoundException;
                    })(Impl.Exceptions || (Impl.Exceptions = {}));
                    var Exceptions = Impl.Exceptions;
                })(SDK.Impl || (SDK.Impl = {}));
                var Impl = SDK.Impl;
            })(Analytics.SDK || (Analytics.SDK = {}));
            var SDK = Analytics.SDK;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (SDK) {
                (function (Impl) {
                    (function (Logging) {
                        /// <summary>
                        /// Writes nothing. It is being used as default logger in case when any other loggers was not specified.
                        /// </summary>
                        var EmptyLogger = (function () {
                            function EmptyLogger() {
                            }
                            /// <summary>
                            /// Writes a message in debug mode.
                            /// </summary>
                            /// <param name="message">The message to be written.</param>
                            EmptyLogger.prototype.Debug = function (message) {
                            };

                            /// <summary>
                            /// Writes a message in info mode.
                            /// </summary>
                            /// <param name="message">The message to be written.</param>
                            EmptyLogger.prototype.Info = function (message) {
                            };

                            /// <summary>
                            /// Writes a message in info mode.
                            /// </summary>
                            /// <param name="message">The message to be written.</param>
                            EmptyLogger.prototype.Warning = function (message) {
                            };

                            /// <summary>
                            /// Writes a message in error mode.
                            /// </summary>
                            /// <param name="message">The message to be written.</param>
                            EmptyLogger.prototype.Error = function (message) {
                            };
                            return EmptyLogger;
                        })();
                        Logging.EmptyLogger = EmptyLogger;
                    })(Impl.Logging || (Impl.Logging = {}));
                    var Logging = Impl.Logging;
                })(SDK.Impl || (SDK.Impl = {}));
                var Impl = SDK.Impl;
            })(Analytics.SDK || (Analytics.SDK = {}));
            var SDK = Analytics.SDK;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (SDK) {
                (function (Impl) {
                    (function (Logging) {
                        /// <summary>
                        /// This component is a proxy for IEventSender.
                        /// After each correct event sending it appends all serialized message as a line to a specified trace file.
                        /// </summary>
                        var DebugEventLogger = (function () {
                            //        private _encoding: Encoding;
                            //        private readonly Formatting _formatting = Formatting.Indented;
                            function DebugEventLogger(fileSystem, fileName, eventSender, applyFormating) {
                                this._eventSender = eventSender;

                                //            this._encoding = encoding ?? Encoding.UTF8;
                                this._fileSystem = fileSystem;
                                this._fileName = fileName;
                                //            this._formatting = applyFormating ? Formatting.Indented : Formatting.None;
                            }
                            /// <summary>
                            /// Sends a single message and appends it to the specified file as a new line.
                            /// </summary>
                            /// <param name="message">Event message to send and log.</param>
                            DebugEventLogger.prototype.Send = function (message, callback) {
                                this._eventSender.Send(message, callback);

                                this.SaveMessage(message);
                            };

                            /// <summary>
                            /// Sends a single message and appends it to the specified file as a new line.
                            /// </summary>
                            /// <param name="eventMessageBatch">Batch to send and log. Every batch message is being logged separatelly as a new line of the file.</param>
                            DebugEventLogger.prototype.SendBatch = function (eventMessageBatch, callback) {
                                this._eventSender.SendBatch(eventMessageBatch, callback);
                                for (var i = 0; i < eventMessageBatch.EventMessages.length; i++) {
                                    var eventMessage = eventMessageBatch.EventMessages[i];
                                    this.SaveMessage(eventMessage);
                                }
                            };

                            /// <summary>
                            /// Just a proxy to the method IsAvailable of specified eventSender.
                            /// </summary>
                            /// <returns></returns>
                            DebugEventLogger.prototype.IsAvailable = function (callback) {
                                this._eventSender.IsAvailable(callback);
                            };

                            DebugEventLogger.prototype.SaveMessage = function (message) {
                                var serializedMessage = JSON.stringify(message);
                                serializedMessage += "\n";

                                this._fileSystem.Save(this._fileName, serializedMessage);
                            };
                            return DebugEventLogger;
                        })();
                        Logging.DebugEventLogger = DebugEventLogger;
                    })(Impl.Logging || (Impl.Logging = {}));
                    var Logging = Impl.Logging;
                })(SDK.Impl || (SDK.Impl = {}));
                var Impl = SDK.Impl;
            })(Analytics.SDK || (Analytics.SDK = {}));
            var SDK = Analytics.SDK;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (SDK) {
                (function (Impl) {
                    (function (Background) {
                        var AsyncStatus = Arkadium.Connect.Analytics.SDK.Core.Api.AsyncStatus;
                        var EmptyLogger = Arkadium.Connect.Analytics.SDK.Impl.Logging.EmptyLogger;

                        /// <summary>
                        /// The action of Dispatcher.
                        /// </summary>
                        var BackgroundAction = (function () {
                            /// <summary>
                            /// Instantiates a handle on to dispatcher action.
                            /// </summary>
                            /// <param name="action">Action to be executed.</param>
                            /// <param name="logger">Instance of a logger. Will use Empty logger if null.</param>
                            function BackgroundAction(action, logger) {
                                this._lockObject = new Object();
                                this._status = 0 /* Started */;
                                this._action = action;
                                this._logger = logger != null ? logger : new EmptyLogger();
                            }
                            /// <summary>
                            /// Runs an action and sets statuses.
                            /// </summary>
                            BackgroundAction.prototype.Run = function () {
                                try  {
                                    this._status = 0 /* Started */;
                                    this._action();
                                    this._status = 1 /* Completed */;
                                } catch (exception) {
                                    this._errorCode = exception;
                                    this._status = 3 /* Error */;
                                } finally {
                                    this.CallCompleted();
                                }
                            };

                            BackgroundAction.prototype.CallCompleted = function () {
                                try  {
                                    if (this._completed != null) {
                                        this._completed(this, this._status);
                                        this._completed = null;
                                    }
                                } catch (exception) {
                                    this._logger.Error("BackgroundAction Completed callback raised an error: " + exception);
                                }
                            };

                            /// <summary>
                            /// Cancels the operation.
                            /// </summary>
                            /// <remarks>
                            /// <b>NOTE:</b> Cancel action prevents action to be ran, but this action does not stop action which is run.
                            /// </remarks>
                            BackgroundAction.prototype.Cancel = function () {
                                this._status = 2 /* Canceled */;
                                this.CallCompleted();
                            };

                            /// <summary>
                            /// Does nothing in this implementation.
                            /// </summary>
                            BackgroundAction.prototype.Close = function () {
                                // do nothing
                            };

                            Object.defineProperty(BackgroundAction.prototype, "ErrorCode", {
                                /// <summary>
                                /// The error of execution of action. Will equal to null when success.
                                /// </summary>
                                get: function () {
                                    return this._errorCode;
                                },
                                enumerable: true,
                                configurable: true
                            });

                            Object.defineProperty(BackgroundAction.prototype, "Status", {
                                /// <summary>
                                /// The status of current operation.
                                /// </summary>
                                get: function () {
                                    return this._status;
                                },
                                enumerable: true,
                                configurable: true
                            });

                            Object.defineProperty(BackgroundAction.prototype, "Completed", {
                                /// <summary>
                                /// Completion event.
                                /// </summary>
                                /// <remarks>
                                /// This event will be fired even if the status is completed. Event will be fired only once for each subscriber.
                                /// </remarks>
                                get: function () {
                                    return this._completed;
                                },
                                set: function (value) {
                                    this._completed = value;
                                    if (this._status != 0 /* Started */) {
                                        this.CallCompleted();
                                    }
                                },
                                enumerable: true,
                                configurable: true
                            });

                            return BackgroundAction;
                        })();
                        Background.BackgroundAction = BackgroundAction;
                    })(Impl.Background || (Impl.Background = {}));
                    var Background = Impl.Background;
                })(SDK.Impl || (SDK.Impl = {}));
                var Impl = SDK.Impl;
            })(Analytics.SDK || (Analytics.SDK = {}));
            var SDK = Analytics.SDK;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (SDK) {
                (function (Impl) {
                    (function (Background) {
                        var TimeSpan = Arkadium.Connect.Analytics.SDK.Core.Api.TimeSpan;

                        var AsyncStatus = Arkadium.Connect.Analytics.SDK.Core.Api.AsyncStatus;
                        var EmptyLogger = Arkadium.Connect.Analytics.SDK.Impl.Logging.EmptyLogger;

                        // TODO: try use timer instead of setTimeout task.
                        /// <summary>
                        /// This component is a Dispatcher which runs actions in a different thread.
                        /// </summary>
                        var BackgroundWorker = (function () {
                            /// <summary>
                            /// Creates an instance of BackgroundWorker
                            /// </summary>
                            /// <param name="isDebugMode">if true - runs all actions synchronously.</param>
                            /// <param name="logger">A logger to report errors</param>
                            function BackgroundWorker(isDebugMode, logger) {
                                var _this = this;
                                this._waitDelay = TimeSpan.createFromMilliseconds(10);
                                this._actions = new Array();
                                this._isDebugMode = isDebugMode;
                                this._logger = (logger != null) ? logger : new EmptyLogger();

                                if (!this._isDebugMode) {
                                    var me = this;
                                    setTimeout(function () {
                                        return _this.RunProcess.call(me);
                                    }, this._waitDelay);
                                }
                            }
                            Object.defineProperty(BackgroundWorker.prototype, "IsDebugMode", {
                                /// <summary>
                                /// Represents whether dispatcher works in debug mode or not.
                                /// </summary>
                                get: function () {
                                    return this._isDebugMode;
                                },
                                set: function (value) {
                                    this._isDebugMode = value;
                                },
                                enumerable: true,
                                configurable: true
                            });


                            BackgroundWorker.prototype.RunProcess = function () {
                                var _this = this;
                                try  {
                                    if (this._actions.length == 0) {
                                        return;
                                    }

                                    var action = this.GetAction();
                                    this.Run(action);
                                } catch (exception) {
                                    this._logger.Error("BackgroundWorker.RunProcess error: " + exception);
                                } finally {
                                    var me = this;
                                    setTimeout(function () {
                                        return _this.RunProcess.call(me);
                                    }, this._waitDelay);
                                }
                            };

                            BackgroundWorker.prototype.Run = function (action) {
                                if (action == null || action.Status == 2 /* Canceled */) {
                                    return;
                                }

                                action.Run();
                            };

                            BackgroundWorker.prototype.GetAction = function () {
                                var action = this._actions.shift();
                                return action;
                            };

                            /// <summary>
                            /// Adds an action to a worker queue.
                            /// </summary>
                            /// <param name="action">Action to be dispatched.</param>
                            /// <returns>The handle to a dispatching operation.</returns>
                            BackgroundWorker.prototype.Invoke = function (action) {
                                var backgroundAction = new Background.BackgroundAction(action, this._logger);
                                if (!this._isDebugMode) {
                                    this._actions.push(backgroundAction);
                                } else {
                                    backgroundAction.Run();
                                    if (backgroundAction.Status == 3 /* Error */) {
                                        throw backgroundAction.ErrorCode;
                                    }
                                }

                                return backgroundAction;
                            };
                            return BackgroundWorker;
                        })();
                        Background.BackgroundWorker = BackgroundWorker;
                    })(Impl.Background || (Impl.Background = {}));
                    var Background = Impl.Background;
                })(SDK.Impl || (SDK.Impl = {}));
                var Impl = SDK.Impl;
            })(Analytics.SDK || (Analytics.SDK = {}));
            var SDK = Analytics.SDK;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (SDK) {
                (function (Impl) {
                    (function (Background) {
                        var AsyncStatus = Arkadium.Connect.Analytics.SDK.Core.Api.AsyncStatus;

                        /// <summary>
                        /// The action which is used as a as action result of SilentMode.
                        /// The action has allways Status Cancelled. In other words, this component is a NullObject (Special Case pattern).
                        /// </summary>
                        var SilentModeAction = (function () {
                            /// <summary>
                            /// Creates an instance of SilentModeAction
                            /// </summary>
                            /// <param name="logger"></param>
                            function SilentModeAction(logger) {
                                this._logger = logger;
                            }
                            /// <summary>
                            /// Does nothing, in this implementation.
                            /// </summary>
                            SilentModeAction.prototype.Cancel = function () {
                                // do nothing
                            };

                            /// <summary>
                            /// Does nothing, in this implementation.
                            /// </summary>
                            SilentModeAction.prototype.Close = function () {
                                // do nothing
                            };

                            Object.defineProperty(SilentModeAction.prototype, "ErrorCode", {
                                /// <summary>
                                /// Allways null for SilentModeAction
                                /// </summary>
                                get: function () {
                                    return null;
                                },
                                enumerable: true,
                                configurable: true
                            });

                            Object.defineProperty(SilentModeAction.prototype, "Status", {
                                /// <summary>
                                /// Allways cancelled.
                                /// </summary>
                                get: function () {
                                    return 2 /* Canceled */;
                                },
                                enumerable: true,
                                configurable: true
                            });

                            Object.defineProperty(SilentModeAction.prototype, "Completed", {
                                /// <summary>
                                /// Setter just calls AsyncActionCompletedHandler with current status of the action.
                                /// </summary>
                                get: function () {
                                    return this._completed;
                                },
                                set: function (value) {
                                    this._completed = value;
                                    this.CallCompleted();
                                },
                                enumerable: true,
                                configurable: true
                            });


                            SilentModeAction.prototype.CallCompleted = function () {
                                try  {
                                    if (this._completed != null) {
                                        this._completed(this, this.Status);
                                        this._completed = null;
                                    }
                                } catch (exception) {
                                    this._logger.Error("BackgroundAction Completed callback raised an error: " + exception);
                                }
                            };
                            return SilentModeAction;
                        })();
                        Background.SilentModeAction = SilentModeAction;
                    })(Impl.Background || (Impl.Background = {}));
                    var Background = Impl.Background;
                })(SDK.Impl || (SDK.Impl = {}));
                var Impl = SDK.Impl;
            })(Analytics.SDK || (Analytics.SDK = {}));
            var SDK = Analytics.SDK;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (SDK) {
                (function (Impl) {
                    (function (Background) {
                        /// <summary>
                        /// The component prevents creation of all events in case of silent mode is enabled.
                        /// </summary>
                        var SilentModeKillSwitch = (function () {
                            /// <summary>
                            /// Creates an instance of the component.
                            /// </summary>
                            /// <param name="dispatcher">Dispatcher to be wrapped.</param>
                            /// <param name="environment">The instance of current environment object.</param>
                            /// <param name="logger">Analytics logger.</param>
                            function SilentModeKillSwitch(dispatcher, environment, logger) {
                                this._dispatcher = dispatcher;
                                this._environment = environment;
                                this._logger = logger;
                            }
                            /// <summary>
                            /// Adds an action to a dispatcher queue.
                            /// </summary>
                            /// <param name="action">Action to be ran by dispatcher.</param>
                            /// <returns>AsyncAction object which allows you to track when the Action was invoked and result of this invocation.</returns>
                            SilentModeKillSwitch.prototype.Invoke = function (action) {
                                if (this._environment.SilentMode) {
                                    this._logger.Debug("Cancel dispatcher action, because SilentMode is enabled.");
                                    return new Background.SilentModeAction(this._logger);
                                } else {
                                    this._logger.Debug("Apply dispatcher action, because SilentMode is disabled.");
                                    return this._dispatcher.Invoke(action);
                                }
                            };
                            return SilentModeKillSwitch;
                        })();
                        Background.SilentModeKillSwitch = SilentModeKillSwitch;
                    })(Impl.Background || (Impl.Background = {}));
                    var Background = Impl.Background;
                })(SDK.Impl || (SDK.Impl = {}));
                var Impl = SDK.Impl;
            })(Analytics.SDK || (Analytics.SDK = {}));
            var SDK = Analytics.SDK;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var TimeSpan = Arkadium.Connect.Analytics.SDK.Core.Api.TimeSpan;

var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (SDK) {
                (function (Impl) {
                    (function (Background) {
                        /// <summary>
                        /// Component implements a timer logic.
                        /// </summary>
                        var Timer = (function () {
                            function Timer() {
                                this._disposed = false;
                            }
                            Timer.prototype.Init = function (action, period) {
                                var _this = this;
                                var context = this;
                                var handler = function () {
                                    if (_this.NotDisposed()) {
                                        action.call(context, function () {
                                            setTimeout(handler, period.totalMilliseconds);
                                        });
                                    } else {
                                        // do nothing
                                    }
                                };
                                setTimeout(handler, period.totalMilliseconds);
                            };

                            Timer.prototype.NotDisposed = function () {
                                return !this._disposed;
                            };

                            /// <summary>
                            /// Stops current timer.
                            /// </summary>
                            Timer.prototype.Dispose = function () {
                                this._disposed = true;
                            };
                            return Timer;
                        })();
                        Background.Timer = Timer;
                    })(Impl.Background || (Impl.Background = {}));
                    var Background = Impl.Background;
                })(SDK.Impl || (SDK.Impl = {}));
                var Impl = SDK.Impl;
            })(Analytics.SDK || (Analytics.SDK = {}));
            var SDK = Analytics.SDK;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (SDK) {
                (function (Impl) {
                    (function (Model) {
                        /// <summary>
                        /// Information about inventory transaction.
                        /// </summary>
                        var InventoryTransactionInfo = (function () {
                            /// <summary>
                            ///  Creates an instance of transactionInfo.
                            /// </summary>
                            /// <param name="id">Id of transaction.</param>
                            /// <param name="provider">The name of payment provider e.g.: FacebookCredits, PayPal.</param>
                            /// <param name="type">The result of the purchase transaction.</param>
                            function InventoryTransactionInfo(id, provider, type) {
                                this.Id = id;
                                this.Provider = provider;
                                this.Type = type;
                            }
                            InventoryTransactionInfo.prototype.Clone = function () {
                                return new InventoryTransactionInfo(this.Id, this.Provider, this.Type);
                            };
                            return InventoryTransactionInfo;
                        })();
                        Model.InventoryTransactionInfo = InventoryTransactionInfo;
                    })(Impl.Model || (Impl.Model = {}));
                    var Model = Impl.Model;
                })(SDK.Impl || (SDK.Impl = {}));
                var Impl = SDK.Impl;
            })(Analytics.SDK || (Analytics.SDK = {}));
            var SDK = Analytics.SDK;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (SDK) {
                (function (Impl) {
                    (function (Model) {
                        /// <summary>
                        /// Information about the purchased item.
                        /// </summary>
                        var ItemInfo = (function () {
                            /// <summary>
                            /// Creates an instance of purchasing item information.
                            /// </summary>
                            /// <param name="key">Key of the item in your store.</param>
                            /// <param name="name">Friendly name of the item.</param>
                            /// <param name="type">The type name of the purchased item.</param>
                            /// <param name="quantity">Quantity of purchased items.</param>
                            function ItemInfo(key, name, type, quantity) {
                                this.Key = key;
                                this.Name = name;
                                this.Type = type;
                                this.Quantity = quantity;
                            }
                            ItemInfo.prototype.Clone = function () {
                                return new ItemInfo(this.Key, this.Name, this.Type, this.Quantity);
                            };
                            return ItemInfo;
                        })();
                        Model.ItemInfo = ItemInfo;
                    })(Impl.Model || (Impl.Model = {}));
                    var Model = Impl.Model;
                })(SDK.Impl || (SDK.Impl = {}));
                var Impl = SDK.Impl;
            })(Analytics.SDK || (Analytics.SDK = {}));
            var SDK = Analytics.SDK;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (SDK) {
                (function (Impl) {
                    (function (Model) {
                        /// <summary>
                        /// Information about price.
                        /// </summary>
                        var PriceInfo = (function () {
                            /// <summary>
                            /// Creates an instance of price info
                            /// </summary>
                            /// <param name="price">Original price of the purchased item.</param>
                            /// <param name="amount">Amount of money the user is going to spend.</param>
                            /// <param name="taxAmount">Amount of tax the user pays for this purchase.</param>
                            /// <param name="currencyCode">The code of currency, example: USD, EUR, RUR.</param>
                            function PriceInfo(price, amount, taxAmount, currencyCode) {
                                if (typeof currencyCode === "undefined") { currencyCode = PriceInfo.DefaultCurrency; }
                                this.Price = price;
                                this.Amount = amount;
                                this.TaxAmount = taxAmount;
                                this.CurrencyCode = currencyCode;
                            }
                            PriceInfo.prototype.Clone = function () {
                                return new PriceInfo(this.Price, this.Amount, this.TaxAmount, this.CurrencyCode);
                            };
                            PriceInfo.DefaultCurrency = "USD";
                            return PriceInfo;
                        })();
                        Model.PriceInfo = PriceInfo;
                    })(Impl.Model || (Impl.Model = {}));
                    var Model = Impl.Model;
                })(SDK.Impl || (SDK.Impl = {}));
                var Impl = SDK.Impl;
            })(Analytics.SDK || (Analytics.SDK = {}));
            var SDK = Analytics.SDK;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var TransactionResult = Arkadium.Connect.Analytics.Model.TransactionResult;

var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (SDK) {
                (function (Impl) {
                    (function (Model) {
                        /// <summary>
                        /// Info about transaction.
                        /// </summary>
                        var TransactionInfo = (function () {
                            /// <summary>
                            /// Creates an instance of transactionInfo.
                            /// </summary>
                            /// <param name="id">Id of transaction.</param>
                            /// <param name="provider">The name of payment provider e.g.: FacebookCredits, PayPal.</param>
                            /// <param name="result">The result of the purchase transaction.</param>
                            function TransactionInfo(id, provider, result) {
                                this.Id = id;
                                this.Provider = provider;
                                this.Result = result;
                            }
                            TransactionInfo.prototype.Clone = function () {
                                return new TransactionInfo(this.Id, this.Provider, this.Result);
                            };
                            return TransactionInfo;
                        })();
                        Model.TransactionInfo = TransactionInfo;
                    })(Impl.Model || (Impl.Model = {}));
                    var Model = Impl.Model;
                })(SDK.Impl || (SDK.Impl = {}));
                var Impl = SDK.Impl;
            })(Analytics.SDK || (Analytics.SDK = {}));
            var SDK = Analytics.SDK;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (SDK) {
                (function (Impl) {
                    (function (Model) {
                        /// <summary>
                        /// The information about user identity in a supporting authorization system (FB, Google, Live, and so forth).
                        /// </summary>
                        var UserIdentity = (function () {
                            function UserIdentity(id, provider) {
                                this.Id = id;
                                this.Provider = provider;
                            }
                            return UserIdentity;
                        })();
                        Model.UserIdentity = UserIdentity;
                    })(Impl.Model || (Impl.Model = {}));
                    var Model = Impl.Model;
                })(SDK.Impl || (SDK.Impl = {}));
                var Impl = SDK.Impl;
            })(Analytics.SDK || (Analytics.SDK = {}));
            var SDK = Analytics.SDK;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (SDK) {
                (function (Impl) {
                    (function (Queue) {
                        var EventCorruptedException = Arkadium.Connect.Analytics.SDK.Impl.Exceptions.EventCorruptedException;

                        var EmptyLogger = Arkadium.Connect.Analytics.SDK.Impl.Logging.EmptyLogger;

                        var DateTime = Arkadium.Connect.Analytics.Tools.DateTime;

                        var PersistentQueue = (function () {
                            function PersistentQueue(fileSystem, logger) {
                                this._logger = new EmptyLogger();
                                this._filesQueue = new Array();
                                this._logger = (logger != null) ? logger : new EmptyLogger();
                                this._fileSystem = fileSystem;

                                // TODO: think about loading data in a separate task to prevent increasing app start
                                var fileInfos = this._fileSystem.ListFiles();

                                fileInfos = fileInfos.sort(function (a, b) {
                                    if (a.CreationDate < b.CreationDate)
                                        return -1;
                                    if (a.CreationDate > b.CreationDate)
                                        return 1;

                                    return 0;
                                });

                                var fileNames = new Array();
                                for (var fileInfoIndex = 0; fileInfoIndex < fileInfos.length; fileInfoIndex++) {
                                    var fileInfo = fileInfos[fileInfoIndex];
                                    fileNames.push(fileInfo.Name);
                                }
                                this._filesQueue = fileNames;
                            }
                            /// <summary>
                            /// Adds an object to the end of the queue.
                            /// </summary>
                            /// <param name="eventMessage"></param>
                            PersistentQueue.prototype.Enqueue = function (eventMessage) {
                                eventMessage.SentTime = DateTime.Now.toString();

                                // TODO: think about moving serialization logic on to platform specific side.
                                var serializedMessage = JSON.stringify(eventMessage);
                                var fileName = eventMessage.EventId + ".json";

                                this._fileSystem.Save(fileName, serializedMessage);
                                this._filesQueue.push(fileName);
                            };

                            /// <summary>
                            /// Retrieves item from the queue by index, without removing it.
                            /// </summary>
                            /// <param name="index"></param>
                            /// <returns></returns>
                            PersistentQueue.prototype.Take = function (index) {
                                var fileName = this._filesQueue[index];
                                return this.LoadMessage(fileName, index);
                            };

                            /// <summary>
                            /// Removes item at index
                            /// </summary>
                            /// <param name="index"></param>
                            PersistentQueue.prototype.RemoveAt = function (index) {
                                // TODO: Seems like this method is transactional but review this method again.
                                var items = this._filesQueue;
                                var itemToRemove = items[index];
                                items = items.filter(function (item, itemIndex, array) {
                                    return itemIndex != index;
                                }); // remove at index

                                this._filesQueue = items;
                                this._fileSystem.Delete(itemToRemove);
                            };

                            /// <summary>
                            /// Removes and returns the object at the beginning of the queue.
                            /// </summary>
                            /// <returns>Event Message</returns>
                            PersistentQueue.prototype.Dequeue = function () {
                                if (this._filesQueue.length == 0) {
                                    return null;
                                }

                                var fileName = this._filesQueue.shift();
                                var eventMessage = this.LoadMessage(fileName);
                                this._fileSystem.Delete(fileName);

                                return eventMessage;
                            };

                            Object.defineProperty(PersistentQueue.prototype, "Count", {
                                /// <summary>
                                /// A count of items in the queue.
                                /// </summary>
                                get: function () {
                                    return this._filesQueue.length;
                                },
                                enumerable: true,
                                configurable: true
                            });

                            PersistentQueue.prototype.LoadMessage = function (fileName, fileIndex) {
                                if (typeof fileIndex === "undefined") { fileIndex = 0; }
                                var content = this._fileSystem.Load(fileName);
                                try  {
                                    return JSON.parse(content);
                                } catch (exception) {
                                    this._logger.Warning("PersistentQueue.LoadMessage Can't load file: " + fileName + " because of: " + exception);

                                    throw new EventCorruptedException("Can't retrieve EventMessage." + exception, fileIndex);
                                }
                            };
                            return PersistentQueue;
                        })();
                        Queue.PersistentQueue = PersistentQueue;
                    })(Impl.Queue || (Impl.Queue = {}));
                    var Queue = Impl.Queue;
                })(SDK.Impl || (SDK.Impl = {}));
                var Impl = SDK.Impl;
            })(Analytics.SDK || (Analytics.SDK = {}));
            var SDK = Analytics.SDK;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (SDK) {
                var AnalyticsException = Arkadium.Connect.Analytics.SDK.Impl.Exceptions.AnalyticsException;

                /// <summary>
                /// The endpoint of Connect Analytics system. Use it for all analytics requests.
                /// </summary>
                /// <remarks>
                /// If you are developing new SDK based on this Core just inherit this class.
                /// </remarks>
                var EventsBase = (function () {
                    function EventsBase() {
                    }
                    Object.defineProperty(EventsBase, "Track", {
                        /// <summary>
                        /// Instance of tracking system. You must initialize it by calling Events.Initialize.
                        /// </summary>
                        get: function () {
                            this.AssertInitialized();
                            return this._trackingSubsystem.TrackingManager;
                        },
                        enumerable: true,
                        configurable: true
                    });

                    Object.defineProperty(EventsBase, "Environment", {
                        /// <summary>
                        /// Instance of analytics environment.
                        /// Allows access to some internal analytics properties.
                        /// </summary>
                        get: function () {
                            this.AssertInitialized();
                            return this._trackingSubsystem.Environment;
                        },
                        enumerable: true,
                        configurable: true
                    });

                    /// <summary>
                    /// Guarantees that tracking subsystem is not initialized.
                    /// </summary>
                    /// <remarks>
                    /// Use this method to prevent running initialization process one more time.
                    /// </remarks>
                    /// <exception cref="AnalyticsException">In case tracking subsystem was initialized throws exception.</exception>
                    EventsBase.AssertNotInitialized = function () {
                        if (this._trackingSubsystem != null) {
                            throw new AnalyticsException("Analytics is already initialized.", "");
                        }
                    };

                    /// <summary>
                    /// Guarantees that tracking subsystem is initialized.
                    /// </summary>
                    /// <remarks>
                    /// Use this method to prevent using not initialized analytics subsystem.
                    /// </remarks>
                    /// <exception cref="AnalyticsException">In case tracking subsystem was not initialized throws exception.</exception>
                    EventsBase.AssertInitialized = function () {
                        if (this._trackingSubsystem == null) {
                            throw new AnalyticsException("Analytics is not initialized. Call TrackingManager.Initialize at first.", "");
                        }
                    };

                    //        #endregion
                    //        #region Initialization
                    /// <summary>
                    /// Initializes an SDK Core.
                    /// </summary>
                    /// <param name="factory">Factory which is used to create platform-specific components.</param>
                    /// <param name="settings">Limits which are being used inside the analytics system. In some cases you can override them to specify specific values.</param>
                    /// <param name="components">A list of componnets/plugins which extends functionality of SDK.</param>
                    /// <param name="logger">Logger which allows you to watch some internal analytics messages.</param>
                    EventsBase.Initialize = function (factory, settings, components, logger) {
                        if (typeof settings === "undefined") { settings = null; }
                        if (typeof components === "undefined") { components = null; }
                        if (typeof logger === "undefined") { logger = null; }
                        EventsBase.AssertNotInitialized();

                        EventsBase._trackingSubsystem = new SDK.TrackingSubsystem();
                        EventsBase._trackingSubsystem.Initialize(factory, settings, components, logger);
                    };
                    return EventsBase;
                })();
                SDK.EventsBase = EventsBase;
            })(Analytics.SDK || (Analytics.SDK = {}));
            var SDK = Analytics.SDK;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (SDK) {
                (function (Impl) {
                    (function (Queue) {
                        var PersistentQueueProxy = (function () {
                            function PersistentQueueProxy(persistentQueue) {
                                this._persistentQueue = persistentQueue;
                            }
                            PersistentQueueProxy.prototype.Enqueue = function (eventMessage) {
                                this._persistentQueue.Enqueue(eventMessage);
                            };

                            PersistentQueueProxy.prototype.Take = function (index) {
                                return this._persistentQueue.Take(index);
                            };

                            PersistentQueueProxy.prototype.RemoveAt = function (index) {
                                this._persistentQueue.RemoveAt(index);
                            };

                            PersistentQueueProxy.prototype.Dequeue = function () {
                                return this._persistentQueue.Dequeue();
                            };

                            Object.defineProperty(PersistentQueueProxy.prototype, "Count", {
                                get: function () {
                                    return this._persistentQueue.Count;
                                },
                                enumerable: true,
                                configurable: true
                            });
                            return PersistentQueueProxy;
                        })();
                        Queue.PersistentQueueProxy = PersistentQueueProxy;
                    })(Impl.Queue || (Impl.Queue = {}));
                    var Queue = Impl.Queue;
                })(SDK.Impl || (SDK.Impl = {}));
                var Impl = SDK.Impl;
            })(Analytics.SDK || (Analytics.SDK = {}));
            var SDK = Analytics.SDK;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (SDK) {
                (function (Impl) {
                    (function (Queue) {
                        var EmptyLogger = Arkadium.Connect.Analytics.SDK.Impl.Logging.EmptyLogger;

                        var LimitedQueue = (function (_super) {
                            __extends(LimitedQueue, _super);
                            function LimitedQueue(persistentQueue, environment, settings, logger) {
                                _super.call(this, persistentQueue);

                                this._environment = environment;
                                this._logger = logger ? logger : new EmptyLogger();
                                this._offlineMessagesCount = settings.OfflineMessagesCount;
                            }
                            LimitedQueue.prototype.Enqueue = function (eventMessage) {
                                // TODO: think should we only skip offline messages after a limit.
                                // probably we should also reject online messages because it's can be a problem with internet or something else.
                                if (this.Count >= this._offlineMessagesCount && this._environment.IsOffline) {
                                    // just ignore extra messages
                                    this._logger.Warning("Can't add more than " + this._offlineMessagesCount + " messages in offline mode");
                                    return;
                                }

                                _super.prototype.Enqueue.call(this, eventMessage);
                            };
                            return LimitedQueue;
                        })(Queue.PersistentQueueProxy);
                        Queue.LimitedQueue = LimitedQueue;
                    })(Impl.Queue || (Impl.Queue = {}));
                    var Queue = Impl.Queue;
                })(SDK.Impl || (SDK.Impl = {}));
                var Impl = SDK.Impl;
            })(Analytics.SDK || (Analytics.SDK = {}));
            var SDK = Analytics.SDK;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (SDK) {
                (function (Impl) {
                    (function (Queue) {
                        var MemoryQueue = (function () {
                            function MemoryQueue() {
                                this._eventMessages = new Array();
                            }
                            MemoryQueue.prototype.Enqueue = function (eventMessage) {
                                this._eventMessages.push(eventMessage);
                            };

                            MemoryQueue.prototype.Dequeue = function () {
                                return this._eventMessages.shift();
                            };

                            MemoryQueue.prototype.Take = function (index) {
                                return this._eventMessages[index];
                            };

                            MemoryQueue.prototype.RemoveAt = function (index) {
                                var messages = this._eventMessages;
                                messages = messages.filter(function (item, itemIndex, array) {
                                    return itemIndex != index;
                                }); // remove at index
                                this._eventMessages = messages;
                            };

                            Object.defineProperty(MemoryQueue.prototype, "Count", {
                                get: function () {
                                    return this._eventMessages.length;
                                },
                                enumerable: true,
                                configurable: true
                            });
                            return MemoryQueue;
                        })();
                        Queue.MemoryQueue = MemoryQueue;
                    })(Impl.Queue || (Impl.Queue = {}));
                    var Queue = Impl.Queue;
                })(SDK.Impl || (SDK.Impl = {}));
                var Impl = SDK.Impl;
            })(Analytics.SDK || (Analytics.SDK = {}));
            var SDK = Analytics.SDK;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (SDK) {
                (function (Impl) {
                    (function (Queue) {
                        var AnalyticsException = Arkadium.Connect.Analytics.SDK.Impl.Exceptions.AnalyticsException;

                        var MixedQueue = (function () {
                            function MixedQueue(persistentMessages, notImportantMessages) {
                                this._persistentMessages = persistentMessages;
                                this._notImportantMessages = notImportantMessages;
                            }
                            MixedQueue.prototype.Enqueue = function (eventMessage) {
                                // just enqueue message to memory queue as not important
                                this._notImportantMessages.Enqueue(eventMessage);
                            };

                            MixedQueue.prototype.Dequeue = function () {
                                if (this._persistentMessages.Count > 0) {
                                    return this._persistentMessages.Dequeue();
                                } else if (this._notImportantMessages.Count > 0) {
                                    return this._notImportantMessages.Dequeue();
                                }

                                return null;
                            };

                            MixedQueue.prototype.Take = function (index) {
                                if (index < this._persistentMessages.Count) {
                                    return this._persistentMessages.Take(index);
                                } else if (index < (this._persistentMessages.Count + this._notImportantMessages.Count)) {
                                    var notImportantIndex = index - this._persistentMessages.Count;
                                    return this._notImportantMessages.Take(notImportantIndex);
                                }

                                throw new AnalyticsException("Index out of the range of Queue", "");
                            };

                            MixedQueue.prototype.RemoveAt = function (index) {
                                if (index < this._persistentMessages.Count) {
                                    this._persistentMessages.RemoveAt(index);
                                } else if (index < this._persistentMessages.Count + this._notImportantMessages.Count) {
                                    var notImportantIndex = index - this._persistentMessages.Count - 1;
                                    this._notImportantMessages.RemoveAt(notImportantIndex);
                                }

                                throw new AnalyticsException("Index out of the range of Queue", "");
                            };

                            Object.defineProperty(MixedQueue.prototype, "Count", {
                                get: function () {
                                    return this._persistentMessages.Count + this._notImportantMessages.Count;
                                },
                                enumerable: true,
                                configurable: true
                            });
                            return MixedQueue;
                        })();
                        Queue.MixedQueue = MixedQueue;
                    })(Impl.Queue || (Impl.Queue = {}));
                    var Queue = Impl.Queue;
                })(SDK.Impl || (SDK.Impl = {}));
                var Impl = SDK.Impl;
            })(Analytics.SDK || (Analytics.SDK = {}));
            var SDK = Analytics.SDK;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (SDK) {
                (function (Impl) {
                    (function (Queue) {
                        var EventCorruptedException = Arkadium.Connect.Analytics.SDK.Impl.Exceptions.EventCorruptedException;
                        var FileNotFoundException = Arkadium.Connect.Analytics.SDK.Impl.Exceptions.FileNotFoundException;

                        var SafeQueue = (function (_super) {
                            __extends(SafeQueue, _super);
                            function SafeQueue(persistentQueue) {
                                _super.call(this, persistentQueue);
                            }
                            SafeQueue.prototype.Enqueue = function (eventMessage) {
                                _super.prototype.Enqueue.call(this, eventMessage);
                            };

                            SafeQueue.prototype.Dequeue = function () {
                                if (this.Count == 0) {
                                    return null;
                                }

                                try  {
                                    return _super.prototype.Dequeue.call(this);
                                } catch (ex) {
                                    if (ex instanceof EventCorruptedException) {
                                        throw ex;
                                    }

                                    if (ex instanceof FileNotFoundException) {
                                        // try remove not existing message
                                        _super.prototype.RemoveAt.call(this, 0);

                                        // recursive call dequeue to get the next valid value.
                                        return this.Dequeue();
                                    }
                                }

                                return null;
                            };

                            SafeQueue.prototype.Take = function (index) {
                                try  {
                                    return _super.prototype.Take.call(this, index);
                                } catch (ex) {
                                    if (ex instanceof EventCorruptedException) {
                                        throw ex;
                                    }

                                    if (ex instanceof FileNotFoundException) {
                                        // try remove not existing message
                                        this.RemoveAt(0);

                                        // just re-try
                                        return this.Take(index);
                                    }
                                }

                                return null;
                            };

                            SafeQueue.prototype.RemoveAt = function (index) {
                                try  {
                                    _super.prototype.RemoveAt.call(this, index);
                                } catch (ex) {
                                    // just hide all errors
                                }
                            };
                            return SafeQueue;
                        })(Queue.PersistentQueueProxy);
                        Queue.SafeQueue = SafeQueue;
                    })(Impl.Queue || (Impl.Queue = {}));
                    var Queue = Impl.Queue;
                })(SDK.Impl || (SDK.Impl = {}));
                var Impl = SDK.Impl;
            })(Analytics.SDK || (Analytics.SDK = {}));
            var SDK = Analytics.SDK;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (SDK) {
                (function (Impl) {
                    (function (Queue) {
                        var TransactionalQueue = (function () {
                            function TransactionalQueue(persistentQueue) {
                                this._queuedMessages = new Array();
                                this._dequeueCount = 0;
                                this._persistentQueue = persistentQueue;
                            }
                            TransactionalQueue.prototype.Enqueue = function (eventMessage) {
                                this._queuedMessages.push(eventMessage);
                            };

                            TransactionalQueue.prototype.Take = function (index) {
                                return this._persistentQueue.Take(index);
                            };

                            TransactionalQueue.prototype.RemoveAt = function (index) {
                                this._persistentQueue.RemoveAt(index);
                            };

                            TransactionalQueue.prototype.Dequeue = function () {
                                if (this._dequeueCount >= this._persistentQueue.Count) {
                                    return null;
                                }

                                var eventMessage = this._persistentQueue.Take(this._dequeueCount);
                                this._dequeueCount += 1;

                                return eventMessage;
                            };

                            Object.defineProperty(TransactionalQueue.prototype, "Count", {
                                get: function () {
                                    return this._persistentQueue.Count + this._queuedMessages.length - this._dequeueCount;
                                },
                                enumerable: true,
                                configurable: true
                            });

                            TransactionalQueue.prototype.Commit = function () {
                                this.FlushEnqueueMessages();
                                this.FlushDequeueMessages();
                            };

                            TransactionalQueue.prototype.FlushDequeueMessages = function () {
                                for (var i = 0; i < this._dequeueCount; i++) {
                                    this._persistentQueue.Dequeue();
                                }

                                this._dequeueCount = 0;
                            };

                            TransactionalQueue.prototype.FlushEnqueueMessages = function () {
                                while (this._queuedMessages.length != 0) {
                                    var message = this._queuedMessages.shift();
                                    this._persistentQueue.Enqueue(message);
                                }
                            };

                            TransactionalQueue.prototype.Rollback = function () {
                                this._dequeueCount = 0;
                                this._queuedMessages = new Array();
                            };
                            return TransactionalQueue;
                        })();
                        Queue.TransactionalQueue = TransactionalQueue;
                    })(Impl.Queue || (Impl.Queue = {}));
                    var Queue = Impl.Queue;
                })(SDK.Impl || (SDK.Impl = {}));
                var Impl = SDK.Impl;
            })(Analytics.SDK || (Analytics.SDK = {}));
            var SDK = Analytics.SDK;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (SDK) {
                (function (Impl) {
                    var TransactionalQueue = Arkadium.Connect.Analytics.SDK.Impl.Queue.TransactionalQueue;

                    var ServerProcessingException = Arkadium.Connect.Analytics.SDK.Impl.Exceptions.ServerProcessingException;
                    var ServerConnectionException = Arkadium.Connect.Analytics.SDK.Impl.Exceptions.ServerConnectionException;
                    var EventCorruptedException = Arkadium.Connect.Analytics.SDK.Impl.Exceptions.EventCorruptedException;

                    var EmptyLogger = Arkadium.Connect.Analytics.SDK.Impl.Logging.EmptyLogger;

                    var EventMessageBatch = Arkadium.Connect.Analytics.Model.EventMessageBatch;

                    var DateTime = Arkadium.Connect.Analytics.Tools.DateTime;

                    var QueueWorker = (function () {
                        function QueueWorker(queue, sender, environment, settings, logger) {
                            if (typeof logger === "undefined") { logger = null; }
                            this._messagesToResend = new Array();
                            this._persistentQueue = queue;
                            this._eventSender = sender;
                            this._environment = environment;
                            this._settings = settings;
                            this._logger = logger ? logger : new EmptyLogger();
                        }
                        QueueWorker.prototype.SendEvents = function (callback) {
                            var _this = this;
                            if (this._environment.IsOffline) {
                                this._eventSender.IsAvailable(function (result) {
                                    _this._environment.IsOffline = !result;
                                    callback();
                                });
                                return;
                            }

                            var somethingToResend = this._messagesToResend.length > 0;
                            if (somethingToResend) {
                                this.TryResendMessages(callback);
                                return;
                            }

                            if (this._persistentQueue.Count == 0) {
                                // nothing to send.
                                callback();
                                return;
                            }

                            if (this._persistentQueue.Count == 1) {
                                this.SendMessage(callback);
                            } else {
                                this.SendBatch(callback);
                            }
                        };

                        QueueWorker.prototype.TryResendMessages = function (callback) {
                            var _this = this;
                            while (this._messagesToResend.length > 0) {
                                var message = this._messagesToResend.shift();
                                this._eventSender.Send(message, function (result) {
                                    if (result.Error) {
                                        _this._logger.Warning("Can't re-send message to the analytics server, because: " + result.Error);
                                    }

                                    // call only when the last message sent
                                    if (_this._messagesToResend.length == 0) {
                                        callback();
                                    }
                                });
                            }
                        };

                        // TODO: try avoid duplicate of code
                        QueueWorker.prototype.SendMessage = function (callback) {
                            var _this = this;
                            var transactionalQueue = new TransactionalQueue(this._persistentQueue);
                            try  {
                                var eventMessage = transactionalQueue.Dequeue();
                                eventMessage.SentTime = DateTime.Now.toString();

                                this._eventSender.Send(eventMessage, function (result) {
                                    if (!result.Error) {
                                        transactionalQueue.Commit();
                                    } else if (result.Error instanceof ServerProcessingException) {
                                        _this._logger.Warning("Server can't process a message, will remove it. Details: " + result.Error);
                                        transactionalQueue.Commit();
                                    } else if (result.Error instanceof ServerConnectionException) {
                                        //TODO: think about removing message on this level.
                                        _this._environment.IsOffline = true;
                                        _this._logger.Error("Can't send events because of event was corrupted. Details: " + result.Error);
                                        transactionalQueue.Rollback();
                                    } else {
                                        _this._logger.Error("Can't send events because of: " + result.Error);
                                        transactionalQueue.Rollback();
                                    }

                                    callback();
                                });
                            } catch (ex) {
                                if (ex instanceof EventCorruptedException) {
                                    this._logger.Error("Can't send events because of event was corrupted. Details: " + ex);
                                    transactionalQueue.Rollback();

                                    throw ex;
                                } else {
                                    this._logger.Error("Can't send events because of: " + ex);
                                    transactionalQueue.Rollback();
                                }

                                callback();
                            }
                        };

                        QueueWorker.prototype.SendBatch = function (callback) {
                            var _this = this;
                            var transactionalQueue = new TransactionalQueue(this._persistentQueue);
                            var batch = null;
                            try  {
                                batch = this.GetMessagesBatch(transactionalQueue);

                                if (batch.EventMessages.length == 0) {
                                    // Skip of empty batch sending.
                                    // There is nothing to commit, because nothing is extracted.
                                    return;
                                }

                                this._eventSender.SendBatch(batch, function (result) {
                                    if (!result.Error) {
                                        transactionalQueue.Commit();
                                        _this._logger.Info("Batch was sent successfully.");

                                        for (var messageIndex = 0; messageIndex < batch.EventMessages.length; messageIndex++) {
                                            var message = batch.EventMessages[messageIndex];
                                            _this._logger.Info(message.toString());
                                        }
                                    } else if (result.Error instanceof ServerProcessingException) {
                                        _this._logger.Warning("Server can't process some messages from batch, will try send them. Details: " + result.Error);
                                        if (batch != null && batch.EventMessages != null && batch.EventMessages.length != 0) {
                                            for (var messageIndex = 0; messageIndex < batch.EventMessages.length; messageIndex++) {
                                                var message = batch.EventMessages[messageIndex];
                                                _this._messagesToResend.push(message);
                                            }
                                        }

                                        // NOTE: this will remove all batch messages from the PQueue. But all of them already pushed to _messagesToResend queue.
                                        transactionalQueue.Commit();
                                    } else if (result.Error instanceof ServerConnectionException) {
                                        _this._environment.IsOffline = true;
                                        _this._logger.Info("No access to server. Check your internet connection or server is down. Details: " + result.Error);
                                        transactionalQueue.Rollback();
                                    } else {
                                        _this._logger.Error("Can't send events because of: " + result.Error);
                                        transactionalQueue.Rollback();
                                    }

                                    callback();
                                });
                            } catch (ex) {
                                if (ex instanceof EventCorruptedException) {
                                    this._logger.Error("Can't send events because of event was corrupted. Details: " + ex);
                                    transactionalQueue.Rollback();

                                    throw ex;
                                } else {
                                    this._logger.Error("Can't send events because of: " + ex);
                                    transactionalQueue.Rollback();
                                }

                                callback();
                            }
                        };

                        QueueWorker.prototype.GetMessagesBatch = function (transactionalQueue) {
                            var batch = new EventMessageBatch();
                            batch.EventMessages = new Array();
                            batch.SentTime = DateTime.Now.toString();

                            var eventMessage = null;

                            do {
                                eventMessage = transactionalQueue.Dequeue();
                                if (eventMessage != null) {
                                    eventMessage.SentTime = DateTime.Now.toString();
                                    batch.EventMessages.push(eventMessage);
                                }
                            } while(eventMessage != null && batch.EventMessages.length < this._settings.BatchMessagesCount);

                            return batch;
                        };
                        return QueueWorker;
                    })();
                    Impl.QueueWorker = QueueWorker;
                })(SDK.Impl || (SDK.Impl = {}));
                var Impl = SDK.Impl;
            })(Analytics.SDK || (Analytics.SDK = {}));
            var SDK = Analytics.SDK;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (SDK) {
                (function (Impl) {
                    (function (Validation) {
                        var PersistentQueueProxy = Arkadium.Connect.Analytics.SDK.Impl.Queue.PersistentQueueProxy;
                        var AnalyticsException = Arkadium.Connect.Analytics.SDK.Impl.Exceptions.AnalyticsException;

                        var ValidatorBase = (function (_super) {
                            __extends(ValidatorBase, _super);
                            function ValidatorBase(persistentQueue, settings) {
                                _super.call(this, persistentQueue);
                                this._settings = settings;
                            }
                            ValidatorBase.prototype.AssertIsValid = function (message) {
                                this.AssertValidEventName(message.EventName);
                                this.AssertValueLengthLimit("AppId", message.AppId);
                                this.AssertValueLengthLimit("HostId", message.HostId);

                                //TODO: David - Do we need to check the length of data set programmically by the SDK?
                                this.AssertValueLengthLimit("SDK", message.SDK);
                                this.AssertValidPayloadValues(message.Payload);
                            };

                            ValidatorBase.prototype.AssertValidPayloadValue = function (key, value) {
                                this.AssertKeyNotNull(key);
                                this.AssertKeyLengthLimit(key);
                                this.AssertValueLengthLimit(key, value);
                            };

                            ValidatorBase.prototype.AssertKeyNotNull = function (key) {
                                if (key == null || key.length == 0) {
                                    throw new AnalyticsException("Key must not be null.", "");
                                }
                            };

                            ValidatorBase.prototype.AssertKeyLengthLimit = function (key) {
                                if (key.length > this._settings.MaxPayloadKeyLength) {
                                    var message = "Key must be less than " + this._settings.MaxPayloadKeyLength + " characters.";
                                    throw new AnalyticsException(message, "");
                                }
                            };

                            ValidatorBase.prototype.AssertValueLengthLimit = function (key, value) {
                                if (value != null && value.toString().length > this._settings.MaxPayloadValueLength) {
                                    var message = "Value for " + key + " must be less than " + this._settings.MaxPayloadValueLength + " characters.";
                                    throw new AnalyticsException(message, "");
                                }
                            };

                            ValidatorBase.prototype.AssertValidPayloadValues = function (payload) {
                                if (payload == null) {
                                    return;
                                }

                                for (var itemKey in payload) {
                                    this.AssertValidPayloadValue(itemKey, payload[itemKey]);
                                }
                            };

                            ValidatorBase.prototype.AssertValidEventName = function (eventName) {
                                if (this.IsNullOrWhiteSpace(eventName)) {
                                    throw new AnalyticsException("EventName must not be null.", "");
                                }

                                if (eventName.length > this._settings.MaxEventNameLength) {
                                    var message = "Event names must be less than " + this._settings.MaxEventNameLength + " characters.";
                                    throw new AnalyticsException(message, "");
                                }
                            };

                            ValidatorBase.prototype.IsNullOrWhiteSpace = function (value) {
                                return (value == null || value.length === 0) || (typeof value == "string" && value.trim() == "");
                            };
                            return ValidatorBase;
                        })(PersistentQueueProxy);
                        Validation.ValidatorBase = ValidatorBase;
                    })(Impl.Validation || (Impl.Validation = {}));
                    var Validation = Impl.Validation;
                })(SDK.Impl || (SDK.Impl = {}));
                var Impl = SDK.Impl;
            })(Analytics.SDK || (Analytics.SDK = {}));
            var SDK = Analytics.SDK;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (SDK) {
                (function (Impl) {
                    (function (Validation) {
                        var BreakingValidationQueue = (function (_super) {
                            __extends(BreakingValidationQueue, _super);
                            function BreakingValidationQueue(persistentQueue, settings) {
                                _super.call(this, persistentQueue, settings);
                            }
                            BreakingValidationQueue.prototype.Enqueue = function (eventMessage) {
                                this.AssertIsValid(eventMessage);
                                _super.prototype.Enqueue.call(this, eventMessage);
                            };
                            return BreakingValidationQueue;
                        })(Validation.ValidatorBase);
                        Validation.BreakingValidationQueue = BreakingValidationQueue;
                    })(Impl.Validation || (Impl.Validation = {}));
                    var Validation = Impl.Validation;
                })(SDK.Impl || (SDK.Impl = {}));
                var Impl = SDK.Impl;
            })(Analytics.SDK || (Analytics.SDK = {}));
            var SDK = Analytics.SDK;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (SDK) {
                (function (Impl) {
                    (function (Validation) {
                        var EmptyLogger = Arkadium.Connect.Analytics.SDK.Impl.Logging.EmptyLogger;

                        var SilentValidationQueue = (function (_super) {
                            __extends(SilentValidationQueue, _super);
                            function SilentValidationQueue(persistentQueue, settings, logger) {
                                _super.call(this, persistentQueue, settings);
                                this._logger = logger ? logger : new EmptyLogger();
                            }
                            SilentValidationQueue.prototype.Enqueue = function (eventMessage) {
                                try  {
                                    this.AssertIsValid(eventMessage);
                                    _super.prototype.Enqueue.call(this, eventMessage);
                                } catch (exception) {
                                    this._logger.Error("Validation error: " + exception);
                                }
                            };
                            return SilentValidationQueue;
                        })(Validation.ValidatorBase);
                        Validation.SilentValidationQueue = SilentValidationQueue;
                    })(Impl.Validation || (Impl.Validation = {}));
                    var Validation = Impl.Validation;
                })(SDK.Impl || (SDK.Impl = {}));
                var Impl = SDK.Impl;
            })(Analytics.SDK || (Analytics.SDK = {}));
            var SDK = Analytics.SDK;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (SDK) {
                (function (Impl) {
                    (function (FileSystem) {
                        /// <summary>
                        /// Filters the list of files of the working directory by AppId in the file name;
                        /// </summary>
                        var FileSystemFilter = (function () {
                            function FileSystemFilter(fileSystem, appId) {
                                this._fileSystem = fileSystem;
                                this._appId = appId;
                            }
                            /// <summary>
                            /// Retrieves the list of files of the working directory
                            /// </summary>
                            /// <returns>List of FileInfo</returns>
                            FileSystemFilter.prototype.ListFiles = function () {
                                var _this = this;
                                var result = this._fileSystem.ListFiles();
                                var filteredData = result.filter(function (item) {
                                    return item.Name.indexOf(_this._appId) >= 0;
                                });

                                // removing app ids from the names
                                filteredData.forEach(function (value) {
                                    value.Name = value.Name.replace(_this._appId + "_", "");
                                });

                                return filteredData;
                            };

                            /// <summary>
                            /// Loads the file by fileName from the working workingPlace (folder).
                            /// </summary>
                            /// <param name="fileName">The name of the file to load.</param>
                            /// <returns>The streamed file content.</returns>
                            FileSystemFilter.prototype.Load = function (fileName) {
                                return this._fileSystem.Load(this._appId + "_" + fileName);
                            };

                            /// <summary>
                            /// Saves the file to the working place (folder).
                            /// </summary>
                            /// <remarks>
                            /// Specific implementations may work in some different way for existing files.
                            /// In general Core of SDK expects that saving with the same fileName will append information to an existing file.
                            /// </remarks>
                            /// <param name="fileName">The name of file in working place.</param>
                            /// <param name="content">Content of the file.</param>
                            FileSystemFilter.prototype.Save = function (fileName, content) {
                                this._fileSystem.Save(this._appId + "_" + fileName, content);
                            };

                            /// <summary>
                            /// Removes the file from the working place (folder).
                            /// </summary>
                            /// <param name="fileName">The name of file in working place.</param>
                            FileSystemFilter.prototype.Delete = function (fileName) {
                                this._fileSystem.Delete(this._appId + "_" + fileName);
                            };
                            return FileSystemFilter;
                        })();
                        FileSystem.FileSystemFilter = FileSystemFilter;
                    })(Impl.FileSystem || (Impl.FileSystem = {}));
                    var FileSystem = Impl.FileSystem;
                })(SDK.Impl || (SDK.Impl = {}));
                var Impl = SDK.Impl;
            })(Analytics.SDK || (Analytics.SDK = {}));
            var SDK = Analytics.SDK;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var ValidationOptions = Arkadium.Connect.Analytics.SDK.ValidationOptions;

var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (SDK) {
                var TimeSpan = Arkadium.Connect.Analytics.SDK.Core.Api.TimeSpan;

                /// <summary>
                /// Container of analytics limits and settings which are used inside the analytics system.
                /// </summary>
                var Settings = (function () {
                    /// <summary>
                    /// Allows you to create your custom limits.
                    /// </summary>
                    /// <param name="offlineMessagesCount">Represents a number of messages which could be collected offline before new events are filtered (rejected).</param>
                    /// <param name="batchMessagesCount">Represents a number of messages which can be included into a single BatchEventMessage.</param>
                    /// <param name="flushTime">The timeout of checking the internal queue to send events to the server.</param>
                    /// <param name="validationOptions">
                    ///  Is a parameter which gives you an ability to check how your app sends events. <br />
                    ///  Silent(default) mode will reject invalid messages. <br/>
                    ///  RaiseErrors mode will throw validation exception. This will help you to fix all sending errors in debug mode.<br/>
                    /// </param>
                    function Settings(offlineMessagesCount, batchMessagesCount, flushTime, idleTimeout, validationOptions) {
                        this._maxPayloadKeyLength = 50;
                        this._maxPayloadValueLength = 255;
                        this._maxEventNameLength = 50;
                        this._validationOptions = 1 /* Silent */;
                        this._offlineMessagesCount = offlineMessagesCount;
                        this._batchMessagesCount = batchMessagesCount;
                        this._flushTime = flushTime;
                        this._idleTimeout = idleTimeout;
                        this._validationOptions = validationOptions;
                    }
                    Object.defineProperty(Settings.prototype, "MaxPayloadKeyLength", {
                        /// <summary>
                        /// Represents the max length of the key which can be used in payload.
                        /// </summary>
                        get: function () {
                            return this._maxPayloadKeyLength;
                        },
                        enumerable: true,
                        configurable: true
                    });

                    Object.defineProperty(Settings.prototype, "MaxPayloadValueLength", {
                        /// <summary>
                        /// The max length of the string which can be sent as payload value.
                        /// </summary>
                        get: function () {
                            return this._maxPayloadValueLength;
                        },
                        enumerable: true,
                        configurable: true
                    });

                    Object.defineProperty(Settings.prototype, "MaxEventNameLength", {
                        /// <summary>
                        /// The max length of the custom event name.
                        /// </summary>
                        get: function () {
                            return this._maxEventNameLength;
                        },
                        enumerable: true,
                        configurable: true
                    });

                    Object.defineProperty(Settings.prototype, "ValidationOptions", {
                        /// <summary>
                        ///  Is a parameter which gives you an ability to check how your app sends events. <br />
                        /// </summary>
                        /// <remarks>
                        ///  Silent(default) mode will reject invalid messages without any notifications. <br/>
                        ///  RaiseErrors mode will throw validation exception. This will help you to fix all sending errors in debug mode.<br/>
                        /// </remarks>
                        get: function () {
                            return this._validationOptions;
                        },
                        set: function (value) {
                            this._validationOptions = value;
                        },
                        enumerable: true,
                        configurable: true
                    });


                    Object.defineProperty(Settings.prototype, "OfflineMessagesCount", {
                        /// <summary>
                        /// Represents a number of messages that could be collected in offline mode before new events are filtered (rejected).
                        /// </summary>
                        get: function () {
                            return this._offlineMessagesCount;
                        },
                        set: function (value) {
                            this._offlineMessagesCount = value;
                        },
                        enumerable: true,
                        configurable: true
                    });


                    Object.defineProperty(Settings.prototype, "BatchMessagesCount", {
                        /// <summary>
                        /// Represents a number of messages which can be included into a single BatchEventMessage.
                        /// </summary>
                        get: function () {
                            return this._batchMessagesCount;
                        },
                        set: function (value) {
                            this._batchMessagesCount = value;
                        },
                        enumerable: true,
                        configurable: true
                    });


                    Object.defineProperty(Settings.prototype, "FlushTime", {
                        /// <summary>
                        /// The timeout of checking the internal queue to send events to the server.
                        /// </summary>
                        get: function () {
                            return this._flushTime;
                        },
                        set: function (value) {
                            this._flushTime = value;
                        },
                        enumerable: true,
                        configurable: true
                    });


                    Object.defineProperty(Settings.prototype, "IdleTimeout", {
                        /// <summary>
                        /// The timeout of heartbeat functionality.
                        /// SDK will raise 'Idle' event every time when SDK is active but not receive any calls from game after this timeout.
                        /// By default it is equal to 5 minutes. <br/>
                        /// <remarks>
                        /// <b>NOTE:</b> Every change you have to coordinate with our Analytics team, because such changes may affect session length results for your game.<br/>
                        /// <b>NOTE:</b> To disable this functionality you may specify Zero.
                        /// <example>
                        /// <code>
                        ///     // disabling IdleDetection functionality
                        ///     var customSettings = Win8Settings.Default;
                        ///     customSettings.IdleTimeout = TimeSpan.FromSeconds(0);
                        /// </code>
                        /// </example>
                        /// </remarks>
                        /// </summary>
                        get: function () {
                            return this._idleTimeout;
                        },
                        set: function (value) {
                            this._idleTimeout = value;
                        },
                        enumerable: true,
                        configurable: true
                    });


                    Object.defineProperty(Settings, "Default", {
                        /// <summary>
                        /// Default settings and limits of the analytics system.
                        /// </summary>
                        /// <remarks>
                        /// <list type="bullet">
                        /// <listheader>
                        ///     <term>Setting Property</term>
                        ///     <description>Default Value</description>
                        /// </listheader>
                        /// <item>
                        ///     <term>MaxEventNameLength</term>
                        ///     <description>50 chars</description>
                        /// </item>
                        /// <item>
                        ///     <term>MaxPayloadKeyLength</term>
                        ///     <description>50 chars</description>
                        /// </item>
                        /// <item>
                        ///     <term>MaxPayloadValueLength</term>
                        ///     <description>255 chars</description>
                        /// </item>
                        /// <item>
                        ///     <term>BatchMessagesCount</term>
                        ///     <description>20 chars</description>
                        /// </item>
                        /// <item>
                        ///     <term>ValidationOptions</term>
                        ///     <description>Silent</description>
                        /// </item>
                        /// <item>
                        ///     <term>FlushTime</term>
                        ///     <description>1 second</description>
                        /// </item>
                        /// </list>
                        /// </remarks>
                        get: function () {
                            var settings = new Settings(100, 20, TimeSpan.createFromSeconds(1), TimeSpan.createFromMinutes(5), 1 /* Silent */);

                            return settings;
                        },
                        enumerable: true,
                        configurable: true
                    });

                    /// <summary>
                    /// Gets string representation of Settings.
                    /// </summary>
                    /// <returns></returns>
                    Settings.prototype.toString = function () {
                        var messageFormat = "MaxPayloadKeyLength: " + this._maxPayloadKeyLength + "\n " + "MaxPayloadValueLength: " + this._maxPayloadValueLength + "\n " + "MaxEventNameLength: " + this._maxEventNameLength + "\n " + "OfflineMessagesCount: " + this._offlineMessagesCount + "\n " + "BatchMessagesCount: " + this._batchMessagesCount + "\n " + "FlushTime: " + this._flushTime + "\n " + "ValidationOptions: " + this._validationOptions;

                        return messageFormat;
                    };
                    return Settings;
                })();
                SDK.Settings = Settings;
            })(Analytics.SDK || (Analytics.SDK = {}));
            var SDK = Analytics.SDK;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (SDK) {
                var QueueWorker = Arkadium.Connect.Analytics.SDK.Impl.QueueWorker;
                var MixedQueue = Arkadium.Connect.Analytics.SDK.Impl.Queue.MixedQueue;

                var Gender = Arkadium.Connect.Analytics.Model.Gender;
                var ViralType = Arkadium.Connect.Analytics.Model.ViralType;

                var InventoryTransactionInfo = Arkadium.Connect.Analytics.SDK.Impl.Model.InventoryTransactionInfo;

                var EmptyLogger = Arkadium.Connect.Analytics.SDK.Impl.Logging.EmptyLogger;

                var EventCorruptedException = Arkadium.Connect.Analytics.SDK.Impl.Exceptions.EventCorruptedException;
                var AnalyticsException = Arkadium.Connect.Analytics.SDK.Impl.Exceptions.AnalyticsException;

                var EventMessage = Arkadium.Connect.Analytics.Model.EventMessage;

                var DateTime = Arkadium.Connect.Analytics.Tools.DateTime;

                /// <summary>
                /// This class is used to track all events. As a core of analytics system it can be configured in different ways to solve different tasks.
                /// </summary>
                /// <remarks>
                /// Please do not instantiate this class if you are not sure you can configure it correctly.
                /// Please use Events.Initialize method(s) to do it.
                /// If you are developing your own SDK see <see cref="EventsBase.Initialize"/> which implements the common steps of initialization of this component.
                /// <b>NOTE:</b> Configurations when property ValidationOptions is set to SilentMode does all Tags asyncronously, which prevents freezing the game during this operation but causes loosing of wrong structured events.
                /// ValidationOptions.RaiseErrors means a Debug mode which allows you to check integration of analytics in to your game.
                /// <b>NOTE:</b> Tracking manager should be a singleton, because many configurations uses the single PersistentStorage and may broke storage of each other.
                /// </remarks>
                var TrackingManager = (function () {
                    //        #endregion
                    //        #region Constructors
                    /// <summary>
                    /// Creates an instance of tracking manager.
                    /// <remarks>
                    /// Please do not use it yourself, use Events.Initialize method for this. If you are developing SDK see <see cref="EventsBase.Initialize"/>.
                    /// </remarks>
                    /// </summary>
                    /// <param name="environment">Implementation of the environment properties provider e.g.: Locale, ScreenResolution, DeviceId and so forth.</param>
                    /// <param name="persistentQueue">Implementation of the queue which saves all events persistently on to local storage of device.
                    /// This allows to send event after application crashes or connection problems.</param>
                    /// <param name="notImportantQueue">Implementation of in-memory queue, usually for not important messages.</param>
                    /// <param name="eventSender">Implementation of manager which should send all events to the server.</param>
                    /// <param name="dispatcher">Dispatcher - platform specific implementation.</param>
                    /// <param name="settings">Settings which are used to in the analytics system.</param>
                    /// <param name="logger">Logger which allows you to track some internal analytics events during the debug process.</param>
                    function TrackingManager(environment, persistentQueue, notImportantQueue, eventSender, dispatcher, settings, logger) {
                        if (typeof logger === "undefined") { logger = null; }
                        this._lastEventTime = new Date();
                        this._environment = environment;

                        this._persistentQueue = persistentQueue;
                        this._notImportantQueue = notImportantQueue;
                        this._settings = settings;
                        this._logger = logger ? logger : new EmptyLogger();
                        var mixedQueue = new MixedQueue(this._persistentQueue, this._notImportantQueue);

                        this._queueWorker = new QueueWorker(mixedQueue, eventSender, environment, settings, this._logger);
                        this._background = dispatcher;
                    }
                    Object.defineProperty(TrackingManager.prototype, "LastEventTime", {
                        get: function () {
                            return this._lastEventTime;
                        },
                        enumerable: true,
                        configurable: true
                    });

                    //        #endregion
                    //        #region Auto Flushing Events
                    TrackingManager.prototype.FlushEvents = function (callback) {
                        try  {
                            this._queueWorker.SendEvents(callback);
                        } catch (ex) {
                            if (ex instanceof EventCorruptedException) {
                                this._persistentQueue.RemoveAt(ex.Index);
                                this.Error(ex.Message, ex);
                                this._logger.Error("Event corrupted.");
                            }
                        }
                    };

                    //        #endregion
                    //        #region Public interface
                    /// <summary>
                    /// Tracks the beginning of user session.
                    /// </summary>
                    /// <remarks>
                    /// This tag is used to denote the start of a new session.
                    /// A session is defined as when a user loads the game without having to take any other actions in the game.
                    /// </remarks>
                    /// <param name="payload">Additional set of key/values which should be sent with this request.</param>
                    /// <returns>
                    /// IAsyncAction - should be completed when event is successfully validated and prepared to be sent.
                    /// </returns>
                    TrackingManager.prototype.BeginSession = function (payload) {
                        var _this = this;
                        if (typeof payload === "undefined") { payload = null; }
                        return this._background.Invoke(function () {
                            var message = _this.CreateEventMessage("BeginSession", payload);
                            _this._persistentQueue.Enqueue(message);
                        });
                    };

                    /// <summary>
                    /// Tracks ending of session.
                    /// </summary>
                    /// <remarks>
                    /// This tag is used to denote the end of a session.
                    /// Normally, games on the web do not allow the game to fire an ‘EndSession’ tag when the user navigates away from the game page.
                    /// This is because the game on the web does not have a chance to ‘exit’ gracefully. Which means the game does not have an opportunity to fire off this event before the app closes.
                    /// For mobile apps, the game can detect when it is being closed and can pass the event as part of the closing procedures for the game.<br/>
                    /// As clarification, EndSession events usually will not be passed from Web based games.<br/>
                    /// <br/>
                    /// <b>NOTE:</b> EndSession affects internal properties and counters:
                    /// <ul>
                    ///     <li>SessionId</li>
                    ///     <li>StepNumber</li>
                    ///     <li>EventNumber</li>
                    /// </ul>
                    /// StepNumber and EventNumber sets to 0 (zero). SessionId sets to new GUID.<br/>
                    /// <b>NOTE:</b> If you can handle application shutdown or freezing which means End of the user Session, please wait the end of this method to prevent loosing this event.
                    /// </remarks>
                    /// <param name="payload">Additional set of key/values which should be sent with this event.</param>
                    /// <returns>IAsyncAction - should be completed when event is successfully validated and prepared to be sent.</returns>
                    TrackingManager.prototype.EndSession = function (payload) {
                        var _this = this;
                        if (typeof payload === "undefined") { payload = null; }
                        return this._background.Invoke(function () {
                            var message = _this.CreateEventMessage("EndSession", payload);

                            _this._environment.SessionId = Guid().toString();
                            _this._environment.StepNumber = 0;
                            _this._environment.EventNumber = 0;

                            _this._persistentQueue.Enqueue(message);
                        });
                    };

                    /// <summary>
                    /// Tracks the beginning of game play.
                    /// </summary>
                    /// <remarks>
                    /// A game play is based on the lowest level of the game a user can play.
                    /// For example, if the game has a map progression and each point on the map has multiple levels, the game play events should fire for the lowest ‘level’ of the game.
                    /// Each BeginGamePlay event needs to generate a GamePlayID by the game which will then be used for ALL events that occur within the game play.
                    /// If a user has already played a game, where a BeginGamePlay event has already fired, another BeginGamePlay event cannot fire unless there is an EndGamePlay event closing out the previous
                    /// BeginGamePlay event in the current session.<br/>
                    /// <br/>
                    /// <b>NOTE:</b>You can specify NULL instead of GamePlayId.
                    /// This method generates it automatically for this case.
                    /// </remarks>
                    /// <param name="gamePlayId">Id of your game play. This value should be unique and should be restored from PPR data if game is being continued. Specify NULL if you want to auto-generate this value.</param>
                    /// <param name="level">The level of the game.</param>
                    /// <param name="isReplay">true if game is being played again.</param>
                    /// <param name="gameMode">Mode of your game. Associated with your GamePlayId  automatically. Not required.</param>
                    /// <param name="gameSubMode">SubMode of your game. Associated with your GamePlayId  automatically. Not required.</param>
                    /// <param name="payload">Additional set of key/values which should be sent with this event.</param>
                    /// <returns>IAsyncAction - should be completed when event is successfully validated and prepared to be sent.</returns>
                    TrackingManager.prototype.BeginGamePlay = function (gamePlayId, level, isReplay, gameMode, gameSubMode, payload) {
                        var _this = this;
                        if (typeof gameMode === "undefined") { gameMode = null; }
                        if (typeof gameSubMode === "undefined") { gameSubMode = null; }
                        if (typeof payload === "undefined") { payload = null; }
                        return this._background.Invoke(function () {
                            var gamePlayContext = _this.CreateGamePlayContext(gamePlayId, gameMode, gameSubMode);
                            _this._environment.SetGamePlayContext(gamePlayContext);

                            var message = _this.CreateEventMessage("BeginGamePlay", payload, _this._environment.GamePlayId);
                            message.Payload["Level"] = level;
                            message.Payload["IsReplay"] = isReplay;

                            _this._persistentQueue.Enqueue(message);

                            var currentGamePlayId = _this.GetCurrentGamePlayId(gamePlayId);
                            _this.RemoveCounters(currentGamePlayId);
                        });
                    };

                    /// <summary>
                    /// Tracks pausing of game play.
                    /// </summary>
                    /// <remarks>
                    /// This event should be passed any time the game has been paused either by the user actually pausing the game or if the game notices the player has lost focus on the game.
                    /// This event should always pass the GamePlayID generated by the BeginGamePlay event for that game. <br/>
                    /// <br/>
                    /// <b>NOTE:</b>You can specify NULL instead of GamePlayId.
                    /// SDK generates it automatically for this case. But in this case you should call BeginGamePlay before (in current game running),
                    /// because BeginGamePlay only does auto-generation of GamePlayId property.
                    /// </remarks>
                    /// <param name="gamePlayId">Id of your game play. This value should be unique and should be restored from PPR data if game is being continued.</param>
                    /// <param name="level">The level of the game.</param>
                    /// <param name="score">Score of the game.</param>
                    /// <param name="payload">Additional set of key/values which should be sent with this event.</param>
                    /// <returns>IAsyncAction - should be completed when event is successfully validated and prepared to be sent.</returns>
                    TrackingManager.prototype.PauseGamePlay = function (gamePlayId, level, score, payload) {
                        var _this = this;
                        if (typeof payload === "undefined") { payload = null; }
                        return this._background.Invoke(function () {
                            var currentGamePlayId = _this.GetCurrentGamePlayId(gamePlayId);
                            _this.AssertNotNull(currentGamePlayId);

                            var message = _this.CreateEventMessage("PauseGamePlay", payload, currentGamePlayId);
                            message.Payload["Level"] = level;
                            message.Payload["Score"] = score;

                            _this.FillCountersTo(message, currentGamePlayId);

                            _this._persistentQueue.Enqueue(message);

                            _this.RemoveCounters(currentGamePlayId);
                        });
                    };

                    /// <summary>
                    /// Tracks resuming of game play.
                    /// </summary>
                    /// <remarks>
                    /// This event should fire if the game has been paused at some point and the user is coming back and picking up a game at a level they were playing before.
                    /// This will be recognized when the game loads up for the user and they are able to resume playing the game from the previous progression.
                    /// As a note, a game play is defined as the lowest denominator of play, which would be a level.
                    /// So, this event should not fire if a user is coming back to a ‘world map’ type area.
                    /// This event should also fire a GamePlayID that corresponds to the one generated by the BeginGamePlay event for that game play.
                    /// This should also match the GamePlayID passed by the PauseGamePlay event.
                    /// <br />
                    /// <b>NOTE:</b>You can specify NULL instead of GamePlayId.
                    /// SDK generates it automatically for this case. But in this case you should call BeginGamePlay before (in current game running),
                    /// because BeginGamePlay only does auto-generation of GamePlayId property.
                    /// </remarks>
                    /// <param name="gamePlayId">Id of your game play. This value should be unique and should be restored from PPR data if game is being continued.</param>
                    /// <param name="level">The level of the game.</param>
                    /// <param name="gameMode">Mode of your game. Associated with your GamePlayId  automatically. Not required.</param>
                    /// <param name="gameSubMode">SubMode of your game. Associated with your GamePlayId  automatically. Not required.</param>
                    /// <param name="payload">Additional set of key/values which should be sent with this event.</param>
                    /// <returns>IAsyncAction - should be completed when event is successfully validated and prepared to be sent.</returns>
                    TrackingManager.prototype.ResumeGamePlay = function (gamePlayId, level, gameMode, gameSubMode, payload) {
                        var _this = this;
                        if (typeof gameMode === "undefined") { gameMode = null; }
                        if (typeof gameSubMode === "undefined") { gameSubMode = null; }
                        if (typeof payload === "undefined") { payload = null; }
                        return this._background.Invoke(function () {
                            if (_this.IsSpecified(gamePlayId)) {
                                var gamePlayContext = _this.CreateGamePlayContext(gamePlayId, gameMode, gameSubMode);
                                _this._environment.SetGamePlayContext(gamePlayContext);
                            }

                            var currentGamePlayId = _this.GetCurrentGamePlayId(gamePlayId);
                            _this.AssertNotNull(currentGamePlayId);

                            var message = _this.CreateEventMessage("ResumeGamePlay", payload, currentGamePlayId);
                            message.Payload["Level"] = level;

                            _this._persistentQueue.Enqueue(message);

                            _this.RemoveCounters(currentGamePlayId);
                        });
                    };

                    /// <summary>
                    /// Tracks ending of game play event.
                    /// </summary>
                    /// <remarks>
                    /// This event denotes the end of a play and is used to close out a BeginGamePlay event.
                    /// The GamePlayID passed with this event has to match the GamePlayID generated by the corresponding BeginGamePlay event.
                    /// EndGamePlay events also capture all the pertinent records about the gameplay itself such as score, endgamestatus, number of turns in the level, etc.
                    /// These end game parameters/payloads can be customized based on the game and the stats the development team would like to track.<br />
                    /// <br />
                    /// <b>NOTE:</b>You can specify NULL instead of GamePlayId.
                    /// SDK generates it automatically for this case. But in this case you should call BeginGamePlay before (in current game running),
                    /// because BeginGamePlay only does auto-generation of GamePlayId property.
                    /// </remarks>
                    /// <param name="gamePlayId">Id of your game play. This value should be unique and should be restored from PPR data if game is being continued.</param>
                    /// <param name="level">The level of the game.</param>
                    /// <param name="score">Score of the game.</param>
                    /// <param name="endState">The final state of the game play, possible values: Undefined, Quit, Succeeded, Failed, Replay.</param>
                    /// <param name="payload">Additional set of key/values which should be sent with this event.</param>
                    /// <returns>IAsyncAction - should be completed when event is successfully validated and prepared to be sent.</returns>
                    TrackingManager.prototype.EndGamePlay = function (gamePlayId, level, score, endState, payload) {
                        var _this = this;
                        if (typeof payload === "undefined") { payload = null; }
                        return this._background.Invoke(function () {
                            var currentGamePlayId = _this.GetCurrentGamePlayId(gamePlayId);
                            _this.AssertNotNull(currentGamePlayId);

                            var message = _this.CreateEventMessage("EndGamePlay", payload, currentGamePlayId);
                            message.Payload["Level"] = level;
                            message.Payload["Score"] = score;
                            message.Payload["EndState"] = endState.toString();

                            _this.FillCountersTo(message, currentGamePlayId);

                            _this._persistentQueue.Enqueue(message);

                            _this._environment.ClearGamePlayContext(currentGamePlayId);
                        });
                    };

                    /// <summary>
                    /// Increases specified counter by name.
                    /// All collected counters will be sent on EndGamePlay and PauseGamePlay.
                    /// </summary>
                    /// <remarks>
                    /// <b>Note:</b> We are storingly reccomend you to use counters inside the game play. In other words you have to call this method: <br/>
                    /// between BeginGamePlay and EndGamePlay or <br/>
                    /// between BeginGamePlay and PauseGamePlay or<br/>
                    /// between ResumeGamePlay and EndGamePlay.
                    /// <br/>
                    /// <br/>
                    /// <b>Important:</b> Counter are being aggregated by GamePlayId.
                    /// So, if you are calling IncreaseCounter method for different game play ids but use the same counter name it will have different values for different game plays.<br/>
                    /// <b>Note:</b> By default counter will be incremented on 1. You can also specify your own value you want, which will be used to add to your counter.<br/>
                    /// <b>Note:</b> You may also use negative values to decrement counter.
                    /// </remarks>
                    /// <param name="gamePlayId">Id of your game play. This value should be unique and should be restored from PPR data if game is being continued.</param>
                    /// <param name="name">The name of your counter.</param>
                    /// <param name="value"></param>
                    /// <returns>IAsyncAction - should be completed when event is successfully validated and prepared to be sent.</returns>
                    TrackingManager.prototype.IncreaseCounter = function (gamePlayId, name, value) {
                        var _this = this;
                        if (typeof value === "undefined") { value = 1; }
                        return this._background.Invoke(function () {
                            // now the name of the counter will be validated as a Payload Key
                            // AssertValidName(name);
                            var currentGamePlayId = _this.GetCurrentGamePlayId(gamePlayId);
                            _this.AssertNotNull(currentGamePlayId, "Current gamePlayId could not detected. Please check that you specified valid GamePlayId or you have called BeginGamePlay before.");

                            var gamePlayContext = _this._environment.GetGamePlayContext(currentGamePlayId);
                            _this.AssertGamePlayContextNotNull(gamePlayContext);

                            _this.IncreaseCounterStats(name, value, gamePlayContext);
                        });
                    };

                    /// <summary>
                    /// Tracks purchasing of something during the game play.
                    /// </summary>
                    /// <remarks>
                    /// This event tracks the result of a purchase using real world currency whether the user either completes the purchase, cancels the purchase or the purchase fails due to payment error or
                    /// a technical error from the payment provider.
                    /// The TransactionIDs for successful purchase events should be the TransactionID/OrderID that is passed back to our system by the payment system.
                    /// If the Purchase event reflects a canceled or failed purchase and no TransactionID/OrderID is passed back by the payment system, the game/app should generate a random ID here.
                    /// </remarks>
                    /// <param name="transaction">Information about transaction.</param>
                    /// <param name="purchaseItem">Information about item was purchased.</param>
                    /// <param name="priceInfo">Information about price.</param>
                    /// <param name="location">The name of control or place which was used to initiate transaction.</param>
                    /// <param name="payload">Additional set of key/values which should be sent with this event.</param>
                    /// <returns>IAsyncAction - should be completed when event is successfully validated and prepared to be sent.</returns>
                    TrackingManager.prototype.Purchase = function (transaction, purchaseItem, priceInfo, location, payload) {
                        var _this = this;
                        if (typeof location === "undefined") { location = null; }
                        if (typeof payload === "undefined") { payload = null; }
                        return this._background.Invoke(function () {
                            var message = _this.CreateEventMessage("Purchase", payload);

                            // fill transaction details
                            message.Payload["TransactionId"] = transaction.Id;
                            message.Payload["TransactionProvider"] = transaction.Provider;
                            message.Payload["TransactionResult"] = transaction.Result.toString();

                            // fill item details
                            message.Payload["ItemKey"] = purchaseItem.Key;
                            message.Payload["ItemName"] = purchaseItem.Name;
                            message.Payload["ItemType"] = purchaseItem.Type;
                            message.Payload["ItemQuantity"] = purchaseItem.Quantity;

                            // fill price details
                            message.Payload["Price"] = priceInfo.Price;
                            message.Payload["Amount"] = priceInfo.Amount;
                            message.Payload["TaxAmount"] = priceInfo.TaxAmount;

                            if (priceInfo.CurrencyCode) {
                                message.Payload["CurrencyCode"] = priceInfo.CurrencyCode;
                            }

                            // fill location
                            message.Payload["Location"] = location;

                            _this._persistentQueue.Enqueue(message);
                        });
                    };

                    /// <summary>
                    /// Tracks purchasing of something in game play by using the virtual currency (internal game currency).
                    /// </summary>
                    /// <remarks>
                    /// Unlike the Purchase event, this is used to track any purchase of in game items using virtual currency (not real world money).
                    /// As such, this event has additional payload values that track the currency being used and the amount of that currency that is used on the item.
                    /// The TransactionIDs for this event should be a randomly generated ID that is created by the game/app when the purchase occurs.
                    /// </remarks>
                    /// <param name="location">The name of control or place which was used to initiate transaction.</param>
                    /// <param name="payload">Additional set of key/values which should be sent with this event.</param>
                    /// <param name="transaction">Information about transaction.</param>
                    /// <param name="purchaseItem">Information about item was purchased.</param>
                    /// <param name="paymentItem">Information about an item which was sold.</param>
                    /// <returns>IAsyncAction - should be completed when event is successfully validated and prepared to be sent.</returns>
                    TrackingManager.prototype.PurchaseVirtual = function (transaction, purchaseItem, paymentItem, location, payload) {
                        var _this = this;
                        if (typeof location === "undefined") { location = null; }
                        if (typeof payload === "undefined") { payload = null; }
                        return this._background.Invoke(function () {
                            var message = _this.CreateEventMessage("PurchaseVirtual", payload);

                            // fill transaction details
                            message.Payload["TransactionId"] = transaction.Id;
                            message.Payload["TransactionProvider"] = transaction.Provider;
                            message.Payload["TransactionResult"] = transaction.Result.toString();

                            // fill item details
                            message.Payload["ItemKey"] = purchaseItem.Key;
                            message.Payload["ItemName"] = purchaseItem.Name;
                            message.Payload["ItemType"] = purchaseItem.Type;
                            message.Payload["ItemQuantity"] = purchaseItem.Quantity;

                            // fill price details
                            message.Payload["PaymentItemKey"] = paymentItem.Key;
                            message.Payload["PaymentItemName"] = paymentItem.Name;
                            message.Payload["PaymentItemType"] = paymentItem.Type;
                            message.Payload["PaymentItemQuantity"] = paymentItem.Quantity;

                            // fill location
                            message.Payload["Location"] = location;

                            _this._persistentQueue.Enqueue(message);
                        });
                    };

                    /// <summary>
                    /// Tracks of updating user inventory event.
                    /// </summary>
                    /// <remarks>
                    /// This event records any updates to a user’s inventory based for items that are not used immediately.
                    /// It will record any events that cause a user’s inventory to change such as purchasing, earning and using items in the inventory.
                    /// If an item is a temporary boost that is consumed immediately, there will be no InventoryUpdate event that fires for this, but if the item is something that will persist
                    /// in the inventory of a user and can be used later, than an InventoryUpdate event is required.<br/>
                    /// For example,<br/>
                    /// If a user purchases a consumable item that is used immediately upon purchasing it, such as a sword in Release the Ninja, no InventoryUpdate event will fire for that.<br/>
                    /// If a user purchases an item that can be saved for later use or using an item later, such as boosts in Mahjongg Dimensions Blast, the InventoryUpdate event must be used.
                    /// </remarks>
                    /// <param name="item">Info about an item was updated.</param>
                    /// <param name="transaction">Not required additional information </param>
                    /// <param name="payload">Additional set of key/values which should be sent with this event.</param>
                    /// <returns>IAsyncAction - should be completed when event is successfully validated and prepared to be sent.</returns>
                    TrackingManager.prototype.InventoryUpdate = function (item, transaction, payload) {
                        var _this = this;
                        if (typeof transaction === "undefined") { transaction = null; }
                        if (typeof payload === "undefined") { payload = null; }
                        return this._background.Invoke(function () {
                            var message = _this.CreateEventMessage("InventoryUpdate", payload);

                            message.Payload["ItemKey"] = item.Key;
                            message.Payload["ItemName"] = item.Name;
                            message.Payload["ItemType"] = item.Type;
                            message.Payload["ItemQuantity"] = item.Quantity;

                            transaction = transaction ? transaction : new InventoryTransactionInfo(null, null, null);
                            message.Payload["TransactionId"] = transaction.Id;
                            message.Payload["TransactionProvider"] = transaction.Provider;
                            message.Payload["TransactionType"] = transaction.Type;

                            _this._persistentQueue.Enqueue(message);
                        });
                    };

                    /// <summary>
                    /// Tracks updating of gender information.
                    /// </summary>
                    /// <remarks>
                    /// This event will be used if game knows something about gender of user.
                    /// </remarks>
                    /// <param name="gender">Known gender information.</param>
                    /// <param name="payload">Additional set of key/values which should be sent with this event.</param>
                    /// <returns>IAsyncAction - should be completed when event is successfully validated and prepared to be sent.</returns>
                    TrackingManager.prototype.UserGender = function (gender, payload) {
                        var _this = this;
                        if (typeof payload === "undefined") { payload = null; }
                        return this._background.Invoke(function () {
                            var message = _this.CreateEventMessage("UserGender", payload);
                            message.Payload["Gender"] = Gender[gender];

                            _this._persistentQueue.Enqueue(message);
                        });
                    };

                    /// <summary>
                    /// Tracks updating of Birthday information.
                    /// </summary>
                    /// <remarks>
                    /// This event will be used if game knows something about date of birth of user.
                    /// </remarks>
                    /// <param name="dateOfBirth">Known date of birth.</param>
                    /// <param name="payload">Additional set of key/values which should be sent with this event.</param>
                    /// <returns>IAsyncAction - should be completed when event is successfully validated and prepared to be sent.</returns>
                    TrackingManager.prototype.UserDateOfBirth = function (dateOfBirth, payload) {
                        var _this = this;
                        if (typeof payload === "undefined") { payload = null; }
                        return this._background.Invoke(function () {
                            var message = _this.CreateEventMessage("UserDateOfBirth", payload);
                            message.Payload["DateOfBirth"] = dateOfBirth;

                            _this._persistentQueue.Enqueue(message);
                        });
                    };

                    /// <summary>
                    /// Tracks updating of location information.
                    /// </summary>
                    /// <remarks>
                    /// This event will be used if game knows something about current location of user (Example: NY, Simfy, Washington, DC).
                    /// </remarks>
                    /// <param name="location">New location of the user.</param>
                    /// <param name="payload">Additional set of key/values which should be sent with this event.</param>
                    /// <returns>IAsyncAction - should be completed when event is successfully validated and prepared to be sent.</returns>
                    TrackingManager.prototype.UserLocation = function (location, payload) {
                        var _this = this;
                        if (typeof payload === "undefined") { payload = null; }
                        return this._background.Invoke(function () {
                            var message = _this.CreateEventMessage("UserLocation", payload);
                            message.Payload["Location"] = location;

                            _this._persistentQueue.Enqueue(message);
                        });
                    };

                    /// <summary>
                    /// Tracks GPS location of the user.
                    /// </summary>
                    /// <remarks>
                    /// To use this event the game should access GPS coordinates.
                    /// </remarks>
                    /// <param name="latitude">New latitude</param>
                    /// <param name="longitude">New longitude</param>
                    /// <param name="accuracy">Known accuracy of coordinates.</param>
                    /// <param name="payload">Additional set of key/values which should be sent with this event.</param>
                    /// <returns>IAsyncAction - should be completed when event is successfully validated and prepared to be sent.</returns>
                    TrackingManager.prototype.UserLocationByGPS = function (latitude, longitude, accuracy, payload) {
                        var _this = this;
                        if (typeof payload === "undefined") { payload = null; }
                        return this._background.Invoke(function () {
                            var message = _this.CreateEventMessage("UserLocationByGPS", payload);
                            message.Payload["LocationLatitude"] = latitude;
                            message.Payload["LocationLongitude"] = longitude;
                            message.Payload["LocationAccuracy"] = accuracy;

                            _this._persistentQueue.Enqueue(message);
                        });
                    };

                    /// <summary>
                    /// Tracks changes of identify of user.
                    /// </summary>
                    /// <remarks>
                    /// The game may send this event in case when user changes Identity provider like Facebook, GooglePlus and so forth.
                    /// </remarks>
                    /// <param name="userIdentity">Information about user identity: userId and name of the platform which provides the identity (e.g.: Facebook, Google, Live).</param>
                    /// <param name="payload">Additional set of key/values which should be sent with this event.</param>
                    /// <returns>IAsyncAction - should be completed when event is successfully validated and prepared to be sent.</returns>
                    TrackingManager.prototype.UserIdentity = function (userIdentity, payload) {
                        var _this = this;
                        if (typeof payload === "undefined") { payload = null; }
                        return this._background.Invoke(function () {
                            var message = _this.CreateEventMessage("UserIdentity", payload);

                            _this.AssertUserNotNull(userIdentity);

                            message.Payload["Identity"] = userIdentity.Id;
                            message.Payload["IdentityProvider"] = userIdentity.Provider;

                            _this._persistentQueue.Enqueue(message);
                        });
                    };

                    /// <summary>
                    /// Just sends default event message.
                    /// </summary>
                    /// <remarks>
                    /// This event just says Analytics subsystem that game is active. Usually it just increases traffic of your game :).
                    /// </remarks>
                    /// <param name="payload">Additional set of key/values which should be sent with this event.</param>
                    /// <returns>IAsyncAction - should be completed when event is successfully validated and prepared to be sent.</returns>
                    TrackingManager.prototype.Ping = function (payload) {
                        var _this = this;
                        if (typeof payload === "undefined") { payload = null; }
                        return this._background.Invoke(function () {
                            var message = _this.CreateEventMessage("Ping", payload);

                            _this._persistentQueue.Enqueue(message);
                        });
                    };

                    /// <summary>
                    /// Allows you to track errors.
                    /// </summary>
                    /// <remarks>
                    /// The game can use this event to report about internal critical errors.
                    /// </remarks>
                    /// <param name="message">Error message.</param>
                    /// <param name="exception">Exception to track.</param>
                    /// <param name="payload">Additional set of key/values which should be sent with this event.</param>
                    /// <returns>IAsyncAction - should be completed when event is successfully validated and prepared to be sent.</returns>
                    TrackingManager.prototype.Error = function (message, exception, payload) {
                        var _this = this;
                        if (typeof payload === "undefined") { payload = null; }
                        return this._background.Invoke(function () {
                            var errorMessage = _this.CreateEventMessage("Error", payload);
                            errorMessage.Payload["Message"] = message;
                            errorMessage.Payload["Exception"] = _this.GetMessage(exception);

                            _this._persistentQueue.Enqueue(errorMessage);
                        });
                    };

                    /// <summary>
                    /// Allows you to send custom event with a custom name.
                    /// </summary>
                    /// <param name="eventName">
                    ///     The name of your event, which should be used to identify your custom requests and
                    ///     allow to filter and process them additionally. Should be not null or empty.
                    /// </param>
                    /// <param name="important">Specifies if that custom event is so important to store it in PersistentStorage or just store it in memory which may cause some increase performance.</param>
                    /// <param name="payload">Additional set of key/values which should be sent with this event. </param>
                    /// <returns>IAsyncAction - should be completed when event is successfully validated and prepared to be sent.</returns>
                    /// <remarks>
                    /// <b>NOTE:</b> Custom event should be processed automatically by ETL. But some specific reports and dashboards will not take it into account.
                    /// Any way If you are creating a new event you should notify connect (platform) developers to make sure this event will be processed as you wish.
                    /// </remarks>
                    TrackingManager.prototype.CustomEvent = function (eventName, important, payload) {
                        var _this = this;
                        if (typeof important === "undefined") { important = true; }
                        if (typeof payload === "undefined") { payload = null; }
                        return this._background.Invoke(function () {
                            var message = _this.CreateEventMessage(eventName, payload);

                            if (important) {
                                _this._persistentQueue.Enqueue(message);
                            } else {
                                _this._notImportantQueue.Enqueue(message);
                            }
                        });
                    };

                    /// <summary>
                    /// Tracks award earned by the user.
                    /// </summary>
                    /// <remarks>
                    /// The game may notify about new award is earned. This event will help game designers and level designers to check how some awards are hard to be achieved.
                    /// </remarks>
                    /// <param name="award">Name of award earned</param>
                    /// <param name="payload">Additional set of key/values which should be sent with this event.</param>
                    /// <returns>IAsyncAction - should be completed when event is successfully validated and prepared to be sent.</returns>
                    TrackingManager.prototype.AwardEarned = function (award, payload) {
                        var _this = this;
                        if (typeof payload === "undefined") { payload = null; }
                        return this._background.Invoke(function () {
                            var message = _this.CreateEventMessage("AwardEarned", payload);
                            message.Payload["Award"] = award;
                            _this._persistentQueue.Enqueue(message);
                        });
                    };

                    /// <summary>
                    /// Tracks ad shown to the user.
                    /// </summary>
                    /// <remarks>
                    /// This event is used to track every time an ad is loaded in any area of our game.
                    /// There are specific payload values we would like to get such as Ad Size, Ad Campaign, Ad Placement, etc...
                    /// </remarks>
                    /// <param name="adProvider">Name of provider of ad.  Use "House" for in-house ads.</param>
                    /// <param name="adDimensions">Width and height of ad in the format of "{width}x{height}".</param>
                    /// <param name="ad">Identifier or content of ad.</param>
                    /// <param name="payload">Additional set of key/values which should be sent with this event.</param>
                    /// <returns>IAsyncAction - should be completed when event is successfully validated and prepared to be sent.</returns>
                    TrackingManager.prototype.AdImpression = function (adProvider, adDimensions, ad, payload) {
                        var _this = this;
                        if (typeof payload === "undefined") { payload = null; }
                        return this._background.Invoke(function () {
                            var message = _this.CreateEventMessage("AdImpression", payload);
                            message.Payload["AdProvider"] = adProvider;
                            message.Payload["AdDimensions"] = adDimensions;
                            message.Payload["Ad"] = ad;
                            _this._persistentQueue.Enqueue(message);
                        });
                    };

                    /// <summary>
                    /// Tracks ad clicked on by the user.
                    /// </summary>
                    /// <remarks>
                    /// This event tracks the number of times an ad was actually clicked on and not just viewed. The payload values in this event matches that in the AdImpression event.
                    /// </remarks>
                    /// <param name="adProvider">Name of provider of ad.  Use "House" for in-house ads.</param>
                    /// <param name="adDimensions">Width and height of ad in the format of "{width}x{height}".</param>
                    /// <param name="ad">Identifier or content of ad.</param>
                    /// <param name="payload">Additional set of key/values which should be sent with this event.</param>
                    /// <returns>IAsyncAction - should be completed when event is successfully validated and prepared to be sent.</returns>
                    TrackingManager.prototype.AdClick = function (adProvider, adDimensions, ad, payload) {
                        var _this = this;
                        if (typeof payload === "undefined") { payload = null; }
                        return this._background.Invoke(function () {
                            var message = _this.CreateEventMessage("AdClick", payload);
                            message.Payload["AdProvider"] = adProvider;
                            message.Payload["AdDimensions"] = adDimensions;
                            message.Payload["Ad"] = ad;
                            _this._persistentQueue.Enqueue(message);
                        });
                    };

                    /// <summary>
                    /// Tracks a page viewed by the user.
                    /// </summary>
                    /// <remarks>
                    /// These events are used to get navigation tracking in the game.
                    /// They should be used in any area where the development team would like to track what users are clicking on or how they are moving in through the game based on the screens
                    /// or actions the user has seen and the order in which they saw them.<br/>
                    /// <br/>
                    /// <b>NOTE:</b> You may not specify stepNumber (or pass null). This method will increase StepNumber automatically. EndSession event sets this counter to 0 (zero).
                    /// </remarks>
                    /// <param name="pageName">URL or name of page viewed.</param>
                    /// <param name="stepNumber">Not required parameter.
                    /// Actually parameter stepNumber will be increased automatically for each call of this method.
                    /// But if you want, you can specify the value directly.</param>
                    /// <param name="payload">Additional set of key/values which should be sent with this event.</param>
                    /// <returns>IAsyncAction - should be completed when event is successfully validated and prepared to be sent.</returns>
                    TrackingManager.prototype.PageView = function (pageName, stepNumber, payload) {
                        var _this = this;
                        if (typeof stepNumber === "undefined") { stepNumber = null; }
                        if (typeof payload === "undefined") { payload = null; }
                        return this._background.Invoke(function () {
                            var message = _this.CreateEventMessage("PageView", payload);

                            _this.AssertPositive(stepNumber);

                            message.Payload["PageName"] = pageName;
                            var nextStep = stepNumber ? stepNumber : _this._environment.StepNumber++;
                            message.Payload["Step"] = nextStep; // incrementing step for each call

                            _this._persistentQueue.Enqueue(message);
                        });
                    };

                    /// <summary>
                    /// Tracks outgoing viral activity of the user (e.g.: sending invites, gifts, message and so forth).
                    /// </summary>
                    /// <param name="requestId">GUID generated by the app to distinctly identify this ViralRequest. When user accepts viralRequest the game must track ViralResponse with this UniqueID.</param>
                    /// <param name="type">Type shows if the ViralRequest was a ‘gift’ or an ‘invite’ or any other type of viral feature in the game.</param>
                    /// <param name="viralItem">The item of the gift or the nature of the request being sent (this would include the post type).</param>
                    /// <param name="sentUserInfo">The UserIdentity information about the person that is getting the gift or invite or any other type of ViralRequest.</param>
                    /// <param name="payload">Additional set of key/values which should be sent with this event.</param>
                    /// <returns>IAsyncAction - should be completed when event is successfully validated and prepared to be sent.</returns>
                    TrackingManager.prototype.ViralRequest = function (requestId, type, viralItem, sentUserInfo, payload) {
                        var _this = this;
                        if (typeof sentUserInfo === "undefined") { sentUserInfo = null; }
                        if (typeof payload === "undefined") { payload = null; }
                        return this._background.Invoke(function () {
                            var message = _this.CreateEventMessage("ViralRequest", payload);

                            _this.AssertNotEmpty(requestId);
                            _this.AssertValidEnum(type);

                            message.Payload["ViralType"] = ViralType[type];
                            message.Payload["ViralItem"] = viralItem;
                            message.Payload["ViralRequestId"] = requestId.toString();

                            if (sentUserInfo != null) {
                                message.Payload["SentUserId"] = sentUserInfo.Id;
                                message.Payload["IdentityProvider"] = sentUserInfo.Provider;
                            }

                            _this._persistentQueue.Enqueue(message);
                        });
                    };

                    /// <summary>
                    /// Tracks incomming viral requests.
                    /// </summary>
                    /// <param name="requestId">The unique id from the ViralRequest.</param>
                    /// <param name="type">Type shows if the ViralRequest was a ‘gift’ or an ‘invite’ or any other type of viral feature in the game.</param>
                    /// <param name="viralItem">The item of the gift or nature of the post or invite the request was sent</param>
                    /// <param name="payload">Additional set of key/values which should be sent with this event.</param>
                    /// <returns>IAsyncAction - should be completed when event is successfully validated and prepared to be sent.</returns>
                    TrackingManager.prototype.ViralResponse = function (requestId, type, viralItem, payload) {
                        var _this = this;
                        if (typeof payload === "undefined") { payload = null; }
                        return this._background.Invoke(function () {
                            var message = _this.CreateEventMessage("ViralResponse", payload);

                            _this.AssertNotEmpty(requestId);
                            _this.AssertValidEnum(type);

                            message.Payload["ViralType"] = ViralType[type];
                            message.Payload["ViralItem"] = viralItem;
                            message.Payload["ViralRequestId"] = requestId.toString();

                            _this._persistentQueue.Enqueue(message);
                        });
                    };

                    /// <summary>
                    /// Tracks any user activity such as clicks or touch which does not causes other events. Calling this method when user is acting in the game will increase accuracy of calculation of session time.
                    /// </summary>
                    /// <remarks>
                    /// This method resets LastEvent time which is used by Idle detection functionality,
                    /// so if your game tracks user input or screen orientation of the device using this method, it will prevent sending an Idle
                    /// event even if your game does not send any other game events.
                    /// </remarks>
                    /// <returns>IAsyncAction - should be completed when event is successfully validated and prepared to be sent.</returns>
                    TrackingManager.prototype.Activity = function () {
                        var _this = this;
                        return this._background.Invoke(function () {
                            // just reset last event time which is used IdleDetectionWorker to calculate Idle time.
                            _this._lastEventTime = new Date();
                        });
                    };

                    //        #endregion
                    //        #region Private methods
                    // TODO: think move such assertion to an event validator to prevent sending exception.
                    TrackingManager.prototype.AssertPositive = function (stepNumber) {
                        if (typeof stepNumber != "undefined" && stepNumber < 0) {
                            throw new AnalyticsException("Parameter must be positive or 0 (Zero).", "");
                        }
                    };

                    TrackingManager.prototype.CreateGamePlayContext = function (gamePlayId, gameMode, gameSubMode) {
                        var currentGamePlayId = gamePlayId;
                        if (typeof gamePlayId == "undefined" || gamePlayId == "" || this.IsNullOrWhiteSpace(gamePlayId)) {
                            currentGamePlayId = Guid();
                        }

                        return new SDK.GamePlayContext(currentGamePlayId, gameMode, gameSubMode);
                    };

                    TrackingManager.prototype.GetMessage = function (exception) {
                        if (!exception) {
                            return null;
                        }

                        var message = exception.toString();
                        return (message.length > this._settings.MaxPayloadValueLength) ? message.substring(0, this._settings.MaxPayloadValueLength) : message;
                    };

                    TrackingManager.prototype.CreateEventMessage = function (eventName, payload, gamePlayId) {
                        if (typeof payload === "undefined") { payload = null; }
                        if (typeof gamePlayId === "undefined") { gamePlayId = null; }
                        this._logger.Debug("CreateEventMessage start");
                        var message = new EventMessage();

                        message.EventName = eventName;
                        message.EventId = Guid();
                        message.EventTime = DateTime.Now.toString();
                        ;
                        message.AppId = this._environment.AppId;
                        message.HostId = this._environment.HostId;
                        message.SDK = this._environment.SDK;

                        this.FillPayload(message, payload);
                        this.FillGamePlayContext(message, gamePlayId);

                        this._lastEventTime = new Date();

                        return message;
                    };

                    TrackingManager.prototype.FillPayload = function (message, payload) {
                        this._logger.Debug("FillPayload start");

                        message.Payload = payload ? this.ClonePayload(payload) : new Object();
                        message.Payload["UserId"] = this._environment.UserId;
                        message.Payload["DeviceId"] = this._environment.DeviceId;
                        message.Payload["AppVersion"] = this._environment.AppVersion;
                        message.Payload["AppInstanceId"] = this._environment.AppInstanceId;
                        message.Payload["SessionId"] = this._environment.SessionId;
                        message.Payload["IsOffline"] = this._environment.IsOffline;

                        message.Payload["EventNumber"] = this._environment.EventNumber++;
                    };

                    TrackingManager.prototype.ClonePayload = function (object) {
                        var result = new Object();
                        for (var key in object) {
                            result[key] = object[key];
                        }

                        return result;
                    };

                    TrackingManager.prototype.FillGamePlayContext = function (message, gamePlayId) {
                        this._logger.Debug("FillGamePlayContext start");

                        var currentGamePlayId = gamePlayId ? gamePlayId : this._environment.GamePlayId;
                        message.Payload["GamePlayId"] = currentGamePlayId;

                        var context = this._environment.GetGamePlayContext(currentGamePlayId);
                        if (context == null) {
                            this._logger.Debug("FillGamePlayContext context == null; return");
                            return;
                        }

                        if (context.GameMode != null) {
                            message.Payload["GameMode"] = context.GameMode;
                        }

                        if (context.GameSubMode != null) {
                            message.Payload["GameSubMode"] = context.GameSubMode;
                        }
                    };

                    TrackingManager.prototype.IsNullOrWhiteSpace = function (value) {
                        // check not white space
                        if (typeof value == "string" && value.trim() == "") {
                            return false;
                        }
                        return (value == null || value.length === 0);
                    };

                    TrackingManager.prototype.AssertNotNull = function (gamePlayId, message) {
                        if (typeof message === "undefined") { message = null; }
                        var defaultMessage = "GamePlayId must be specified for this method. " + "Make sure that you specified GamePlayId for this method or method BeginGamePlay was called before this method.";

                        if (gamePlayId == null || gamePlayId.length === 0 || gamePlayId.trim().length == 0) {
                            var exceptionMessage = (message ? message : defaultMessage);
                            throw new AnalyticsException(exceptionMessage, "");
                        }
                    };

                    TrackingManager.prototype.AssertUserNotNull = function (user) {
                        if (!user) {
                            throw new AnalyticsException("User identity should be specified.", "");
                        }
                    };

                    TrackingManager.prototype.AssertValidEnum = function (type) {
                        if (!type || !ViralType[type] || Number(type) == NaN) {
                            //var strings = Enum.GetNames(type.GetType());
                            //var values = String.Join(", ", strings);
                            //                var value = ViralType[type];
                            var keyValuePairs = new Array();
                            for (var key in ViralType) {
                                if (!parseInt(key)) {
                                    var value = ViralType[key];
                                    keyValuePairs.push(key + "=" + value);
                                }
                            }
                            throw new AnalyticsException("Parameter must have the following values: " + keyValuePairs.join(), "ArgumentOutOfRange");
                        }
                    };

                    TrackingManager.prototype.AssertNotEmpty = function (requestId) {
                        if (requestId == null || requestId.length === 0) {
                            throw new AnalyticsException("Parameter must be valid, not empty GUID.", "");
                        }
                    };

                    TrackingManager.prototype.GetCurrentGamePlayId = function (gamePlayId) {
                        var currentGamePlayId = this._environment.GamePlayId;
                        if (this.IsSpecified(gamePlayId)) {
                            currentGamePlayId = gamePlayId;
                        }
                        return currentGamePlayId;
                    };

                    TrackingManager.prototype.IsSpecified = function (gamePlayId) {
                        return !(gamePlayId == null || gamePlayId.length === 0);
                    };

                    TrackingManager.prototype.FillCountersTo = function (message, currentGamePlayId) {
                        var gamePlayContext = this._environment.GetGamePlayContext(currentGamePlayId);

                        // TODO: think about is this case if valid.
                        if (gamePlayContext != null) {
                            for (var key in gamePlayContext.Stats) {
                                message.Payload[key] = gamePlayContext.Stats[key];
                            }
                        }
                    };

                    TrackingManager.prototype.IncreaseCounterStats = function (name, value, gamePlayContext) {
                        if (!gamePlayContext.Stats.hasOwnProperty(name)) {
                            gamePlayContext.Stats[name] = 0;
                        }

                        gamePlayContext.Stats[name] += value;
                    };

                    TrackingManager.prototype.RemoveCounters = function (currentGamePlayId) {
                        var gamePlayContext = this._environment.GetGamePlayContext(currentGamePlayId);

                        // TODO: think about is this case if valid.
                        if (gamePlayContext != null) {
                            gamePlayContext.Stats = new Object();
                        }
                    };

                    TrackingManager.prototype.AssertGamePlayContextNotNull = function (gamePlayContext) {
                        if (!gamePlayContext) {
                            throw new AnalyticsException("GamePlayContext for the specified gamePlayId could not be found. " + "Please check you called BeginGamePlay or ResumeGamePlay before.", "");
                        }
                    };
                    return TrackingManager;
                })();
                SDK.TrackingManager = TrackingManager;
            })(Analytics.SDK || (Analytics.SDK = {}));
            var SDK = Analytics.SDK;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (SDK) {
                var PersistentQueue = Arkadium.Connect.Analytics.SDK.Impl.Queue.PersistentQueue;
                var LimitedQueue = Arkadium.Connect.Analytics.SDK.Impl.Queue.LimitedQueue;
                var MemoryQueue = Arkadium.Connect.Analytics.SDK.Impl.Queue.MemoryQueue;

                var SilentModeKillSwitch = Arkadium.Connect.Analytics.SDK.Impl.Background.SilentModeKillSwitch;
                var SilentValidationQueue = Arkadium.Connect.Analytics.SDK.Impl.Validation.SilentValidationQueue;
                var BreakingValidationQueue = Arkadium.Connect.Analytics.SDK.Impl.Validation.BreakingValidationQueue;

                var EmptyLogger = Arkadium.Connect.Analytics.SDK.Impl.Logging.EmptyLogger;

                var AnalyticsException = Arkadium.Connect.Analytics.SDK.Impl.Exceptions.AnalyticsException;

                var FileSystemFilter = Arkadium.Connect.Analytics.SDK.Impl.FileSystem.FileSystemFilter;
                var SafeQueue = Arkadium.Connect.Analytics.SDK.Impl.Queue.SafeQueue;

                /// <summary>
                /// Implements all initialization features of SDK.
                /// </summary>
                var TrackingSubsystem = (function () {
                    function TrackingSubsystem() {
                        this._logger = new EmptyLogger();
                        this._components = new Array();
                    }
                    Object.defineProperty(TrackingSubsystem.prototype, "TrackingManager", {
                        /// <summary>
                        /// Instance of tracking system. You must initialize it by calling Events.Initialize.
                        /// </summary>
                        get: function () {
                            this.AssertInitialized();
                            return this._trackingManager;
                        },
                        enumerable: true,
                        configurable: true
                    });

                    Object.defineProperty(TrackingSubsystem.prototype, "Environment", {
                        /// <summary>
                        /// Instance of analytics environment.
                        /// Allows access to some internal analytics properties.
                        /// </summary>
                        get: function () {
                            this.AssertInitialized();
                            return this._environment;
                        },
                        enumerable: true,
                        configurable: true
                    });

                    /// <summary>
                    /// Initializes an SDK Core.
                    /// </summary>
                    /// <param name="factory">Factory which is used to create platform-specific components.</param>
                    /// <param name="settings">Limits which are being used inside the analytics system. In some cases you can override them to specify specific values.</param>
                    /// <param name="components">A list of componnets/plugins which extends functionality of SDK.</param>
                    /// <param name="logger">Logger which allows you to watch some internal analytics messages.</param>
                    TrackingSubsystem.prototype.Initialize = function (factory, settings, components, logger) {
                        if (typeof settings === "undefined") { settings = null; }
                        if (typeof components === "undefined") { components = null; }
                        if (typeof logger === "undefined") { logger = null; }
                        this._logger = logger ? logger : new EmptyLogger();

                        this._logger.Debug("Starting initialization of the TrackingSubsystem ---------------------------------------------------------- ");

                        this.AssertNotInitialized();

                        this._settings = settings ? settings : SDK.Settings.Default;
                        this._logger.Debug("TrackingSubsystem.Settings: \n " + this._settings);

                        var isDebugMode = (this._settings.ValidationOptions == 2 /* RaiseErrors */);
                        this._logger.Debug("Initialize.IsDebug: " + isDebugMode);

                        this._environment = factory.CreateEnvironment();
                        this._logger.Debug("Environment.SDK: " + this._environment.SDK);
                        this._logger.Debug("Initialize.Environment created successfully.");

                        var fileSystem = new FileSystemFilter(factory.CreateFileSystem(), this._environment.AppId);
                        this._logger.Debug("Initialize.FileSystem created successfully.");

                        var queue = this.CreatePersistentQueue(fileSystem, this._environment, this._settings);
                        var notImportantQueue = this.CreateNotImportantQueue(this._environment, this._settings);

                        var sender = factory.CreateEventSender();
                        this._logger.Debug("Initialize.EventSender created successfully.");

                        var dispatcher = factory.CreateDispatcher();

                        // adding silent mode functionality
                        dispatcher = new SilentModeKillSwitch(dispatcher, this._environment, this._logger);
                        this._logger.Debug("Initialize.Dispatcher created successfully.");

                        this._trackingManager = new SDK.TrackingManager(this._environment, queue, notImportantQueue, sender, dispatcher, this._settings, this._logger);
                        this._logger.Debug("Initialize.TrackingManager created successfully.");

                        this.InitializeComponents(components);

                        this._logger.Debug("Initialization process is finished successfully ------------------------------------------------------------");

                        this._logger.Info("SDK " + this._environment.SDK + " was initialized:");
                        this._logger.Info("Settings: \n " + this._settings.toString());
                    };

                    TrackingSubsystem.prototype.InitializeComponents = function (components) {
                        try  {
                            this._logger.Debug("InitializeComponents Started.");
                            if (components != null) {
                                for (var i = 0; i < components.length; i++) {
                                    this._components.push(components[i]);
                                }
                            }

                            for (var cIndex = 0; cIndex < this._components.length; cIndex++) {
                                var component = this._components[cIndex];
                                this._logger.Info("Initializing component: " + component);
                                component.Initialize(this._trackingManager);
                            }
                        } catch (exception) {
                            this._logger.Error("Can't initialize components. Because of: " + exception);
                        }
                    };

                    TrackingSubsystem.prototype.CreatePersistentQueue = function (fileSystem, environment, settings) {
                        var persistentQueue = new PersistentQueue(fileSystem, this._logger);
                        this._logger.Debug("Initialize PersistentQueue created successfully");
                        var safeQueue = new SafeQueue(persistentQueue);
                        this._logger.Debug("Initialize Safe queue created successfully");

                        persistentQueue = this.GetValidationQueue(safeQueue, settings);

                        var limitedQueue = new LimitedQueue(persistentQueue, environment, settings, this._logger);
                        this._logger.Debug("Initialize LimitedQueue created successfully");

                        return limitedQueue;
                    };

                    TrackingSubsystem.prototype.CreateNotImportantQueue = function (environment, settings) {
                        var persistentQueue = new MemoryQueue();
                        this._logger.Debug("Initialize PersistentQueue created successfully");
                        persistentQueue = this.GetValidationQueue(persistentQueue, settings);

                        var limitedQueue = new LimitedQueue(persistentQueue, environment, settings, this._logger);
                        this._logger.Debug("Initialize LimitedQueue created successfully");

                        return limitedQueue;
                    };

                    TrackingSubsystem.prototype.GetValidationQueue = function (persistentQueue, settings) {
                        switch (settings.ValidationOptions) {
                            case 1 /* Silent */:
                                this._logger.Debug("Initialize SilentValidationQueue creating...");
                                return new SilentValidationQueue(persistentQueue, settings, this._logger);
                            case 2 /* RaiseErrors */:
                                this._logger.Debug("Initialize BreakingValidationQueue creating...");
                                return new BreakingValidationQueue(persistentQueue, settings);
                            default:
                                this._logger.Warning("Initialize Validation option is not recognized. PQ not will not validate saving messages.");
                                return persistentQueue;
                        }
                    };

                    //        #endregion
                    //        #region Private methods
                    TrackingSubsystem.prototype.AssertNotInitialized = function () {
                        if (this._trackingManager != null) {
                            throw new AnalyticsException("Analytics is already initialized.", "");
                        }
                    };

                    TrackingSubsystem.prototype.AssertInitialized = function () {
                        if (this._trackingManager == null) {
                            throw new AnalyticsException("Analytics is not initialized. Call TrackingManager.Initialize at first.", "");
                        }
                    };
                    return TrackingSubsystem;
                })();
                SDK.TrackingSubsystem = TrackingSubsystem;
            })(Analytics.SDK || (Analytics.SDK = {}));
            var SDK = Analytics.SDK;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (SDK) {
                /// <summary>
                /// Options which mean ways how validation subsystem works.
                /// </summary>
                (function (ValidationOptions) {
                    /// <summary>
                    /// SilentMode mode of validation. This option prevents freezing the game during this operation and causes loosing of wrong structured events.
                    /// </summary>
                    ValidationOptions[ValidationOptions["Silent"] = 1] = "Silent";

                    /// <summary>
                    /// RaiseErrors mode of validation is a mode of Debug which allows you to check integration of analytics in to your game.
                    /// In this mode SDK will raise errors in the context of method calls.
                    /// </summary>
                    ValidationOptions[ValidationOptions["RaiseErrors"] = 2] = "RaiseErrors";
                })(SDK.ValidationOptions || (SDK.ValidationOptions = {}));
                var ValidationOptions = SDK.ValidationOptions;
            })(Analytics.SDK || (Analytics.SDK = {}));
            var SDK = Analytics.SDK;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (SDK) {
                (function (Impl) {
                    (function (Components) {
                        var WindowState = Arkadium.Connect.Analytics.Model.WindowState;
                        var InputState = Arkadium.Connect.Analytics.Model.InputState;
                        var ScreenOrientation = Arkadium.Connect.Analytics.Model.ScreenOrientation;

                        var PropertyInfo = (function () {
                            function PropertyInfo(name, value) {
                                this.Name = name;
                                this.Value = value;
                            }
                            return PropertyInfo;
                        })();
                        Components.PropertyInfo = PropertyInfo;

                        var EnvironmentWatcher = (function () {
                            function EnvironmentWatcher(environment, timer, checkingPeriod, watchingProperties, logger) {
                                this.STRING_EMPTY = "";
                                this._properties = new Object();
                                this.EnvironmentChanged = "EnvironmentChanged";
                                this._period = checkingPeriod;
                                this._environment = environment;
                                this._logger = logger;
                                this._timer = timer;

                                this.definePropertiesToTrack(watchingProperties);
                                this.rememberCurrentStateOf(this._environment);
                            }
                            EnvironmentWatcher.prototype.definePropertiesToTrack = function (properties) {
                                // define properties to track
                                this._properties["WindowState"] = this.STRING_EMPTY;
                                this._properties["InputState"] = this.STRING_EMPTY;
                                this._properties["ScreenResolution"] = this.STRING_EMPTY;
                                this._properties["ScreenOrientation"] = this.STRING_EMPTY;
                                this._properties["Locale"] = this.STRING_EMPTY;

                                // init additional properties to watch
                                if (properties != null) {
                                    for (var i = 0; i < properties.length; i++) {
                                        var propertyName = properties[i];
                                        this._properties[propertyName] = this.STRING_EMPTY;
                                    }
                                }
                            };

                            EnvironmentWatcher.prototype.Initialize = function (trackingManager) {
                                var _this = this;
                                this._track = trackingManager;
                                this._timer.Init(function (callback) {
                                    return _this.TrackChanges(callback);
                                }, this._period);

                                var initialized = sessionStorage.getItem(EnvironmentWatcher.InitializedKey);
                                if (!initialized) {
                                    this.TrackInitialState();
                                    sessionStorage.setItem(EnvironmentWatcher.InitializedKey, true.toString());
                                }
                            };

                            EnvironmentWatcher.prototype.TrackInitialState = function () {
                                var initialState = new Object();
                                for (var propertyKey in this._properties) {
                                    var propertyValue = this._properties[propertyKey];
                                    initialState[propertyKey] = propertyValue;
                                }

                                this._track.CustomEvent(this.EnvironmentChanged, true, initialState);
                            };

                            EnvironmentWatcher.prototype.rememberCurrentStateOf = function (environment) {
                                for (var propertyKey in this._properties) {
                                    var propertyValue = this.GetValue(environment, propertyKey);
                                    this._properties[propertyKey] = propertyValue;
                                }
                            };

                            EnvironmentWatcher.prototype.GetValue = function (environment, propertyKey) {
                                var value = environment[propertyKey];

                                // TODO: Research how to know is property is Enum
                                if (propertyKey == "InputState") {
                                    return this.StringifyFlag(value, InputState);
                                } else if (propertyKey == "WindowState") {
                                    return this.StringifyFlag(value, WindowState);
                                } else if (propertyKey == "ScreenOrientation") {
                                    return this.StringifyFlag(value, ScreenOrientation);
                                } else {
                                    return (value != null) ? value.toString() : this.STRING_EMPTY;
                                }
                            };

                            EnvironmentWatcher.prototype.StringifyFlag = function (inputState, enumType) {
                                if (enumType[inputState]) {
                                    return enumType[inputState];
                                } else {
                                    var result = Array();

                                    var values = new Array();
                                    for (var key in enumType) {
                                        if (parseInt(key)) {
                                            //var value = enumType[key];
                                            values.push(parseInt(key));
                                        }
                                    }

                                    for (var i = 0; i < values.length; i++) {
                                        var inputStateValue = values[i];
                                        if ((inputState & inputStateValue) == inputStateValue) {
                                            result.push(enumType[inputStateValue]);
                                        }
                                    }
                                }

                                return result.join("|");
                            };

                            EnvironmentWatcher.prototype.GetProperties = function (environment) {
                                var properties = new Array();

                                for (var propKey in this._properties) {
                                    properties.push(new PropertyInfo(propKey, environment[propKey]));
                                }

                                return properties;
                            };

                            //        private static bool Any(IEnumerable<PropertyInfo> properties, PropertyInfo typeProperty)
                            //        {
                            //            foreach (var property in properties)
                            //            {
                            //                if (property.Name == typeProperty.Name)
                            //                {
                            //                    return true;
                            //                }
                            //            }
                            //
                            //            return false;
                            //        }
                            EnvironmentWatcher.prototype.TrackChanges = function (callback) {
                                try  {
                                    var changes = this.GetChangesOf(this._environment);
                                    if (this.GetSize(changes) > 0) {
                                        // DO NOT WAIT THE END OF THIS ACTION BECAUSE THIS MAY CAUSE DEATH LOCK IN UNITY3D.
                                        this._track.CustomEvent("EnvironmentChanged", true, changes);
                                        this.rememberCurrentStateOf(this._environment);
                                    }
                                } catch (exception) {
                                    this._logger.Error("Culd not track changes because of: " + exception);
                                } finally {
                                    callback();
                                }
                            };

                            EnvironmentWatcher.prototype.GetSize = function (value) {
                                var result = 0;
                                for (var key in value) {
                                    result += 1;
                                }
                                return result;
                            };

                            EnvironmentWatcher.prototype.GetChangesOf = function (environment) {
                                var changes = new Object();

                                var properties = this.GetProperties(environment);
                                for (var i = 0; i < properties.length; i++) {
                                    var info = properties[i];

                                    var oldValue = this._properties[info.Name];
                                    var newValue = this.GetValue(environment, info.Name);

                                    if (oldValue != newValue) {
                                        changes[info.Name] = newValue;
                                    }
                                }

                                return changes;
                            };
                            EnvironmentWatcher.InitializedKey = "ADAPT_EnvironmentWatcher_Initialized";
                            return EnvironmentWatcher;
                        })();
                        Components.EnvironmentWatcher = EnvironmentWatcher;
                    })(Impl.Components || (Impl.Components = {}));
                    var Components = Impl.Components;
                })(SDK.Impl || (SDK.Impl = {}));
                var Impl = SDK.Impl;
            })(Analytics.SDK || (Analytics.SDK = {}));
            var SDK = Analytics.SDK;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (SDK) {
                (function (Impl) {
                    (function (Components) {
                        var EventsFlushWorker = (function () {
                            function EventsFlushWorker(settings, timer, logger) {
                                this._logger = logger;
                                this._settings = settings;
                                this._timer = timer;
                            }
                            EventsFlushWorker.prototype.Initialize = function (trackingManager) {
                                this._track = trackingManager;
                                this.StartAutoFlushEvents();
                            };

                            EventsFlushWorker.prototype.StartAutoFlushEvents = function () {
                                var _this = this;
                                var me = this;
                                this._timer.Init(function (callback) {
                                    return _this.AutoFlushEvents.call(me, callback);
                                }, this._settings.FlushTime);
                            };

                            EventsFlushWorker.prototype.AutoFlushEvents = function (callback) {
                                try  {
                                    this._track.FlushEvents(callback);
                                } catch (exception) {
                                    this._logger.Error("AutoFlushEvents could not be completed, because of : " + exception);
                                    callback();
                                }
                            };
                            return EventsFlushWorker;
                        })();
                        Components.EventsFlushWorker = EventsFlushWorker;
                    })(Impl.Components || (Impl.Components = {}));
                    var Components = Impl.Components;
                })(SDK.Impl || (SDK.Impl = {}));
                var Impl = SDK.Impl;
            })(Analytics.SDK || (Analytics.SDK = {}));
            var SDK = Analytics.SDK;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (SDK) {
                (function (Impl) {
                    (function (Components) {
                        var TimeSpan = Arkadium.Connect.Analytics.SDK.Core.Api.TimeSpan;

                        /// <summary>
                        /// The extension of Analytics SDK Core.
                        /// It checks the fact of Idle in event generation which may say about the Game is working but user does nothing.
                        /// </summary>
                        var IdleDetectionWorker = (function () {
                            /// <summary>
                            /// Creating an instance of Idele Detector component.
                            /// </summary>
                            /// <param name="idleTimeout"></param>
                            /// <param name="timer"></param>
                            function IdleDetectionWorker(idleTimeout, timer, logger) {
                                this._noNeedToWork = TimeSpan.createFromMilliseconds(0);
                                this._checkingTimeout = TimeSpan.createFromSeconds(1);
                                this._idleTimeout = idleTimeout;
                                this._timer = timer;
                                this._logger = logger;
                            }
                            /// <summary>
                            /// Initializes Idle detector and turns on timer to check activity of SDK.
                            /// </summary>
                            /// <remarks>
                            /// NOTE: Do not call this method by your self. It will be called by SDK when it is ready to do it.
                            /// </remarks>
                            /// <param name="trackingManager">The instance of tracking manager which is used by current SDK.</param>
                            IdleDetectionWorker.prototype.Initialize = function (trackingManager) {
                                var _this = this;
                                this._trackingManager = trackingManager;

                                if (this._idleTimeout.totalMilliseconds == this._noNeedToWork.totalMilliseconds) {
                                    return;
                                }

                                var me = this;
                                this._timer.Init(function (callback) {
                                    return _this.Beat.call(me, callback);
                                }, this._checkingTimeout);
                            };

                            IdleDetectionWorker.prototype.Beat = function (callback) {
                                try  {
                                    var timeFromTheLastEvent = (new Date().getTime() - this._trackingManager.LastEventTime.getTime());
                                    if (timeFromTheLastEvent > this._idleTimeout.totalMilliseconds) {
                                        var payload = new Object();
                                        payload["IdleTimeout"] = this._idleTimeout.totalSeconds;

                                        // NOTE: waiting the end of current event to prevent any ways to submit Idle event twice,
                                        // for example because of performance issue.
                                        this._trackingManager.CustomEvent("Idle", true, payload); //Do not wait anything to prevent deathlock; // .AsTask().Wait();
                                    }
                                } catch (ex) {
                                    this._logger.Error("Cant process beat, because of: " + ex);
                                } finally {
                                    callback();
                                }
                            };

                            IdleDetectionWorker.prototype.Dispose = function () {
                                this._timer.Dispose();
                            };
                            return IdleDetectionWorker;
                        })();
                        Components.IdleDetectionWorker = IdleDetectionWorker;
                    })(Impl.Components || (Impl.Components = {}));
                    var Components = Impl.Components;
                })(SDK.Impl || (SDK.Impl = {}));
                var Impl = SDK.Impl;
            })(Analytics.SDK || (Analytics.SDK = {}));
            var SDK = Analytics.SDK;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (SDK) {
                (function (Impl) {
                    (function (Components) {
                        var UserActivityWatcher = (function () {
                            function UserActivityWatcher(jqueryInstance) {
                                this._jqueryInstance = jqueryInstance;
                            }
                            UserActivityWatcher.prototype.Initialize = function (trackingManager) {
                                this._track = trackingManager;

                                var me = this;

                                this._jqueryInstance(window).on("click", function () {
                                    return me.TrackActivity.call(me);
                                });
                                this._jqueryInstance(window).on("touchstart", function () {
                                    return me.TrackActivity.call(me);
                                });
                            };

                            UserActivityWatcher.prototype.TrackActivity = function () {
                                this._track.Activity();
                            };
                            return UserActivityWatcher;
                        })();
                        Components.UserActivityWatcher = UserActivityWatcher;
                    })(Impl.Components || (Impl.Components = {}));
                    var Components = Impl.Components;
                })(SDK.Impl || (SDK.Impl = {}));
                var Impl = SDK.Impl;
            })(Analytics.SDK || (Analytics.SDK = {}));
            var SDK = Analytics.SDK;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (SDK) {
                var FileInfo = Arkadium.Connect.Analytics.SDK.Core.Api.FileInfo;

                var FileNotFoundException = Arkadium.Connect.Analytics.SDK.Impl.Exceptions.FileNotFoundException;

                var BrowserStorage = (function () {
                    function BrowserStorage(storage) {
                        this._storage = storage;
                    }
                    BrowserStorage.prototype.ListFiles = function () {
                        var values = new Array();

                        var keys = this._storage.GetKeys();
                        for (var index = 0; index < keys.length; index++) {
                            var fileInfo = new FileInfo();
                            fileInfo.CreationDate = new Date();
                            fileInfo.Name = keys[index];

                            values.push(fileInfo);
                        }

                        return values;
                    };

                    BrowserStorage.prototype.Load = function (fileName) {
                        this.AssertFileExists(fileName);
                        var file = this._storage.GetItem(fileName);

                        return file;
                    };

                    BrowserStorage.prototype.Save = function (fileName, content) {
                        var fileInfo = new FileInfo();
                        fileInfo.Name = fileName;
                        fileInfo.CreationDate = new Date();

                        this._storage.SetItem(fileName, content);
                    };

                    BrowserStorage.prototype.Delete = function (fileName) {
                        this.AssertFileExists(fileName);
                        this._storage.RemoveItem(fileName);
                    };

                    BrowserStorage.prototype.AssertFileExists = function (fileName) {
                        var files = this._storage.GetKeys().filter(function (value) {
                            return value == fileName;
                        });
                        if (files.length == 0) {
                            throw new FileNotFoundException(fileName);
                        }
                    };
                    return BrowserStorage;
                })();
                SDK.BrowserStorage = BrowserStorage;
            })(Analytics.SDK || (Analytics.SDK = {}));
            var SDK = Analytics.SDK;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (SDK) {
                var SendResult = Arkadium.Connect.Analytics.SDK.Core.Api.SendResult;

                var ServerProcessingException = Arkadium.Connect.Analytics.SDK.Impl.Exceptions.ServerProcessingException;
                var ServerConnectionException = Arkadium.Connect.Analytics.SDK.Impl.Exceptions.ServerConnectionException;

                var BrowserEventSender = (function () {
                    function BrowserEventSender(serverUrl, jQueryInstance) {
                        this.MediaType = "?format=json";
                        this.RequestTrackUri = "api/event/track";
                        this.RequestBatchUri = "api/event/batch";
                        this.RequestPingUri = "api/event/ping";
                        this._baseAddress = serverUrl;
                        this._jQueryInstance = jQueryInstance;
                    }
                    /// <summary>
                    /// Sends the single message.
                    /// </summary>
                    /// <param name="message">Instance of the message which should be sent.</param>
                    BrowserEventSender.prototype.Send = function (message, callback) {
                        this._jQueryInstance.ajax({
                            crossDomain: true,
                            type: "POST",
                            data: JSON.stringify(message),
                            url: this._baseAddress + "/" + this.RequestTrackUri + this.MediaType,
                            success: function (data, textStatus, jqXhr) {
                                callback(new SendResult());
                            },
                            error: function (jqXhr, textStatus, errorThrown) {
                                var response = new SendResult();

                                if (jqXhr.status == 400) {
                                    response.Error = new ServerProcessingException();
                                } else if (jqXhr.status == 500) {
                                    response.Error = new ServerProcessingException();
                                } else {
                                    response.Error = new ServerConnectionException();
                                }

                                callback(response);
                            }
                        });
                    };

                    /// <summary>
                    /// Sends batch of messages.
                    /// </summary>
                    /// <param name="eventMessageBatch">Instance of the batch message should be sent.</param>
                    BrowserEventSender.prototype.SendBatch = function (eventMessageBatch, callback) {
                        this._jQueryInstance.ajax({
                            crossDomain: true,
                            type: "POST",
                            data: JSON.stringify(eventMessageBatch),
                            url: this._baseAddress + "/" + this.RequestBatchUri + this.MediaType,
                            success: function (data, textStatus, jqXhr) {
                                callback(new SendResult());
                            },
                            error: function (jqXhr, textStatus, errorThrown) {
                                var response = new SendResult();

                                if (jqXhr.status == 400) {
                                    response.Error = new ServerProcessingException();
                                } else if (jqXhr.status == 500) {
                                    response.Error = new ServerProcessingException();
                                } else {
                                    response.Error = new ServerConnectionException();
                                }

                                callback(response);
                            }
                        });
                    };

                    /// <summary>
                    /// Http sender will send the ping operation to the target server to detect service availability.
                    /// </summary>
                    /// <returns>True when target service is available.</returns>
                    BrowserEventSender.prototype.IsAvailable = function (callback) {
                        this._jQueryInstance.ajax({
                            crossDomain: true,
                            type: "GET",
                            url: this._baseAddress + "/" + this.RequestPingUri,
                            success: function (data, textStatus, jqXhr) {
                                callback(true);
                            },
                            error: function (jqXhr, textStatus, errorThrown) {
                                callback(false);
                            }
                        });
                    };
                    return BrowserEventSender;
                })();
                SDK.BrowserEventSender = BrowserEventSender;
            })(Analytics.SDK || (Analytics.SDK = {}));
            var SDK = Analytics.SDK;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (SDK) {
                var WindowState = Arkadium.Connect.Analytics.Model.WindowState;
                var InputState = Arkadium.Connect.Analytics.Model.InputState;
                var ScreenOrientation = Arkadium.Connect.Analytics.Model.ScreenOrientation;

                var BrowserEnvironment = (function () {
                    function BrowserEnvironment(sessionStorage, persistentStorage, appId, hostId, appVersion) {
                        this._gameplays = new Map();
                        this._sessionStorage = sessionStorage;
                        this._persistentStorage = persistentStorage;

                        this._appId = appId;
                        this._hostId = hostId;
                        this._appVersion = appVersion;

                        this._appInstanceId = Guid();

                        this._deviceId = this.GetPersistentGuid("ADAPT_DeviceId");
                        this._userId = this.GetPersistentGuid("ADAPT_UserId");

                        this._isOffline = false;

                        if (isNaN(this.EventNumber)) {
                            this.EventNumber = 0;
                        }

                        if (isNaN(this.StepNumber)) {
                            this.StepNumber = 0;
                        }

                        this._sdk = "Arkadium.Connect.Analytics.SDK.Javascript v.1.4.0.4";
                    }
                    BrowserEnvironment.prototype.GetPersistentGuid = function (key) {
                        var guid = this._persistentStorage.GetItem(key);
                        if (guid == null) {
                            guid = Guid().toString();
                            this._persistentStorage.SetItem(key, guid);
                        }
                        return guid.toString();
                    };

                    Object.defineProperty(BrowserEnvironment.prototype, "WindowState", {
                        /// <summary>
                        /// Gets the current state of the window.
                        /// </summary>
                        get: function () {
                            return 4 /* Window */;
                        },
                        enumerable: true,
                        configurable: true
                    });

                    Object.defineProperty(BrowserEnvironment.prototype, "InputState", {
                        /// <summary>
                        /// Gets the current way of input
                        /// </summary>
                        get: function () {
                            var resultState = 0 /* Undefined */;

                            resultState |= this.hasTouchScreen() ? 2 /* Touch */ : 0 /* Undefined */;
                            resultState |= this.hasKeyboard() ? 4 /* Keyboard */ : 0 /* Undefined */;
                            resultState |= this.hasMouse() ? 1 /* Mouse */ : 0 /* Undefined */;

                            return resultState;
                        },
                        enumerable: true,
                        configurable: true
                    });

                    BrowserEnvironment.prototype.hasKeyboard = function () {
                        var deviceType = this.getDeviceType();
                        if (deviceType == "pc") {
                            return true;
                        } else {
                            return false;
                        }
                    };

                    BrowserEnvironment.prototype.hasMouse = function () {
                        var deviceType = this.getDeviceType();
                        if (deviceType == "pc") {
                            return true;
                        } else {
                            return false;
                        }
                    };

                    BrowserEnvironment.prototype.isAndroid = function () {
                        return (navigator.userAgent.match(/Android/i) && !navigator.userAgent.match(/Trident/i) ? true : false);
                    };

                    // look http://detectmobilebrowsers.com/ for updates
                    BrowserEnvironment.prototype.getDeviceType = function () {
                        var a = navigator.userAgent || navigator.vendor || window["opera"];
                        var testA = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a);
                        var testB = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4));
                        if (testA || testB) {
                            return 'phone';
                        } else if (this.isAndroid() || a.match(/mobile/i)) {
                            return 'tablet';
                        }
                        return 'pc';
                    };

                    BrowserEnvironment.prototype.hasTouchScreen = function () {
                        // see: http://stackoverflow.com/questions/4817029/whats-the-best-way-to-detect-a-touch-screen-device-using-javascript
                        // see: http://dotnet.dzone.com/articles/detecting-touch-hardware-ie-10
                        if (typeof (window.navigator.msMaxTouchPoints) === 'number') {
                            return (window.navigator.msMaxTouchPoints > 0);
                        } else {
                            var msGesture = window.navigator && window.navigator.msPointerEnabled && window["MSGesture"];
                            return ('ontouchstart' in window || msGesture || window["DocumentTouch"] && window.document instanceof window["DocumentTouch"]);
                        }
                    };

                    Object.defineProperty(BrowserEnvironment.prototype, "ScreenResolution", {
                        /// <summary>
                        /// Gets the current resolution of the system.
                        /// </summary>
                        get: function () {
                            var pixelRatio = window.devicePixelRatio || (window.screen.deviceXDPI && window.screen.logicalXDPI ? window.screen.deviceXDPI / window.screen.logicalXDPI : 1);
                            var width = window.innerWidth * pixelRatio;
                            var height = window.innerHeight * pixelRatio;

                            return width + "x" + height;
                        },
                        enumerable: true,
                        configurable: true
                    });

                    Object.defineProperty(BrowserEnvironment.prototype, "ScreenOrientation", {
                        /// <summary>
                        /// Gets the current screen orientation.
                        /// </summary>
                        get: function () {
                            // TODO: research how to detect orientation
                            // FF: mozOrizntation=landscape-primary
                            // Chrome: nothing
                            // IE: msOrientation=landscape-primary
                            return (window.innerWidth > window.innerHeight) ? 1 /* Landscape */ : 2 /* Portrait */;
                        },
                        enumerable: true,
                        configurable: true
                    });

                    Object.defineProperty(BrowserEnvironment.prototype, "Locale", {
                        /// <summary>
                        /// Gets the current locale of the user.
                        /// </summary>
                        get: function () {
                            // TODO: decide to create a method on the ingress service which responses the Accept-Encoding.
                            return window.navigator.userLanguage || window.navigator.language;
                        },
                        enumerable: true,
                        configurable: true
                    });

                    Object.defineProperty(BrowserEnvironment.prototype, "AppVersion", {
                        /// <summary>
                        /// Current version of application.
                        /// </summary>
                        get: function () {
                            return this._appVersion;
                        },
                        enumerable: true,
                        configurable: true
                    });

                    Object.defineProperty(BrowserEnvironment.prototype, "DeviceId", {
                        /// <summary>
                        /// The unique id of the device.
                        /// </summary>
                        get: function () {
                            return this._deviceId;
                        },
                        enumerable: true,
                        configurable: true
                    });

                    Object.defineProperty(BrowserEnvironment.prototype, "UserId", {
                        /// <summary>
                        /// Gets the Id of the current user.
                        /// </summary>
                        //        [DoNotTrack]
                        get: function () {
                            return this._userId;
                        },
                        enumerable: true,
                        configurable: true
                    });

                    Object.defineProperty(BrowserEnvironment.prototype, "SDK", {
                        /// <summary>
                        /// Gets the version of SDK.
                        /// </summary>
                        //        [DoNotTrack]
                        get: function () {
                            return this._sdk;
                        },
                        enumerable: true,
                        configurable: true
                    });

                    Object.defineProperty(BrowserEnvironment.prototype, "IsOffline", {
                        /// <summary>
                        /// Gets and sets the current connection state.
                        /// </summary>
                        //        [DoNotTrack]
                        get: function () {
                            return this._isOffline;
                        },
                        set: function (value) {
                            this._isOffline = value;
                        },
                        enumerable: true,
                        configurable: true
                    });


                    Object.defineProperty(BrowserEnvironment.prototype, "AppId", {
                        /// <summary>
                        /// Identifier of the application.
                        /// </summary>
                        //        [DoNotTrack]
                        get: function () {
                            return this._appId;
                        },
                        enumerable: true,
                        configurable: true
                    });

                    Object.defineProperty(BrowserEnvironment.prototype, "HostId", {
                        /// <summary>
                        /// Identifier of the application host.
                        /// </summary>
                        //        [DoNotTrack]
                        get: function () {
                            return this._hostId;
                        },
                        enumerable: true,
                        configurable: true
                    });

                    Object.defineProperty(BrowserEnvironment.prototype, "AppInstanceId", {
                        /// <summary>
                        /// Id of application instance.
                        /// </summary>
                        //        [DoNotTrack]
                        get: function () {
                            return this._appInstanceId;
                        },
                        enumerable: true,
                        configurable: true
                    });

                    Object.defineProperty(BrowserEnvironment.prototype, "SessionId", {
                        /// <summary>
                        /// Unique Id of the session.
                        /// </summary>
                        //        [DoNotTrack]
                        get: function () {
                            var sessionId = this._sessionStorage.GetItem("ADAPT_SessionId");
                            if (!sessionId) {
                                sessionId = Guid().toString();
                                this._sessionStorage.SetItem("ADAPT_SessionId", sessionId);
                            }

                            return sessionId;
                        },
                        set: function (value) {
                            this._sessionStorage.SetItem("ADAPT_SessionId", value);
                        },
                        enumerable: true,
                        configurable: true
                    });


                    Object.defineProperty(BrowserEnvironment.prototype, "StepNumber", {
                        /// <summary>
                        /// Number of the step. Needed for storing the application a page number.
                        /// </summary>
                        //  [DoNotTrack]
                        get: function () {
                            return Number(this._sessionStorage.GetItem("ADAPT_StepNumber"));
                        },
                        /// <summary>
                        /// Number of the step. Needed for storing the application a page number.
                        /// </summary>
                        //  [DoNotTrack]
                        set: function (value) {
                            this._sessionStorage.SetItem("ADAPT_StepNumber", value.toString());
                        },
                        enumerable: true,
                        configurable: true
                    });


                    Object.defineProperty(BrowserEnvironment.prototype, "EventNumber", {
                        /// <summary>
                        /// Allows SDK to store number of generated and sent events,
                        /// to check losing-factor on the server side.
                        /// </summary>
                        //        [DoNotTrack]
                        get: function () {
                            return Number(this._sessionStorage.GetItem("ADAPT_EventNumber"));
                        },
                        /// <summary>
                        /// Allows SDK to store number of generated and sent events,
                        /// to check losing-factor on the server side.
                        /// </summary>
                        //        [DoNotTrack]
                        set: function (value) {
                            this._sessionStorage.SetItem("ADAPT_EventNumber", value.toString());
                        },
                        enumerable: true,
                        configurable: true
                    });


                    BrowserEnvironment.prototype.SetGamePlayContext = function (gamePlayContext) {
                        //Set the ambient game play id and add context to cache if not already cached.
                        this.GamePlayId = gamePlayContext.GamePlayId;

                        if (!this._gameplays.has(this.GamePlayId)) {
                            this._gameplays.set(this.GamePlayId, gamePlayContext);
                        }
                    };

                    BrowserEnvironment.prototype.GetGamePlayContext = function (gamePlayId) {
                        // If a null game play is passed in, use the ambient game play id (both may be null).
                        var currentGamePlay = gamePlayId ? gamePlayId : this.GamePlayId;
                        return (currentGamePlay != null) ? this.GetGamePlay(currentGamePlay) : null;
                    };

                    BrowserEnvironment.prototype.GetGamePlay = function (currentGamePlay) {
                        var context;
                        if (this._gameplays.has(currentGamePlay)) {
                            context = this._gameplays.get(currentGamePlay);
                        }

                        return context;
                    };

                    BrowserEnvironment.prototype.ClearGamePlayContext = function (gamePlayId) {
                        // Only clear if the given game play id is the current game play id
                        if (this.GamePlayId == gamePlayId) {
                            this.GamePlayId = null;
                        }

                        if (gamePlayId != null) {
                            this._gameplays.delete(gamePlayId);
                        }
                    };
                    return BrowserEnvironment;
                })();
                SDK.BrowserEnvironment = BrowserEnvironment;
            })(Analytics.SDK || (Analytics.SDK = {}));
            var SDK = Analytics.SDK;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (SDK) {
                var BackgroundWorker = Arkadium.Connect.Analytics.SDK.Impl.Background.BackgroundWorker;

                var BrowserFactory = (function () {
                    function BrowserFactory(appId, hostId, appVersion, isDebugMode, serverUrl, jquery, logger) {
                        this._dispatcher = new BackgroundWorker(isDebugMode, logger);
                        this._serverUrl = serverUrl;
                        this._appId = appId;
                        this._hostId = hostId;
                        this._appVersion = appVersion;
                        this._jquery = jquery;
                    }
                    /// <summary>
                    /// Concrete platform-specific EventSender must send events to the Analytics endpoint. (http://telemetrics.cloudapp.net/)
                    /// </summary>
                    /// <returns>Instance of the event sender.</returns>
                    BrowserFactory.prototype.CreateEventSender = function () {
                        return new SDK.BrowserEventSender(this._serverUrl, this._jquery);
                    };

                    /// <summary>
                    /// Concrete platform-specific Environment implementation.
                    /// </summary>
                    /// <returns>Instance of platform-specific Environment.</returns>
                    BrowserFactory.prototype.CreateEnvironment = function () {
                        return new SDK.BrowserEnvironment(new SDK.BrowserSessionStorage(), new SDK.BrowserLocalStorage(), this._appId, this._hostId, this._appVersion);
                    };

                    /// <summary>
                    /// Concrete platform-specific access to the file system (Event storage).
                    /// </summary>
                    /// <returns>Instance of platform-specific FileSystem.</returns>
                    BrowserFactory.prototype.CreateFileSystem = function () {
                        return new SDK.BrowserStorage(new SDK.BrowserLocalStorage());
                    };

                    /// <summary>
                    /// Platform-specific Dispatcher.
                    /// </summary>
                    /// <remarks>
                    /// Dispatcher should provide an ability to dispatch some long-term actions and process them.
                    /// (e.g.: for Win8 it works without blocking main thread).
                    /// If your platform allows you to extract all Environment data in separate Thread (not in the MAIN Thread)
                    /// you may use <see cref="Arkadium.Connect.Analytics.SDK.Impl.Background.BackgroundWorker"/> <br/>
                    /// <b>NOTE:</b> Keep in mind that sdk may try to get dispatcher more that once. So, Factory must instantiate Dispatcher once and just return link to it.
                    /// </remarks>
                    /// <returns>Instance of platform-specific Dispatcher.</returns>
                    BrowserFactory.prototype.CreateDispatcher = function () {
                        return this._dispatcher;
                    };
                    return BrowserFactory;
                })();
                SDK.BrowserFactory = BrowserFactory;
            })(Analytics.SDK || (Analytics.SDK = {}));
            var SDK = Analytics.SDK;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (SDK) {
                var TimeSpan = Arkadium.Connect.Analytics.SDK.Core.Api.TimeSpan;

                var Timer = Arkadium.Connect.Analytics.SDK.Impl.Background.Timer;
                var EnvironmentWatcher = Arkadium.Connect.Analytics.SDK.Impl.Components.EnvironmentWatcher;
                var EventsFlushWorker = Arkadium.Connect.Analytics.SDK.Impl.Components.EventsFlushWorker;
                var IdleDetectionWorker = Arkadium.Connect.Analytics.SDK.Impl.Components.IdleDetectionWorker;
                var UserActivityWatcher = Arkadium.Connect.Analytics.SDK.Impl.Components.UserActivityWatcher;

                var Events = (function () {
                    function Events() {
                    }
                    Object.defineProperty(Events, "Track", {
                        /// <summary>
                        /// Instance of tracking system. You must initialize it by calling Events.Initialize.
                        /// </summary>
                        get: function () {
                            return SDK.EventsBase.Track;
                        },
                        enumerable: true,
                        configurable: true
                    });

                    Object.defineProperty(Events, "Environment", {
                        /// <summary>
                        /// Instance of analytics environment.
                        /// Allows access to some internal analytics properties.
                        /// </summary>
                        get: function () {
                            return SDK.EventsBase.Environment;
                        },
                        enumerable: true,
                        configurable: true
                    });

                    Events.Initialize = function (appId, hostId, appVersion, serverUrl, settings, jquery, logger) {
                        var isDebugMode = settings.ValidationOptions == 2 /* RaiseErrors */;
                        var factory = new SDK.BrowserFactory(appId, hostId, appVersion, isDebugMode, serverUrl, jquery, logger);
                        var components = new Array();

                        components.push(new EnvironmentWatcher(factory.CreateEnvironment(), new Timer(), TimeSpan.createFromSeconds(1), [], logger));
                        components.push(new EventsFlushWorker(settings, new Timer(), logger));
                        components.push(new IdleDetectionWorker(settings.IdleTimeout, new Timer(), logger));
                        components.push(new UserActivityWatcher(jquery));

                        SDK.EventsBase.Initialize(factory, settings, components, logger);
                    };
                    return Events;
                })();
                SDK.Events = Events;
            })(Analytics.SDK || (Analytics.SDK = {}));
            var SDK = Analytics.SDK;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (SDK) {
                var BrowserLocalStorage = (function () {
                    function BrowserLocalStorage() {
                    }
                    BrowserLocalStorage.prototype.GetKeys = function () {
                        var result = new Array();

                        for (var key in localStorage) {
                            result.push(key);
                        }

                        return result;
                    };

                    BrowserLocalStorage.prototype.GetItem = function (key) {
                        return localStorage.getItem(key);
                    };

                    BrowserLocalStorage.prototype.SetItem = function (key, value) {
                        localStorage.setItem(key, value);
                    };

                    BrowserLocalStorage.prototype.RemoveItem = function (key) {
                        localStorage.removeItem(key);
                    };
                    return BrowserLocalStorage;
                })();
                SDK.BrowserLocalStorage = BrowserLocalStorage;
            })(Analytics.SDK || (Analytics.SDK = {}));
            var SDK = Analytics.SDK;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
var Arkadium;
(function (Arkadium) {
    (function (Connect) {
        (function (Analytics) {
            (function (SDK) {
                var BrowserSessionStorage = (function () {
                    function BrowserSessionStorage() {
                    }
                    BrowserSessionStorage.prototype.GetKeys = function () {
                        var result = new Array();

                        for (var key in sessionStorage) {
                            result.push(key);
                        }

                        return result;
                    };

                    BrowserSessionStorage.prototype.GetItem = function (key) {
                        return sessionStorage.getItem(key);
                    };

                    BrowserSessionStorage.prototype.SetItem = function (key, value) {
                        sessionStorage.setItem(key, value);
                    };

                    BrowserSessionStorage.prototype.RemoveItem = function (key) {
                        sessionStorage.removeItem(key);
                    };
                    return BrowserSessionStorage;
                })();
                SDK.BrowserSessionStorage = BrowserSessionStorage;
            })(Analytics.SDK || (Analytics.SDK = {}));
            var SDK = Analytics.SDK;
        })(Connect.Analytics || (Connect.Analytics = {}));
        var Analytics = Connect.Analytics;
    })(Arkadium.Connect || (Arkadium.Connect = {}));
    var Connect = Arkadium.Connect;
})(Arkadium || (Arkadium = {}));
