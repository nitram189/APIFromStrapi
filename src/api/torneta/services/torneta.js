'use strict';

/**
 * torneta service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::torneta.torneta');
