export const schoolRides = {
  students: [
    {id:1,name:'Lucas Mendoza',school:'Colegio San José',grade:'6to A',parentPhone:'+51 987 100 100',status:'activo',routes:['Ruta Mañana','Ruta Tarde']},
    {id:2,name:'Sofía García',school:'Colegio San José',grade:'4to B',parentPhone:'+51 987 200 200',status:'activo',routes:['Ruta Mañana']},
    {id:3,name:'Mateo Flores',school:'Instituto María Auxiliadora',grade:'3ro A',parentPhone:'+51 987 300 300',status:'activo',routes:['Ruta Tarde']},
    {id:4,name:'Valentina López',school:'Colegio San José',grade:'5to C',parentPhone:'+51 987 400 400',status:'inactivo',routes:[]},
    {id:5,name:'Alejandro Ruiz',school:'Instituto María Auxiliadora',grade:'2do B',parentPhone:'+51 987 500 500',status:'activo',routes:['Ruta Mañana','Ruta Tarde']},
  ],
  routes: [
    {id:1,name:'Ruta Mañana',school:'Colegio San José',schedule:'07:00-08:30',students:3,driver:'Diego Flores',vehicle:'UEU-700',status:'activa'},
    {id:2,name:'Ruta Tarde',school:'Colegio San José',schedule:'13:00-14:30',students:2,driver:'Laura Martín',vehicle:'UEW-900',status:'activa'},
    {id:3,name:'Ruta Mañana',school:'Instituto María Auxiliadora',schedule:'06:45-08:00',students:2,driver:'Miguel Rodríguez',vehicle:'UEX-1000',status:'activa'},
  ],
  trips: [
    {id:1,route:'Ruta Mañana (CSJ)',student:'Lucas Mendoza',pickupTime:'07:15',dropoffTime:'08:10',status:'completado',date:'2026-05-27',safetyScore:100},
    {id:2,route:'Ruta Mañana (CSJ)',student:'Sofía García',pickupTime:'07:05',dropoffTime:'08:00',status:'completado',date:'2026-05-27',safetyScore:100},
    {id:3,route:'Ruta Tarde (CSJ)',student:'Lucas Mendoza',pickupTime:'13:45',dropoffTime:'14:20',status:'en_curso',date:'2026-05-27',safetyScore:100},
    {id:4,route:'Ruta Mañana (IMA)',student:'Mateo Flores',pickupTime:'06:50',dropoffTime:'07:55',status:'completado',date:'2026-05-27',safetyScore:100},
  ],
};
