/////////////////////////////////////
// * GLOBAL VARIABLE DECLARATION * //
/////////////////////////////////////

// Variable Tracking if Hamburger Menu is Open
let isHiddenMenu = true;
let isHiddenEducation = false;
let isHiddenExperience = false;
let isHiddenSkills = false;

// Initialize Variables for Resume Body
let $resumeEducation = null;
let $resumeExperience = null;
let $resumeSkills = null;

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

// Function to Open Resume PDF
const openResume = () => {
    window.open('./images/resume.pdf', "_blank");
    window.focus();
}

// Function to Toggle Dropdown
const toggleDropdown = (event) => {
    // Getting Arguments from Event
    let $dropdown = event.data.dropdown;
    let type = event.data.type;
    let $items = event.data.items;

    // Toggling Boolean and Items Based on Type
    if (type === 'education') {
        // Show Items if True
        if (isHiddenEducation === true) {
            $items.show();
            isHiddenEducation = false;
        } else { // Hide Items if False
            $items.hide();
            isHiddenEducation = true;
        }
    } else if (type === 'experience') {
        // Show Items if True
        if (isHiddenExperience === true) {
            $items.show();
            isHiddenExperience = false;
        } else { // Hide Items if False
            $items.hide();
            isHiddenExperience = true;
        }
    } else if (type === 'skills') {
        // Show Items if True
        if (isHiddenSkills === true) {
            $items.show();
            isHiddenSkills = false;
        } else { // Hide Items if False
            $items.hide();
            isHiddenSkills = true;
        }
    }
} 

////////////////////////////
// * EXECUTE AFTER LOAD * //
////////////////////////////

// Wait for HTML to Load to Run This
$(() => {

    // *** GETTING VARIABLES FOR RESUME POPULATION ***

    $resumeEducation = $('.education-item');
    $resumeExperience = $('.experience-item');
    $resumeSkills = $('.skills');

    // *** MAPPING CLICK AND HOVER FUNCTIONALITY ***

    // * HAMBURGER MENU *

    // Set Up Hamburger Menu Button to Toggle Menu
    $('#hamburger-menu-button').on('click', toggleBurger);

    // * RESUME SECTIONS *

    // Toggle Education on Click
    $('#education-dropdown').on(
        'click', 
        {
            dropdown: $('#education-dropdown'),
            type: 'education',
            items: $resumeEducation
        },
        toggleDropdown
    );

    // Toggle Experience on Click
    $('#experience-dropdown').on(
        'click', 
        {
            dropdown: $('#experience-dropdown'),
            type: 'experience',
            items: $resumeExperience
        },
        toggleDropdown
    );

    // Toggle Skills on Click
    $('#skills-dropdown').on(
        'click', 
        {
            dropdown: $('#skills-dropdown'),
            type: 'skills',
            items: $resumeSkills
        },
        toggleDropdown
    );

    // * RESUME HEADER *

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

    // * RESUME BODY *

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

    // * DOWNLOAD BUTTON *

    // Add Click Events to Download Button
    $('#open-resume').on('click', openResume);
      
})