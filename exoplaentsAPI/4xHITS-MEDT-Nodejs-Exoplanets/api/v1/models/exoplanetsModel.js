import mysql from 'mysql2/promise';
import config from '../../../config/dbConfig.js'

// connection to database
const connection = await mysql.createConnection(config);

export async function getAllExoplanets() {
    const [results] = await connection.execute(
        'SELECT id, planet_name, hostname, planet_letter FROM `exoplanets`'
    );
    if (results.length > 0) {
        return results;
    }
    return undefined;
}

export async function getExoplanetById(id) {
    const [results] = await connection.execute(
        'SELECT id, planet_name, hostname, planet_letter FROM `exoplanets` WHERE `id` LIKE ?',
        [id]
    );

    if (results.length > 0) {
        console.log(results[0])
        return results[0]
    }
    return undefined;
}

export async function createExoplanetInDB(exo) {
    const [results] = await connection.execute(
        'INSERT INTO `exoplanets` (planet_name, hostname, planet_letter, ecliptic_longitude, ecliptic_latitude, galactic_latitude, galactic_longitude) VALUES (?,?,?,0,0,0,0)', [exo.planet_name, exo.hostname, exo.planet_letter]
    );

    if (results.length > 0) {
        console.log(results[0])
        return results[0]
    }
    return undefined;
}

export async function deleteExoplanetById(id) {
    const [results] = await connection.execute(
        'DELETE FROM `exoplanets` WHERE `id` LIKE ?',
        [id]
    );

    if (results.length > 0) {
        console.log(results[0])
        return results[0]
    }
    return undefined;
}

export const exoplanetsModel = {
    exoplanets: [
        {
            id: 1,
            planet_name: 'WASP-47 b',
            hostname: 'WASP-47',
            planet_letter: 'b'
        },
        {
            id: 2,
            planet_name: 'WASP-47 c',
            hostname: 'WASP-47',
            planet_letter: 'c'
        },
        {
            id: 3,
            planet_name: 'WASP-47 d',
            hostname: 'WASP-47',
            planet_letter: 'd'
        },
        {
            id: 4,
            planet_name: 'WASP-47 e',
            hostname: 'WASP-47',
            planet_letter: 'e'
        }
    ]
};