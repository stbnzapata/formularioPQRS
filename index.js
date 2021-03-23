const { Pool } = require('pg');

const config = {
    user: 'hernandozapata',
    host: 'postgres.pol.com.co',
    password: 'de6jAr5z',
    database: 'BPMS-SUMANTI'
};

const pool = new Pool(config);

const getPQRS = async ()=>{

    try {
        const res = await pool.query('select * from auxiliary.resgistro_pqrs_esteban_zapata');
        console.log(res.rows);
    } catch (error){
        console.log(error);
    }
; 
};

const insertPQRS = async ()=>{
    const text = 'INSERT INTO auxiliary.resgistro_pqrs_esteban_zapata(fecha, identificacion, nombre, apellido, direccion, email, celular, solicitud, descripcion) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)'
    const values = ['23/12/2020','8989','feliciano','mosquera','Calle 35 # 52 - 37','mosquito17@gmail.com','3215897485','Felicitacion','Los felicito por tan buenos panes']
    const res = await pool.query(text, values);
    console.log(res);
}

insertPQRS();

