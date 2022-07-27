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
        $burgerMenuPanel.css('display', 'block');
        $burgerMenuPanel.animate({'right': 0}, 600, 'swing');
        isHiddenMenu = false;
    } else { // If Menu Visible
        // Found Code for Next 3 Lines on Stack Overflow
        // Used to Delay Changing Display to Hidden in Panel's CSS
        // https://stackoverflow.com/questions/5396119/using-jquery-delay-with-css
        $burgerMenuPanel.animate({'right': -$burgerMenuWidth}, 450, 'swing').delay(450).queue(function (next) { 
            $burgerMenuPanel.css('display', 'none'); 
            next();
        });
        isHiddenMenu = true;
    }
}

////////////////////////////
// * EXECUTE AFTER LOAD * //
////////////////////////////

// Wait for HTML to Load to Run This
$(() => {
    // Set Up Hamburger Menu Button to Toggle Menu
    $('#hamburger-menu-button').on('click', toggleBurger);
})