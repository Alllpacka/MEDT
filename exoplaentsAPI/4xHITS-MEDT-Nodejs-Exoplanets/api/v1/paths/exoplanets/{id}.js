import {json} from "express";
import {exoplanetsModel, getExoplanetById} from "../../models/exoplanetsModel.js";

export default function (exoplanetsService) {
    let operations = {
        GET: getById,
        PUT: updateById,
        DELETE: deleteById,
        PATCH: updateSpecificById
    };

    async function getById(request, response, next) {
        // const exoplanet = exoplanetsModel.exoplanets.find(x => x.id == request.params.id);
        const exoplanet = await getExoplanetById(request.params.id)
        if (exoplanet !== undefined) {
            response
                .status(200)
                .json(exoplanet);
        } else {
            response.sendStatus(404);
        }
    }

    function updateById(request, response, next) {
        const id = request.params.id;

        const indexOfChange = exoplanetsModel.exoplanets.findIndex((planet) => planet.id === id);

        if (indexOfChange === -1) {
            response.status(404).send('404 error: Exoplanet not found')
        } else {
            exoplanetsModel.exoplanets[indexOfChange] = request.body;

            response.status(200).send('Exoplanet updated');
        }
    };

    async function deleteById(request, response, next) {
        const exoplanet = await getExoplanetById(request.params.id)
        if (exoplanet !== undefined) {
            response
                .status(200)
                .send('Exoplanet deleted');
        } else {
            response.sendStatus(404);
        }
    };

    function updateSpecificById(request, response, next) {
        const id = request.params.id;

        const updateExo = request.body;

        const indexOfChange = exoplanetsModel.exoplanets.findIndex((planet) => planet.id === id);

        if (indexOfChange === -1) {
            response.status(404).send('404 error: Exoplanet not found')
        } else {
            exoplanetsModel.exoplanets[indexOfChange] = {
                ...exoplanetsModel.exoplanets[indexOfChange], ...updateExo
            };

            response.status(200).send('Exoplanet updated');
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

    updateSpecificById.apiDoc = {
        summary: 'updates specific information of exoplanet by id',
        operationId: 'updateSpecificById',
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            planet_name: {
                                type: 'string'
                            },
                            hostname: {
                                type: 'string'
                            },
                            planet_letter: {
                                type: 'string'
                            }
                        }
                    }
                }
            }
        },
        parameters: [
            {
                name: 'id',
                in: 'path',
                description: 'id of exoplanet to change.',
                required: true,
                schema: {
                    type: 'integer',
                    format: 'int64'
                }
            }
        ],
        responses: {
            200: {
                description: 'updates specific information of exoplanet with the given id.',
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