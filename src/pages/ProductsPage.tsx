import React, {useContext} from 'react';
import {useProducts} from "../hooks/useProducts";
import {ModalContext} from "../context/ModalContext";
import {IProduct} from "../models";
import {Loader} from "../components/Loader";
import {ErrorMessage} from "../components/ErrorMessage";
import {Product} from "../components/Product";
import {Modal} from "../components/Modal";
import {CreateProduct} from "../components/CreateProduct";

export function ProductsPage(props: any) {
    const {products, error, loading, addProduct} = useProducts()
    const {modal, open: openModal, close: closeModal} = useContext(ModalContext)

    const createHandler = (product: IProduct) => {
        closeModal()
        addProduct(product)
    }

    return (
        <div className="container mx-auto max-w-2xl pt-5">
            {loading && <Loader/>}
            {error && <ErrorMessage error={error}/>}
            {products.map(product => <Product key={product.id} product={product}/>)}

            {modal && <Modal title={"Create new product"} onClose={closeModal}>
                <CreateProduct onCreate={createHandler}/>
            </Modal>}

            <button
                className={"fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2"}
                onClick={openModal}
            >+
            </button>
        </div>
    );
}