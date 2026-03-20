const permisos = {
    "0": "Sin permisos",
    "1": "Ejecución",
    "2": "Escritura",
    "3": "Escritura + Ejecución",
    "4": "Lectura",
    "5": "Lectura + Ejecución",
    "6": "Lectura + Escritura",
    "7": "Lectura + Escritura + Ejecución"
};

// 🔹 Llenar selects
function llenarSelect(select) {
    select.innerHTML = "";
    for (let i = 0; i <= 7; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.text = `${i} - ${permisos[i]}`;
        select.appendChild(option);
    }
}

const selUser = document.getElementById("user");
const selGroup = document.getElementById("group");
const selOthers = document.getElementById("others");

// Llenar selects
llenarSelect(selUser);
llenarSelect(selGroup);
llenarSelect(selOthers);

// 🔹 Input → Selects
document.getElementById("permiso").addEventListener("input", function() {
    let valor = this.value;

    valor = valor.replace(/[^0-9]/g, "");
    if (valor.length > 3) valor = valor.slice(0,3);
    valor = valor.split("").filter(num => num <= 7).join("");

    this.value = valor;

    selUser.value = valor[0] || "0";
    selGroup.value = valor[1] || "0";
    selOthers.value = valor[2] || "0";
});

// 🔹 Selects → Input
function actualizarDesdeSelects() {
    let nuevoValor = selUser.value + selGroup.value + selOthers.value;
    document.getElementById("permiso").value = nuevoValor;
}

selUser.addEventListener("change", actualizarDesdeSelects);
selGroup.addEventListener("change", actualizarDesdeSelects);
selOthers.addEventListener("change", actualizarDesdeSelects);