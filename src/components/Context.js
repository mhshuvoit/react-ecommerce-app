import React, { Component } from "react"
import { storeProducts } from "./Database"
const ProductContext = React.createContext()

class ProductProvider extends Component {
    state = {
        products: [],
        modalOpen: false,
        modalProduct: '',
        cart: [],
        searchTerm: '',
        detailProduct: '',
        subTotal: '',
        tax: '',
        total: '',
        subCount: ''
    }

    componentDidMount() {
        this.setState({ products: storeProducts })
    }

    openModal = id => {
        const product = this.state.products.find(item => item.id === id)
        this.setState({
            modalProduct: product,
            modalOpen: true
        })
    }

    closeModal = () => {
        this.setState({ modalOpen: false })
    }

    handleDetail = id => {
        const product = this.state.products.find(item => item.id === id)
        this.setState({ detailProduct: product })
    }

    addToCart = id => {
        let tempProducts = [...this.state.products]
        let index = tempProducts.indexOf(this.state.products.find(item => item.id === id))
        let product = tempProducts[index]
        product.inCart = true
        product.count = 1
        product.total = product.price

        let subCount = 1
        this.state.cart.map(item => (subCount += item.inCart))

        this.setState({
            cart: [...this.state.cart, product],
            subCount: subCount
        }, this.addTotal)
    }

    handleSearch = value => {
        this.setState({ searchTerm: value })
    }

    performSearch = () => {
        return this.state.products.filter(item => item.title
            .toLowerCase()
            .includes(this.state.searchTerm.toLowerCase())
        )
    }

    increment = id => {
        const tempCart = [...this.state.cart]
        const selectedProduct = tempCart.find(item => item.id === id)
        const index = tempCart.indexOf(selectedProduct)
        const product = tempCart[index]
        product.count = product.count + 1
        product.total = product.count * product.price
        this.setState({ cart: [...tempCart] }, this.addTotal)
    }

    decrement = id => {
        const tempCart = [...this.state.cart]
        const selectedProduct = tempCart.find(item => item.id === id)
        const index = tempCart.indexOf(selectedProduct)
        const product = tempCart[index]
        product.count = product.count - 1
        if (product.count === 0) {
            this.removeItem(id)
        } else {
            product.total = product.count * product.price
            this.setState({ cart: [...tempCart] }, this.addTotal)
        }
    }

    removeItem = id => {
        let tempCart = [...this.state.cart]
        let selectCart = tempCart.filter(item => item.id !== id)

        let tempProducts = [...this.state.products]
        let index = tempProducts.indexOf(this.state.products.find(item => item.id === id))
        let removeProduct = tempProducts[index]
        removeProduct.inCart = false
        removeProduct.count = 0
        removeProduct.total = 0

        this.setState({
            cart: [...selectCart],
            products: [...tempProducts]
        }, this.addTotal)
    }

    clearCart = () => {
        let tempProducts = [...this.state.products]
        let inCartTrue = tempProducts.map(item => item)
        inCartTrue.inCart = false
        inCartTrue.count = 0
        inCartTrue.total = 0

        this.setState({
            cart: [],
            products: [...inCartTrue]
        }, this.addTotal)
    }

    addTotal = () => {
        let subTotal = 0
        this.state.cart.map(item => (subTotal += item.total))
        const tax = parseFloat(subTotal * 0.1.toFixed(2))
        const total = subTotal + tax
        this.setState({
            subTotal: subTotal,
            tax: tax,
            total: total
        })
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                products: this.performSearch(),
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                handleSearch: this.handleSearch,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer

export { ProductProvider, ProductConsumer }