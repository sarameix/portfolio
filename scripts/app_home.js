console.log('jQuery is working!');

// Function to Toggle Hamburger Menu
const toggleBurger = () => {
    const $burgerMenuPanel = $('#hamburger-menu-background');
    if($burgerMenuPanel.is(':visible')){
        $burgerMenuPanel.hide("slide", {direction: "right"}, 1000);
    } else {
        $burgerMenuPanel.show();
    }
}

// Wait for HTML to Load to Run This
$(() => {
    // Set Up Hamburger Menu Button to Toggle Menu
    $('#hamburger-menu-button').on('click', toggleBurger);
})