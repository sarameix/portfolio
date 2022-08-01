/////////////////////////////////////
// * GLOBAL VARIABLE DECLARATION * //
/////////////////////////////////////

// *** HAMBURGER MENU VARIABLES ***

// Variable Tracking if Hamburger Menu is Open
let isHiddenMenu = true;

// *** LANDSCAPER VARIABLES ***

// User Object
const user = {
    tool: 'teeth',
    bank: 0,
    rate: 1,
    boughtStudents: false
};

// Tool Array
const toolBox = [
    'Teeth',
    'Rusty Scissors',
    'Push Mower',
    'Electric Mower',
    'Starving Students'
];

// Tool Cost Array
const costArray = [
    0,
    5,
    25,
    250,
    500
]

// Hourly Rate Array
const rateArray = [
    1,
    5,
    50,
    100,
    250
]

//////////////////////////////
// * FUNCTION DECLARATION * //
//////////////////////////////

// *** HAMBURGER MENU FUNCTIONS ***

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

// *** LANDSCAPER FUNCTIONS ***

// Cut Grass Function
const cutGrass = () => {
    // Add Daily Rate to Bank
    user.bank = user.bank + user.rate;

    // Update Bank Account in HTML to Reflect More Money
    $('#bank').text('Bank Account: $' + user.bank);

    // If Bank >= 1000 and Tool is Students,
    // Run Alert Saying You Win
    if (user.bank >= 1000 && user.boughtStudents === true) {
        alert('You won the game!');
    }

}

// Buy Tool Function
const buyTool = (index, idName) => {
    // Get Cost of Tool
    let cost = costArray[index];

    // If Cost of Tool < Bank
    if (cost <= user.bank) {
        // Subtract Cost of Tool from Bank
        user.bank = user.bank - cost;

        // Update User to Have New Tool
        user.tool = toolBox[index];

        // Get Rate of Tool
        let newRate = rateArray[index];

        // Update User to Have New Rate
        user.rate = newRate;

        // Update Bank and Daily Rate Stats in the HTML
        $('#bank').text('Bank Account: $' + user.bank);
        $('#rate').text('Daily Rate: $' + user.rate);
        $('#tool').text('Current Tool: ' + user.tool);

        // Remove Tool Div
        $('#' + idName).remove();
    } else {
    // Else
        // Run Alert that You Don't Have Enough Money
        alert('You don\'t have enough money to purchase this tool! Keep mowing more lawns!');
    }
}

// Buy Scissors Function
const buyScissors = () => {
    buyTool(1, 'scissors-div');
}

// Buy Electric Mower Function
const buyPMower = () => {
    buyTool(2, 'p-mower-div');
}

// Buy Electric Mower Function
const buyEMower = () => {
    buyTool(3, 'e-mower-div');
}

// Buy Students Function
const buyStudents = () => {
    buyTool(4, 'students-div');
    user.boughtStudents = true;
}

// Restart Game
const restartGame = () => {
    location.reload();
}

////////////////////////////
// * EXECUTE AFTER LOAD * //
////////////////////////////

// Wait for HTML to Load to Run This
$(() => {
    // Set Up Hamburger Menu Button to Toggle Menu
    $('#hamburger-menu-button').on('click', toggleBurger);

    // Function Mapping Lanscaper Buttons
    $(() => {
        $('#restart').on('click', restartGame);
        $('#cut-grass').on('click', cutGrass);
        $('#scissors').on('click', buyScissors);
        $('#p-mower').on('click', buyPMower);
        $('#e-mower').on('click', buyEMower);
        $('#students').on('click', buyStudents);
    });
})