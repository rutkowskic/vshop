import mutations from '@/mutations'
import { expect } from 'chai'
import { ADD_PRODUCT, INCREMENT_PRODUCT, DECREMENT_PRODUCT, REMOVE_PRODUCT } from '@/types'

describe('mutations', ()=>{
    let state
    beforeEach(()=>{
        state = {
            basket: []
        }
    })
    describe('ADD_PRODUCT', ()=>{
        it('dodanie itemu do koszyka', ()=>{
            mutations[ADD_PRODUCT](state, {id: 1, name: 'T-shirt', price: 20, qty: 1, size: 'M'})
            expect(state.basket).to.eql([{id: 1, name: 'T-shirt', price: 20, qty: 1, size: 'M'}])
        })
    })
})