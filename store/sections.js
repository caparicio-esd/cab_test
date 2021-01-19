/**
 * 
 */
export const state = () => ({
    sections: [], 
});

/**
 * 
 */
export const mutations = {
    FETCH_SECTIONS(state, sections) {
        sections.forEach(section => {
            state.sections.push(section);
        });
    }
};

/**
 * 
 */
export const actions = {
    fetchSections({ commit, dispatch }, sections) {
        commit("FETCH_SECTIONS", sections);
    }
};