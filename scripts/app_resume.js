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

// Function to Turn Resume Blue
const turnResumeBlue = () => {
    $('#resume-header').css('background-color', 'rgb(201, 221, 247)');
    $('#resume-body').css('background-color', 'rgb(225, 235, 248)');
}

// Function to Turn Resume Pink
const turnResumePink = () => {
    $('#resume-header').css('background-color', 'rgb(247, 201, 222)');
    $('#resume-body').css('background-color','rgb(248, 225, 238)');
}

////////////////////////////
// * EXECUTE AFTER LOAD * //
////////////////////////////

// Wait for HTML to Load to Run This
$(() => {
    // Set Up Hamburger Menu Button to Toggle Menu
    $('#hamburger-menu-button').on('click', toggleBurger);

    // Add Hover Events to Resume Header
    // Mouse Enter
    $('#resume-header').on(
        'mouseenter', 
        turnResumePink
    );
    // Mouse Exit
    $('#resume-header').on(
        'mouseleave', 
        turnResumeBlue
    );

    // Add Hover Events to Resume Body
    // Mouse Enter
    $('#resume-body').on(
        'mouseenter', 
        turnResumePink
    );
    // Mouse Exit
    $('#resume-body').on(
        'mouseleave', 
        turnResumeBlue
    );
      
})