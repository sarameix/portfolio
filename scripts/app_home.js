/////////////////////////////////////
// * GLOBAL VARIABLE DECLARATION * //
/////////////////////////////////////

// Variable Tracking if Hamburger Menu is Open
let isHiddenMenu = true;

// Array with Image Names
const imageArray = [
    "url('./images/image-swap-01.jpg')",
    "url('./images/image-swap-02.jpg')",
    "url('./images/image-swap-03.jpg')",
    "url('./images/image-swap-04.jpg')",
    "url('./images/image-swap-05.jpg')"
];

// Index Tracker
let currentImageIndex = 0;

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

// Function to Toggle Home Page Image
const toggleImage = () => {
    // Getting Index for Replacing Image
    currentImageIndex++;
    if (currentImageIndex === imageArray.length) {
        currentImageIndex = 0;
    }

    // Replacing Image on Page
    $('#art-image').css('background-image', imageArray[currentImageIndex]);
}

////////////////////////////
// * EXECUTE AFTER LOAD * //
////////////////////////////

// Wait for HTML to Load to Run This
$(() => {
    // Set Up Hamburger Menu Button to Toggle Menu
    $('#hamburger-menu-button').on('click', toggleBurger);

    // Set Up Image Toggle on Click
    $('#art-image').on('click', toggleImage);
})