function calculateAndDisplay() {
    const letterToNumber = {
        'A': '1', 'J': '1', 'S': '1',
        'B': '2', 'K': '2', 'T': '2',
        'C': '3', 'L': '3', 'U': '3',
        'D': '4', 'M': '4', 'V': '4',
        'E': '5', 'N': '5', 'W': '5',
        'F': '6', 'O': '6', 'X': '6',
        'G': '7', 'P': '7', 'Y': '7',
        'H': '8', 'Q': '8', 'Z': '8',
        'I': '9', 'R': '9'
    };

    const fName = document.getElementById("fName").value.toUpperCase();
    const lName = document.getElementById("lName").value.toUpperCase();

    const getNumber = (int) => {
        return letterToNumber[int] ? parseInt(letterToNumber[int]) : 0;
    };

    const calculateSum = (name) => {
        return name.split('').map(getNumber).reduce((acc, num) => acc + num, 0);
    };

    const totalSum = calculateSum(fName) + calculateSum(lName);

    let formattedTotalSum = totalSum;

    if (![9, 11, 22, 33].includes(totalSum)) {
        while (formattedTotalSum > 10) {
            formattedTotalSum = formattedTotalSum.toString().split('').map(Number).reduce((acc, digit) => acc + digit, 0);
            if (formattedTotalSum == 10) {
                formattedTotalSum = 1;
            }
        }
    }

    const resultDiv = document.getElementById("result");

    let message = '';
    switch (formattedTotalSum) {
        case 1:
            message = "<b>TUO NUMERO È 1.</b><br><br> Dotato di spirito di iniziativa, intraprendente, capace di comandare, indipendente, determinato, individualista.";
            break;
        case 2:
            message = "<b>TUO NUMERO È 2.</b><br><br> Collaborativo, versatile, rispettoso, capace lavorare in team, buon mediatore.";
            break;
        case 3:
            message = "<b>TUO NUMERO È 3.</b><br><br> Auto-espressione, comunicatività, socializzazione, vena artistica, entusiasmo verso la vita.";
            break;
        case 4:
            message = "<b>TUO NUMERO È 4.</b><br><br> Valori forti, ordine, dedizione, ribellione, in costante evoluzione.";
            break;
        case 5:
            message = "<b>TUO NUMERO È 5.</b><br><br> Espansivo, visionario, avventuroso, uso costruttivo della libertà.";
            break;
        case 6:
            message = "<b>TUO NUMERO È 6.</b><br><br> Responsabile, protettivo, premuroso, di supporto, disponibile verso la comunità, equilibrato, compassionevole.";
            break;
        case 7:
            message = "<b>TUO NUMERO È 7.</b><br><br> Spirito analitico, comprensivo, preparato, consapevole, studioso, riflessivo.";
            break;
        case 8:
            message = "<b>TUO NUMERO È 8.</b><br><br> Ambizioso, che punta al prestigio e al potere, materialista.";
            break;
        case 9:
            message = "<b>TUO NUMERO È 9.</b><br><br> Filantropo, generoso, altruista, creativo, forte senso del dovere.";
            break;
        case 11:
            message = "<b>TUO NUMERO È 11.</b><br><br> Spirituale, intuitivo, ascetico, idealista, sognatore.";
            break;
        case 22:
            message = "<b>TUO NUMERO È 22.</b><br><br> (in numerologia il numero 22 è considerato il più potente di tutti, per questo viene definito spesso Master builder): Temerario, forte, abile nel comandare.";
            break;
        default:
            message = "Per favore inserisci il tuo nome e cognome.";
    }

    resultDiv.innerHTML = `${message}`;
}
