let itemIdx = null
let itemVal = null

let swapVal = (idx1, idx2) => {
    let temp = groceryArr[idx2]
    groceryArr[idx2] = groceryArr[idx1]
    groceryArr[idx1] = temp
}

let recordData = () => {
    groceryVal = form.groceryInput.value
    numVal = parseInt(form.numInput.value)
}

function addGrocery()
{
    recordData()
    groceryArr.push(groceryVal)
    createTable()
}

function deleteGrocery()
{
    recordData()
    let idx = numVal - 1
    groceryArr.splice(idx, 1)
    createTable()
}

function moveUpList()
{

    recordData()

    if (isNaN(numVal))
    {
        numVal = 1; 
        document.getElementById("numInput").value = 1;
    }

    if (numVal < 1 || numVal > groceryArr.length)
    {
        alert("Invalid Grocery Item Number! Please try again!")
        return
    }
    
    let idx = numVal - 1

    if (itemIdx === null || itemIdx != idx)
    {
        itemIdx = idx
        itemVal = groceryArr[idx]
    }

    let currentIdx = groceryArr.indexOf(itemVal)
    
    if (currentIdx === 0)
    {
        alert("Can't move up anymore! \nEnter a number of a different grocery item")
        return
    }
    swapVal(currentIdx, currentIdx - 1)
    createTable()
    document.getElementById("numInput").value = String(groceryArr.indexOf(itemVal) + 1);
}

function moveDownList()
{
    recordData()

    // test case: input is empty
    if (isNaN(numVal))
    {
        numVal = 1
        document.getElementById("numInput").value = 1;
    }

    //test case: input is outside of valid range of numbers
    if (numVal < 1 || numVal > groceryArr.length)
    {
        alert("Invalid Grocery Item Number! Please try again!")
        return
    }

    let idx = numVal - 1

    // initializes global vars & tests index equality 
    if (itemIdx === null || itemIdx != idx)
    {
        itemIdx = idx
        itemVal = groceryArr[idx]
    }

    let currentIdx = groceryArr.indexOf(itemVal)

    if (currentIdx == groceryArr.length - 1)
    {
        alert("Can't move down anymore \nEnter a number of a different grocery item")
        return 
    }
    swapVal(currentIdx, currentIdx + 1)
    createTable()
    document.getElementById("numInput").value = String(groceryArr.indexOf(itemVal) + 1);
}

function createTable() {
    groceryTable.replaceChildren();
    let tableSize = groceryArr.length;
    (tableSize == 0) ? emptyCart() : addCartItems(tableSize)
}

function emptyCart() {
    let newRow = groceryTable.insertRow();
    let newCell = newRow.insertCell();
    newCell.innerHTML = "Empty!"
}

function addCartItems(tableSize) {
    for (let i = 0; i < tableSize; i++) {
        let newRow = groceryTable.insertRow();
        let newCell = newRow.insertCell();
        itemNum = i + 1;
        newCell.innerHTML = `Item ${itemNum}`;
        newCell = newRow.insertCell();
        newCell.innerHTML = groceryArr[i];
        }
}