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
    },

    Mutation: {
        addMatchup: async (parent, { tech1, tech2 }) => {
            return Matchup.create({ tech1, tech2});
        },
        addVote: async (parent, {}) => {
            
        }
    }

}

module.exports = resolvers;