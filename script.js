function startGame()
{
    const defaultRows = 256;
    const defaultColumns = 256;

    setupBoard(defaultRows, defaultColumns);
    
}

function setupBoard (defaultRows, defaultColumns)
{
    let currentColor = "black";
    for (let i = 0; i < defaultRows; ++i)
    {
        let row = [];
        for (let j = 0; j < defaultColumns; ++j)
        {
            // creating a tile:
            let tile = document.createElement("div");

            // assigning it proper id:
            tile.id = getId (i, j);

            // adding event-listener:
            tile.addEventListener("mouseover", (event) => {
                tile.style.backgroundColor = currentColor;  
            });

            // adding the tile to the board:
            document.getElementById("drawing-board").append(tile);

            row.push(tile.id);
        }
        board.push(row);
    }
}



function getId (i, j)
{
    return String (i) + "-" + String (j);
}

// game starts here:
var board = [];
startGame();