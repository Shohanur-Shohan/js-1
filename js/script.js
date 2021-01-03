// js start
// ex-1
function Dates(){
	document.getElementById('demo').innerHTML ="Date()";
}
// ex-2
function textchange(){
	document.getElementById('h2').innerHTML ="hello world";
}

// js  end
// jq start
// ex-1
$(document).ready(function(){
	// ex-1-collapse
	$('.panel').click(function(){
		$('.flip').slideToggle();
	})

});
// ex-2

$( ".push" ).click(function() {
  $( this ).css({
    borderStyle: "inset",
    cursor: "wait"
  });
  $( "input" ).slideDown( 1000, function() {
    $( this )
      .css( "border", "2px red inset" )
      .filter( ".middle" )
        .css( "background", "yellow" )
        .focus();
    $( "push" ).css( "visibility", "hidden" );
  });
});

// ex-3
 
$( ".ex-3-1" ).click(function() {
  $( ".ex-3-slide" )
    .animate({ left:"+=200px" }, 2000 )
    .animate({ top:"0px" }, 600 )
    .queue(function() {
      $( this ).toggleClass( "red" ).dequeue();
    })
    .animate({ left:"10px", top:"30px" }, 700 );
});
// ex-4

$( ".ex-4-2" ).click(function() {
  if ( $( "ex-4-1" ).first().is( ":hidden" ) ) {
    $( ".ex-4-1" ).show( "slow" );
  } else {
    $( ".ex-4-1" ).slideUp();
  }
});

// ex-5
$( ".ex-5-1" ).click(function() {
  $( this ).parent().slideUp( "fast", function() {
    $( "#msg" ).text( $( ".ex-5-1", this ).text() + " has completed." );
  });
});


// ex-6

// Start animation
$( "#go" ).click(function() {
  $( ".block" ).animate({ left: "+=100px" }, 1000 );
});
 
// Stop animation when button is clicked
$( "#stop" ).click(function() {
  $( ".block" ).stop();
});
 
// Start animation in the opposite direction
$( "#back" ).click(function() {
  $( ".block" ).animate({ left: "-=100px" }, 1000 );
});
// ex-7
$( ".ex-7-p" ).appendTo( document.containery );
$( ".ex-7-p" ).appendTo( document.container );
$( ".ex-7-p" ).appendTo( document.container );
$( window ).scroll(function() {
$( ".span-ex-7" ).css( "display", "inline" ).fadeOut( "slow" );
});
// ex-8

$( "select" )
.change(function () {
  var str = "";
  $( "select option:selected" ).each(function() {
    str += $( this ).text() + " ";
  });
  $( ".ex-8-1" ).text( str );
})
.change();
// ex-9

$( "#ex-9-p" )
.mouseup(function() {
  $( this ).append( "<span style='color:#f00;'>Mouse up.</span>" );
})
.mousedown(function() {
  $( this ).append( "<span style='color:#00f;'>Mouse down.</span>" );
});
// ex-10

$( ".ex-10-p" ).focusin(function() {
$( this ).find( ".ex-10-span" ).css( "display", "inline" ).fadeOut( 1000 );
});
// ex-11

$( "form input" ).css( "border", "2px dotted blue" );
$( "form fieldset input" ).css( "backgroundColor", "yellow" );


// ex-12

$( ".ex-12-button" ).click(function() {
  var value;
 
  switch ( $( ".ex-12-button" ).index( this ) ) {
    case 0 :
      value = $( ".ex-12-1" ).data( "blah" );
      break;
    case 1 :
      $( ".ex-12-1" ).data( "blah", "hello" );
      value = "Stored!";
      break;
    case 2 :
      $( ".ex-12-1" ).data( "blah", 86 );
      value = "Stored!";
      break;
    case 3 :
      $( ".ex-12-1" ).removeData( "blah" );
      value = "Removed!";
      break;
  }
 
  $( ".ex-12-span" ).text( "" + value );
});

// jq end

// jquery ui start
// ex-1
$( function() {
    $( "#draggable" ).draggable();
  } );

// ex-2
$( function() {
var state = true;
$( "#button" ).on( "click", function() {
  if ( state ) {
    $( "#effect" ).animate({
      backgroundColor: "#aa0000",
      color: "#fff",
      width: 700
    }, 1000 );
  } else {
    $( "#effect" ).animate({
      backgroundColor: "#fff",
      color: "#000",
      width: 240
    }, 1000 );
  }
  state = !state;
});
} );
// ex-3

$( document ).click(function() {
$( "#toggle-ui-3" ).toggle( "highlight" );
});

// ex-4
$( document ).click(function() {
            $( "#toggles" ).toggle( "fold" );
});

// ex-5
$( "#toggle-ex-5" ).click(function() {
$( "#elem" ).animate({
  color: "green",
  backgroundColor: "rgb( 20, 20, 20 )"
});
});

// ex-6
$( document ).click(function() {
$( "#toggle-ex-6" ).toggle( "clip" );
});

// ex-7
$( document ).click(function() {
$( "#toggle-ex-7" ).toggle( "explode" );
});

// ex-8
$( "ex-ui-7" ).click(function() {
  var i = 1 - $( "ex-ui-8" ).index( this );
  $( this ).transfer( {
    to: $( "ex-ui-9" ).eq( i ),
    duration: 1000
  } );
});


// ex-9
$( function() {
    $( "#datepicker" ).datepicker();
  } );


 // ex-10
$( function() {
$( "#speed" ).selectmenu();

$( "#files" ).selectmenu();

$( "#number" )
.selectmenu()
.selectmenu( "menuWidget" )
  .addClass( "overflow" );

$( "#salutation" ).selectmenu();
} );
// ex-11
$( function() {
    $( "#tabs" ).tabs();
  } );
// ex-12

$( function() {
        $( "input" ).checkboxradio();
      } );

// ex-13
$( function() {
    // setup master volume
    $( "#master" ).slider({
      value: 60,
      orientation: "horizontal",
      range: "min",
      animate: true
    });
    // setup graphic EQ
    $( "#eq > .ex-ui-13" ).each(function() {
      // read initial values from markup and remove that
      var value = parseInt( $( this ).text(), 10 );
      $( this ).empty().slider({
        value: value,
        range: "min",
        animate: true,
        orientation: "vertical"
      });
    });
  } );


// jquery ui end