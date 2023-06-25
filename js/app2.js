class Cuenta{
    cliente;
    campaña;
    plaza;
    gerencia;
    jefatura;
    constructor(cliente, campaña, plaza, gerencia, jefatura){
        this.cliente = cliente;
        this.campaña = campaña;
        this.plaza = plaza;
        this.gerencia = gerencia;
        this.jefatura = jefatura;
    }

}
//array de objetos creados mediante una clase con datos de clientes y especificaciones del mismo.
const Cuentas = [
     BHCust = new Cuenta('Banco Hipotecario', 'Customer', 'Formosa', 'Cristian Zozaya', 'Lizzie Ruiz Diaz'),
     BHCob = new Cuenta('Banco Hipotecario', 'Cobranzas', 'Formosa', 'Cristian Zozaya', 'Lizzie Ruiz Diaz'),
     Claro611 = new Cuenta('Claro', 'Customer', 'Cordoba', 'Carolina Simes', 'Emilse Copetti'),
     ClaroMora = new Cuenta('Claro', 'Cobranzas', 'Cordoba', 'Carolina Simes', 'Martin Cappuozzo'),
     ClaroTec = new Cuenta('Claro', 'Retencion', 'Cordoba', 'Carolina Simes', 'Karina Lizzama'),
     Telecom = new Cuenta('Telecom', 'Customer', 'Buenos Aires', 'Fabian Perezlindo', 'Natalie Manduci'),
]

let continuar;

// se solicitaran los datos de un nuevo cliente para sumar en la ticketera a los ya cargados previamente
do {
    let cliente;
    let campaña;
    let plaza;
    let gerencia;
    let jefatura;
    cliente = prompt('Ingrese el nuevo cliente/empresa a cargar');
    campaña = prompt('Indique si se trata de una cuenta Customer/Retencion/Cobranzas/Otro');
    plaza = prompt('Ingrese la plaza donde se encontrarán los asesores');
    gerencia = prompt('Nombre del Gerente');
    jefatura = prompt('Nombre del jefe de la cuenta');

    nuevaCuenta = new Cuenta(cliente, campaña, plaza, gerencia, jefatura);
    Cuentas.push(nuevaCuenta);
    continuar = prompt(`La nueva cuenta de la gerencia ${gerencia} ha sido creada exitosamente. Desea agregar otra cuenta? si / no`);
}
    while(continuar === 'si');

console.log(Cuentas);

// se solicita un dato por cual filtrar el array para conocer todos los datos ingresados en dicha especificación. 

let criterioBusqueda;
criterioBusqueda = prompt('Ingrese el criterio de búsqueda: "cliente", "campaña", "plaza", "gerencia" o "jefatura"');
const busqueda = Cuentas.map((cliente) => cliente[criterioBusqueda]);
console.log(busqueda);
busqueda.forEach((filtro) => console.log(filtro));











/* const BHCust = new Cuenta('Banco Hipotecario', 'Customer', 'Formosa', 'Cristian Zozaya', 'Lizzie Ruiz Diaz');
const BHCob = new Cuenta('Banco Hipotecario', 'Cobranzas', 'Formosa', 'Cristian Zozaya', 'Lizzie Ruiz Diaz');
const Claro611 = new Cuenta('Claro', 'Customer', 'Cordoba', 'Carolina Simes', 'Emilse Copetti');
const ClaroMora = new Cuenta('Claro', 'Cobranzas', 'Cordoba', 'Carolina Simes', 'Martin Cappuozzo');
const ClaroTec = new Cuenta('Claro', 'Retencion', 'Cordoba', 'Carolina Simes', 'Karina Lizzama');
const Telecom = new Cuenta('Telecom', 'Customer', 'Buenos Aires', 'Fabian Perezlindo', 'Natalie Manduci'); */

/* console.log(Cuentas[0]); */
/* const Cuentas = [
    {cuenta: 'Banco Hipotecario', campaña: 'customer', plaza: 'fsa', jefatura: 'Lizzie Ruiz Díaz'},
    {cuenta: 'Banco Hipotecario', campaña: 'cobranzas', plaza: 'fsa', jefatura: 'Lizzie Ruiz Díaz'},
    {cuenta: 'Claro', campaña: 'customer', plaza: 'cba', jefatura: 'Emilse Churruca'},
    {cuenta: 'Claro', campaña: 'retención', plaza: 'cba', jefatura: 'Juan Pablo Esquivel'},
    {cuenta: 'Claro', campaña: 'cobranzas', plaza: 'cba', jefatura: 'Ana Agresta',},
    {cuenta: 'Telecom', campaña: 'customer', plaza: 'ba', jefatura: 'Natalie Manduci'}
] */


