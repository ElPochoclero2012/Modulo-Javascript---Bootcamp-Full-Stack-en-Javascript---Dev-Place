var compra = prompt("¿Cuanto ha gastado en su compra?");

var compraInt = parseInt(compra);

if (compraInt < 100)
{
    window.alert("No tenes descuento, total: " + compraInt);
} else if (compraInt >= 100 && compraInt <= 300)
{
    window.alert("5% de descuento en su compra, total: " + (compraInt-((compraInt)*0.05)));
} else if (compraInt > 300 && compraInt < 500)
{
    window.alert("10% de descuento en su compra, total: " + (compraInt-((compraInt)*0.1)));
} else if (compraInt >= 500)
{
    window.alert("15% de descuento en su compra, total: " + (compraInt-((compraInt)*0.15)));
} else 
{
    window.alert("No ingresaste un dato valido...");
}