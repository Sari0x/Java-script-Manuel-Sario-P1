function calcularPrestamo() {
  const monto = parseFloat(prompt("¿Cuánto dinero necesitas?"));
  const meses = parseInt(prompt("¿En cuántos meses querés cancelarlo?"));
  const tipo = prompt("¿Para qué necesitas el dinero? (personal, adelanto de haberes, hipoteca, otros)").toLowerCase();
  let tasa = 0;

  if (tipo === "personal") {
    tasa = 0.25;
  } else if (tipo === "adelanto de haberes") {
    tasa = 0.20;
  } else if (tipo === "hipoteca") {
    tasa = 0.15;
  } else {
    tasa = 0.40;
  }

  const intereses = monto * tasa * meses;
  const pagoTotal = monto + intereses;
  const pagoMensual = pagoTotal / meses;

  let resultado = `Con una tasa del ${tasa * 100}%, el pago total sería de $${pagoTotal.toLocaleString()} y por mes debés abonar $${pagoMensual.toLocaleString()}.`;
  alert(resultado);

  let deseaPagarAnticipado = prompt("¿Querés pagar anticipadamente alguna cantidad de dinero? (s/n)").toLowerCase();

  if (deseaPagarAnticipado === "s") {
    let montoAnticipado = parseFloat(prompt("¿Cuánto dinero querés pagar anticipadamente?"));
    if (montoAnticipado > pagoMensual) {
      resultado = "El monto a pagar anticipadamente no puede superar al pago mensual.";
    } else {
      resultado = "Detalle de pagos anticipados:\n";
      let pagoTemporal = pagoTotal;
      for (let i = 1; i <= meses; i++) {
        pagoTemporal = pagoTemporal - montoAnticipado;
        resultado += `Pago mensual ${i}: $${pagoTemporal.toLocaleString()} (pago anticipado de $${montoAnticipado.toLocaleString()})\n`;
      }
    }
  } else {
    resultado = "Detalle de pagos mensuales:\n";
    let pago = pagoTotal;
    while (pago > 0) {
      pago = pago - pagoMensual;
      resultado += `Pago mensual: $${pagoMensual.toLocaleString()} (saldo restante: $${pago.toLocaleString()})\n`;
    }
    resultado += "¡Felicidades, ya pagaste tu préstamo!";
  }

  alert(resultado);
}

calcularPrestamo();