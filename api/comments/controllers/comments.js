"use strict";
const { sanitizeEntity } = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  create: async (ctx) => {
    const commentData = { ...ctx.request.body, user: ctx.state.user.id };
    const entity = strapi.services.comments.create(commentData);

    return sanitizeEntity(entity, { model: strapi.models.comments });
  },
};
