import { json } from "express";
import {exoplanetsModel} from "../../models/exoplanetsModel.js";

export default function (exoplanetsService) {
    let operations = {
        GET: getById,
        PUT: updateById,
        DELETE: deleteById,
    };

    function getById(request, response, next) {
        const exoplanet = exoplanetsModel.exoplanets.find(x => x.id == request.params.id);
        if (exoplanet !== undefined) {
            response
                .status(200)
                .json(exoplanet);
        } else {
            response.sendStatus(404);
        }
    };

    function updateById(request, response, next) {
        const id = request.params.id;

        const updateExo = request.body;
    
        const indexOfChange = exoplanetsModel.exoplanets.findIndex((planet) => planet.id == id);
    
        if (indexOfChange == -1) {
            response.status(404).send('404 error: Exoplanet not found')
        } else {
            exoplanetsModel.exoplanets[indexOfChange] = {
                ...exoplanetsModel.exoplanets[indexOfChange], ...updateExo
            };

            console.log(exoplanetsModel.exoplanets[indexOfChange]);
    
            response.status(200).send('Exoplanet updated');
        }
    };

    function deleteById(request, response, next) {
        const id = parseInt(request.params.id);
        const indexOfDel = exoplanetsModel.exoplanets.findIndex((planet) => planet.id == id);
    
        if (indexOfDel == -1) {
            response.status(404).send('404 error: exoplanet not found');
        } else {
            exoplanetsModel.exoplanets.slice(indexOfDel, 1);
            response.status(200).send('exoplanet deleted', exoplanets[id]);
        }
    };

    getById.apiDoc = {
        summary: 'returns a single exoplanet by id.',
        operationId: 'getExoplanetById',
        parameters: [
            {
                name: 'id',
                in: 'path',
                description: 'id of exoplanet to return.',
                required: true,
                schema: {
                    type: 'integer',
                    format: 'int64'
                }
            }
        ],
        responses: {
            200: {
                description: 'an exoplanet with the given id.',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/exoplanet'
                        }
                    },
                    'application/xml': {
                        schema: {
                            $ref: '#/components/schemas/exoplanet'
                        }
                    }
                }
            },
            404: {
                description: 'exoplanet with given id does not exist.'
            }
        }
    };

    updateById.apiDoc = {
        summary: 'changes a single exoplanet by id.',
        operationId: 'changeExoplanetById',
        parameters: [
            {
                name: 'id',
                in: 'path',
                description: 'id of exoplanet to return.',
                required: true,
                schema: {
                    type: 'integer',
                    format: 'int64'
                }
            }
        ],
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/exoplanet'
                    }
                }
            }
        },
        responses: {
            200: {
                description: 'changed an exoplanet with the given id.',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/exoplanet'
                        }
                    },
                    'application/xml': {
                        schema: {
                            $ref: '#/components/schemas/exoplanet'
                        }
                    }
                }
            },
            404: {
                description: 'exoplanet with given id does not exist.'
            }
        }
    };

    deleteById.apiDoc = {
        summary: 'deletes a single exoplanet by id.',
        operationId: 'deleteExoplanetById',
        parameters: [
            {
                name: 'id',
                in: 'path',
                description: 'id of exoplanet to delete.',
                required: true,
                schema: {
                    type: 'integer',
                    format: 'int64'
                }
            }
        ],
        responses: {
            200: {
                description: 'deleted an exoplanet with the given id.',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/exoplanet'
                        }
                    },
                    'application/xml': {
                        schema: {
                            $ref: '#/components/schemas/exoplanet'
                        }
                    }
                }
            },
            404: {
                description: 'exoplanet with given id does not exist.'
            }
        }
    };

    return operations;
};