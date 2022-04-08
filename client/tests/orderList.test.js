import React from 'react'
import OrderList from '../src/components/OrderList'
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils'

import { dummyOrder } from './data/dummyOrder.data.json'

let container = null;
beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
})

afterEach(() => {
    unmountComponentAtNode(container)
    container.remove()
    container = null
})

test(`Order list should have an id, a list of products ordered, a total and a cancel button`, async () => {
    await act(async () => {
        render(<OrderList eachOrder={dummyOrder}/>, container)
    })

    var orderId = container.querySelector("[data-testid='order-id']")
    var productListItems = container.querySelectorAll("[data-testid='order-product-item']")
    var orderTotal = container.querySelector("[data-testid='order-total']")
    var orderCancelButton = container.querySelector("[data-testid='order-cancel-button']")

    expect(orderId).toBeDefined()
    expect(orderId.innerHTML).toEqual(dummyOrder._id)

    expect(orderTotal).toBeDefined()
    expect(orderTotal.innerHTML).toEqual(`$${dummyOrder.total}`)

    expect(orderCancelButton).toBeDefined()

    expect(productListItems.length).toEqual(dummyOrder.order.length)
})

test(`Created product list should have the product name, price and quantity`, async () => {
    await act(async () => {
        render(<OrderList eachOrder={dummyOrder}/>, container)
    })

    var productListItems = container.querySelectorAll("[data-testid='product-entry']")

    for(var i = 0; i < productListItems.length; i++) {
        var curProductData = dummyOrder.order[i]
        var curProductInList = productListItems[i]

        var name = curProductInList.querySelector('[data-testid="order-product-name"]')

        expect(name).toBeDefined()
        expect(name.innerHTML).toEqual(curProductData.product_name)

        var price = curProductInList.querySelector('[data-testid="order-product-price"]')

        expect(price).toBeDefined()
        expect(price.innerHTML).toContain(`Price: $${curProductData.price}`)

        var quantity = curProductInList.querySelector("[data-testid='order-product-quantity']")
        
        expect(quantity).toBeDefined()
        expect(quantity.innerHTML).toContain(`Quantity: ${curProductData.price}`)
    }
})