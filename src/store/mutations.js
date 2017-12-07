//  数据处理中心
import {
    TEST
} from './types'
import * as types from './types'
import getters from './getters'
import {state} from './state.js'


const mutations = {
    [types.TEST](state) {
        state.data = state.data + 1;
    }
};
export default {
	state,
	mutations,
	getters
}
