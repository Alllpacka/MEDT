import apiDoc from '../api-doc.js';
import {exoplanetsModel} from "../models/exoplanetsModel.js";

export default function (exoplanetsService) {
    let operations = {
        GET: getExoplanets,
        POST: createExoplanet
    };

    function getExoplanets(request, response, next) {
        response
            .status(200)
            .json(exoplanetsService.getExoplanets());
    };

    function createExoplanet(request, response, next) {
        const exo = request.body;
        exoplanetsModel.exoplanets.push(exo);
        response.status(200).send('Added new exoplanet');
    };

    // NOTE: We could also use a YAML string here.
    getExoplanets.apiDoc = {
        summary: 'returns all exoplanets.',
        operationId: 'getExoplanets',
        parameters: [],
        responses: {
            200: {
                description: 'a list of exoplanets.',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: {
                                $ref: '#/components/schemas/exoplanet'
                            }
                        }
                    },
                    'application/xml': {
                        schema: {
                            type: 'array',
                            items: {
                                $ref: '#/components/schemas/exoplanet'
                            }
                        }
                    }
                }
            },
            default: {
                description: 'An error occurred',
            }
        }
    };

    createExoplanet.apiDoc = {
        summary: 'creates an exoplanet.',
        operationId: 'createExoplanet',
        parameters: [],
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
                description: 'created an exoplanet.',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: {
                                $ref: '#/components/schemas/exoplanet'
                            }
                        }
                    },
                    'application/xml': {
                        schema: {
                            type: 'array',
                            items: {
                                $ref: '#/components/schemas/exoplanet'
                            }
                        }
                    }
                }
            },
            default: {
                description: 'An error occurred',
            }
        }
    };

    console.log(getExoplanets);

    return operations;
};