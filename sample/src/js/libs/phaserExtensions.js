/**
 * Created by Stas on 11/7/2014.
 */
var LabelButton = function(game, x, y, key, callback,
                           callbackContext, overFrame, outFrame, downFrame, upFrame,textOffset)
{
    "use strict";
    Phaser.Button.call(this, game, x, y, key, callback,
        callbackContext, overFrame, outFrame, downFrame, upFrame);


    if(textOffset===undefined || textOffset===null ){
        this.textOffset = new Phaser.Point(0,0);
    }
    else{
        this.textOffset = textOffset;
    }
    //Style how you wish...
    this.style = {
        'font': '10px Arial',
        'fill': 'black'
    };
    this.anchor.setTo( 0.5, 0.5 );
    this.label = new Phaser.Text(game, 0, 0, "", this.style);

    this.label.x = this.textOffset.x;
    this.label.y = this.textOffset.y;

    //puts the label in the center of the button
    this.label.anchor.setTo( 0.5, 0.5 );

    this.addChild(this.label);
    this.setLabel( "", this.style );
};

LabelButton.prototype = Object.create(Phaser.Button.prototype);
LabelButton.prototype.constructor = LabelButton;
LabelButton.prototype.setStyle = function (style) {
    "use strict";
    this.label.setStyle(style);
}
LabelButton.prototype.setLabel = function( text ) {
    "use strict";
    this.label.setText(text);
};

Phaser.Point.distanceSquared = function(value1,value2)
{
    "use strict";
    var x = value1.x - value2.x;
    var y = value1.y - value2.y;
    var z = value1.z - value2.z;

    return (x*x) + (y*y) + (z*z);
};
Phaser.Point.prototype.multiplyByScalar = function(value)
{
    "use strict";
    return this.x * value + this.y * value;
};