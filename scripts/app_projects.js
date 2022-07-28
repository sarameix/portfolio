/////////////////////////////////////
// * GLOBAL VARIABLE DECLARATION * //
/////////////////////////////////////

// Variable Tracking if Hamburger Menu is Open
let isHiddenMenu = true;

//////////////////////////////
// * FUNCTION DECLARATION * //
//////////////////////////////

// Function to Toggle Hamburger Menu
const toggleBurger = () => {
    // Getting Hamburger Menu Panel Element and Width
    const $burgerMenuPanel = $('#hamburger-menu-panel');
    const $burgerMenuWidth = $burgerMenuPanel.width();

    // Toggle Menu Panel Based on Global Boolean Variable
    if(isHiddenMenu){ // If Menu Hidden
        // Show Menu Panel
        $burgerMenuPanel.show(1000);

        // Toggle Buttons
        $('.hamburger-icon').css('display', 'none');
        $('#X1').css('display', 'block');
        $('#X2').css('display', 'block');

        // Change Boolean
        isHiddenMenu = false;
    } else { // If Menu Visible
        // Hide Menu Panel
        $burgerMenuPanel.hide(750);

        // Toggle Buttons
        $('.hamburger-icon').css('display', 'block');
        $('#X1').css('display', 'none');
        $('#X2').css('display', 'none');

        // Change Boolean
        isHiddenMenu = true;
    }
}

// Function to Show Project Overlay
const showOverlay = (event) => {
    // Getting Div from Arguments
    let $projDiv = event.data.div;

    // Show Overlay Div
    $projDiv.children().eq(2).fadeIn(500);

    // Delay Showing Title and Description
    setTimeout(function() {
        $projDiv.children().eq(0).slideToggle(750);
        $projDiv.children().eq(1).slideToggle(500);
    }, 175);
}

// Function to Show Project Overlay
const hideOverlay = (event) => {
    // Getting Div from Arguments
    let $projDiv = event.data.div;

    // Hide Overlay Div
    $projDiv.children().eq(2).fadeOut(800);

    // Delay Hiding Title and Description
    setTimeout(function() {
        $projDiv.children().eq(0).slideToggle(750);
        $projDiv.children().eq(1).slideToggle(500);
    }, 75);
}

////////////////////////////
// * EXECUTE AFTER LOAD * //
////////////////////////////

// Wait for HTML to Load to Run This
$(() => {
    // Set Up Hamburger Menu Button to Toggle Menu
    $('#hamburger-menu-button').on('click', toggleBurger);

    // Set Each Project Div Up with Hover Events
    // Found Documentation for Each Function Here:
    // https://api.jquery.com/each/
    $('.project').each(function(){
        // Show Overlay on Mouse Enter
        $(this).on(
            'mouseenter', 
            {div: $(this)},
            showOverlay
        );
        // Hide Overlay on Mouse Leave
        $(this).on(
            'mouseleave', 
            {div: $(this)},
            hideOverlay
        );
    })
})