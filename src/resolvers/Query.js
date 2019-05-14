const Query = {
  players(parent, { data }, { prisma }, info) {
    return prisma.query.players({ data }, info);
  },
};

export { Query as default };
