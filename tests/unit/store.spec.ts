import Vuex from "vuex";

import store from "../../src/store";

describe("store index.js", () => {
    it("returns a store instance", () => {
        expect(store).toBeInstanceOf(Vuex.Store);
    });
});
