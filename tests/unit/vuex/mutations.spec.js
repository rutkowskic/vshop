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
        it('obiekt state powinien miec wlasciwosc basket', ()=>{
            expect(state).to.have.property('basket')
        })
        it('wlasciwosc basket powinna być typu array', ()=>{
            expect(state.basket).to.be.a('array')
        })
        it('dodanie itemu do koszyka', ()=>{
            mutations[ADD_PRODUCT](state, {id: 1, name: 'T-shirt', price: 20, qty: 1, size: 'M'})
            expect(state.basket).to.eql([{id: 1, name: 'T-shirt', price: 20, qty: 1, size: 'M'}])
        })
        it('item powinien byc typu object', ()=>{
            mutations[ADD_PRODUCT](state, {id: 1, name: 'T-shirt', price: 20, qty: 1, size: 'M'})
            expect(state.basket[0]).to.be.a('object')
        })
    })
})