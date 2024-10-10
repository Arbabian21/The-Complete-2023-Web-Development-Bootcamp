// manipulating style w jq
// $("#pracCSS").css("background-color", "red");
// $("h1").removeClass("big-title");

// manipulating text w jquery
$("h1").text("bye");

//manipulating attributes w jquery
$("a").attr("href", "https://www.yahoo.com")

//adding event listeners using jquery
// $("button").click(function ()
// {

//     $("h1").toggleClass("purp");
// });

$("input").keydown(function (event)
{
    $("h1").text(event.key);
});

    //or 

    $("h1").on("mouseover", function ()
{
    $("h1").toggleClass("purp");
});

//adding and removing elements w jquery
$("h1").before("<button>BEFORE</button>"); // outside and before
$("h1").after("<button>AFTER</button>"); // outside and after
$("h1").prepend("<button>PREPEND</button>"); // inside and before
$("h1").append("<button>APPEND</button>"); // inside and after

// $("button").remove(); // remove

//animation w jquery
var hidden = false;
$("button").on("click", function ()
{
    $("h1").slideToggle().slideToggle().animate(
        {
            opacity: 0
        }
    );
    // .animate(
    //     {
    //         margin: "20px"
    //     }
    // );
    //.slideToggle();
    //.hide
    //.show
    //.toggle toggles betweeen hide and show
    //.fadeOut
    //.fadeIn
    //.slideUp
    //.slideDown
}); 