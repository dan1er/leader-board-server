import { playerSchema } from "../schemas";

const Mutation = {
  async createPlayer(parent, { data }, { prisma }, info) {
    try {
      await playerSchema.validate(data);
    } catch (err) {
      throw new Error(err.errors);
    }

    return prisma.mutation.createPlayer(data, info);
  },

  async updatePlayer(parent, { id, data }, { prisma, request }, info) {
    try {
      await playerSchema.validate(data);
    } catch (err) {
      throw new Error(err.errors);
    }

    return prisma.mutation.updatePlayer(
      {
        where: {
          id,
        },
        data,
      },
      info
    );
  },

  async deletePlayer(parent, { id }, { prisma, request }, info) {
    return prisma.mutation.deletePlayer(
      {
        where: {
          id,
        },
      },
      info
    );
  },
};

export { Mutation as default };
