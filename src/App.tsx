import React from 'react';
import {Product} from "./components/Product";
import {useProducts} from "./hooks/useProducts";
import {Loader} from "./components/Loader";
import {ErrorMessage} from "./components/ErrorMessage";

function App() {
    const {products, error, loading} = useProducts()

    return (
        <div className="container mx-auto max-w-2xl pt-5">
            {loading && <Loader />}
            {error && <ErrorMessage error={error}/>}
            {products.map(product => <Product key={product.id} product={product}/>)}
        </div>
    );
}

export default App;
