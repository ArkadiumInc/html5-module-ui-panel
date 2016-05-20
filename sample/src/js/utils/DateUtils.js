/**
 * Created by dor on 2/17/2015.
 */
var DateUtils = {

    getDayOfWeek: function(day, showFullNames) {
        "use strict";
        switch (day) {
            case 0: return (showFullNames) ? ("Sunday"): ("Sun");
            case 1: return (showFullNames) ? ("Monday"): ("Mon");
            case 2: return (showFullNames) ? ("Tuesday"): ("Tue");
            case 3: return (showFullNames) ? ("Wednesday"): ("Wed");
            case 4: return (showFullNames) ? ("Thursday"): ("Thu");
            case 5: return (showFullNames) ? ("Friday"): ("Fri");
            case 6: return (showFullNames) ? ("Saturday"): ("Sat");
        }
    },

    getMonthName: function(month, showFullNames) {
        "use strict";
        switch (month) {
            case 0: return (showFullNames) ? ("January") : ("Jan");
            case 1: return (showFullNames) ? ("February") : ("Feb");
            case 2: return (showFullNames) ? ("March") : ("Mar");
            case 3: return (showFullNames) ? ("April") : ("Apr");
            case 4: return (showFullNames) ? ("May") : ("May");
            case 5: return (showFullNames) ? ("June") : ("Jun");
            case 6: return (showFullNames) ? ("July") : ("Jul");
            case 7: return (showFullNames) ? ("August") : ("Aug");
            case 8: return (showFullNames) ? ("September") : ("Sep");
            case 9: return (showFullNames) ? ("October") : ("Oct");
            case 10: return (showFullNames) ? ("November") : ("Nov");
            case 11: return (showFullNames) ? ("December") : ("Dec");
        }
    }
};

module.exports = DateUtils;