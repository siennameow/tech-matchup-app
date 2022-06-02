const { Matchup, Tech } = require('../models');

const resolvers = {
    Query: {
        matchups: async () => {
            return Matchup.find()
        },
        matchup: async (parent, { matchupId }) => {
            return Matchup.findOne({ _id: matchupId });
        },
        techs: async () => {
            return Tech.find()
        }
    }

}

module.exports = resolvers;