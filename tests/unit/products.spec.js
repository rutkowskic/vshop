import Vue from 'vue'
import Vuex from 'vuex'
import Product from '@/components/Products'
import { expect } from 'chai'
import store from '@/store'
import sinon from "sinon"
import actions from "@/actions"

describe('Products.vue', ()=>{

    describe('init', ()=>{
        it("inicjalizuje wlasciwosc 'products' z pusta tablica", ()=>{
            expect(Product.data()).to.eql({
                products: []
            })
        })
    })

    describe('addTobasket', ()=>{
        it('powinien wywolac metode commit ADD_PRODUCT gdy dodany jest do koszyka nowy produkt', ()=>{
            const commit = sinon.stub(store, 'commit')
            
            actions.add(store, {id: 1, name: 'T-shirt', price: 20, size: 'M'})
            
            expect(commit.args).to.deep.equal([
              ['ADD_PRODUCT', {id: 1, name: 'T-shirt', price: 20, size: 'M'}]
            ])

            commit.restore()
        })
        it('powinien wywolac metode commit INCREMENT_PRODUCT gdy produkt istnieje juz w koszyku', ()=>{
            let store = new Vuex.Store({
                state: {basket:[{id: 1, name: 'T-shirt', price: 20, size: 'M', qty: 1}]},
                actions
            })
            let storeMock = sinon.mock(store)
            storeMock.expects('commit').once().withArgs('INCREMENT_PRODUCT', {id: 1, name: 'T-shirt', price: 20, size: 'M', qty: 1});
          
            actions.add(store, {id: 1, name: 'T-shirt', price: 20, size: 'M'})
          
            storeMock.verify();
            storeMock.restore();
        })
    })

})