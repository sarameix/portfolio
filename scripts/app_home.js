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
    // Getting Hamburger Menu Panel Element
    const $burgerMenuPanel = $('#hamburger-menu-panel');
    const $burgerMenuWidth = $burgerMenuPanel.width();
    // Toggle Menu Panel Based on Global Boolean Variable
    if(isHiddenMenu){ // If Menu Hidden
        $burgerMenuPanel.animate({'right': 0}, 600, 'swing');
        isHiddenMenu = false;
    } else { // If Menu Visible
        $burgerMenuPanel.animate({'right': -$burgerMenuWidth}, 450, 'swing');
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