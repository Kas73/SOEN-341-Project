import React from 'react'
import ListProducts from '../src/components/ProductList'
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils'

import {dummy_product_list} from './data/dummyProduct.data.json'
import {dummyCategory, dummyTwoCategoryList} from './data/dummyCategory.data.json'

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

test(`Created product list should have ${dummy_product_list.length} test items`, async () => {
    await act(async () => {
        render(<ListProducts products={dummy_product_list}/>, container)
    })

    var productListItems = container.querySelectorAll("[data-testid='product-entry']")

    expect(productListItems.length).toEqual(dummy_product_list.length)
})

test(`Created product list should have the product name, price and image`, async () => {
    await act(async () => {
        render(<ListProducts products={dummy_product_list}/>, container)
    })

    var productListItems = container.querySelectorAll("[data-testid='product-entry']")

    for(var i = 0; i < productListItems.length; i++) {
        var curProductData = dummy_product_list[i]
        var curProductInList = productListItems[i]

        var name = curProductInList.querySelector('[data-testid="product-name-link"]')

        expect(name).toBeDefined()
        expect(name.innerHTML).toEqual(curProductData.product_name)

        var nameAndPrice = curProductInList.querySelector('[data-testid="product-name-and-price"]')

        expect(nameAndPrice).toBeDefined()
        expect(nameAndPrice.innerHTML).toContain(`$${curProductData.product_price}`)

        var img = curProductInList.querySelector("[data-testid='product-image']")
        
        expect(img.getAttribute('src')).toEqual(curProductData.product_img)
    }
})

test("Each item in list should have an image link and name link to the details page", async () => {
    await act(async () => {
        render(<ListProducts products={dummy_product_list}/>, container)
    })

    var productListItems = container.querySelectorAll("[data-testid='product-entry']")

    for(var i = 0; i < productListItems.length; i++) {
        var curProductData = dummy_product_list[i]
        var curProductInList = productListItems[i]

        var name = curProductInList.querySelector('[data-testid="product-name-link"]')

        expect(name).toBeDefined()
        expect(name.tagName).toEqual("A")
        expect(name.getAttribute('href')).toEqual(`/details/${curProductData._id}`)

        var img = curProductInList.querySelector("[data-testid='product-image-link']")
        
        expect(img).toBeDefined()
        expect(img.tagName).toEqual("A")
        expect(img.getAttribute('href')).toEqual(`/details/${curProductData._id}`)
    }
})

test("Product list should be able to filter by a single category", async () => {
    await act(async () => {
        //the category filter for list products is an array
        render(<ListProducts products={dummy_product_list} categoryFilter={[dummyCategory]}/>, container)
    })

    var prodsWithDummyCat = dummy_product_list.filter(item => item.categories.includes(dummyCategory))
    var productListItems = container.querySelectorAll("[data-testid='product-entry']")

    for(var i = 0; i < productListItems.length; i++) {
        var curProductData = prodsWithDummyCat[i]
        var curProductInList = productListItems[i]

        var name = curProductInList.querySelector('[data-testid="product-name-link"]')

        expect(name).toBeDefined()
        expect(name.innerHTML).toEqual(curProductData.product_name)

        var nameAndPrice = curProductInList.querySelector('[data-testid="product-name-and-price"]')

        expect(nameAndPrice).toBeDefined()
        expect(nameAndPrice.innerHTML).toContain(`$${curProductData.product_price}`)

        var img = curProductInList.querySelector("[data-testid='product-image']")
        
        expect(img.getAttribute('src')).toEqual(curProductData.product_img)
    }
})

test("Product list should be able to filter by multiple categories", async () => {
    await act(async () => {
        render(<ListProducts products={dummy_product_list} categoryFilter={dummyTwoCategoryList}/>, container)
    })

    var prodsWithDummyCat = dummy_product_list.filter(item => item.categories.includes(dummyTwoCategoryList[0]) || item.categories.includes(dummyTwoCategoryList[1]))
    var productListItems = container.querySelectorAll("[data-testid='product-entry']")

    for(var i = 0; i < productListItems.length; i++) {
        var curProductData = prodsWithDummyCat[i]
        var curProductInList = productListItems[i]

        var name = curProductInList.querySelector('[data-testid="product-name-link"]')

        expect(name).toBeDefined()
        expect(name.innerHTML).toEqual(curProductData.product_name)

        var nameAndPrice = curProductInList.querySelector('[data-testid="product-name-and-price"]')

        expect(nameAndPrice).toBeDefined()
        expect(nameAndPrice.innerHTML).toContain(`$${curProductData.product_price}`)

        var img = curProductInList.querySelector("[data-testid='product-image']")
        
        expect(img.getAttribute('src')).toEqual(curProductData.product_img)
    }
})