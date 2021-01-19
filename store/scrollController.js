/**
 * 
 */
export const state = () => ({
    controllers: [], 
    scenes: [], 
    controllerSceneRelations: []
});

/**
 * 
 */
export const mutations = {
    ADD_CONTROLLER(state, controller) {
        state.controllers.push(controller);
    },
    UPDATE_CONTROLLER(state, controller) {
        state.controllers.splice(0, 1, controller);
    },
    ADD_SCENE(state, scene) {
        state.scenes.push(scene);
    },
    UPDATE_SCENE(state, scene) {
        state.scenes.splice(0, 1, scene);
    }
};

/**
 * 
 */
export const actions = {
    addController({ commit, dispatch }, payload) {
        commit("ADD_CONTROLLER", payload);
    }, 
    addScene({ commit, dispatch }, payload) {
        commit("ADD_SCENE", payload);
    }
};