import './Product.css'

function Product() {
    return(
        <div className="product-section">
        <div className="product-card">
            <img src="https://i5.walmartimages.com/asr/6e3b6c0e-e570-4b44-ae87-3788fdf60c52_1.1b70b69e0f8b29d8afeb40ee23e3c79c.jpeg" alt="Samsung Galaxy S20 Ultra" />
            <div className="product-details">
                <h2 className="product-title">Samsung Galaxy S20 Ultra</h2>
                <p className="product-condition">Brand New</p>
                <p className="product-price">$999.99</p>
                <p className="product-shipping">Free Shipping</p>
            </div>
        </div>
        <div className="product-card">
            <img src="https://i5.walmartimages.com/asr/f305e36b-3c5b-49d7-bc23-3dcbb3af54b2_1.43ee8cdd88de06d57a53f21b4ae1b11a.jpeg" alt="Samsung Galaxy S21" />
            <div className="product-details">
                <h2 className="product-title">Samsung Galaxy S21</h2>
                <p className="product-condition">Brand New</p>
                <p className="product-price">$799.99</p>
                <p className="product-shipping">Free Shipping</p>
            </div>
        </div>
        <div className="product-card">
            <img src="https://i5.walmartimages.com/asr/aec8c70d-e32e-4cc4-abc3-73b74e01a4c5_1.4be25868af2e2f787e7c2f761b5fae19.jpeg" alt="Samsung Galaxy Note 20" />
            <div className="product-details">
                <h2 className="product-title">Samsung Galaxy Note 20</h2>
                <p className="product-condition">Brand New</p>
                <p className="product-price">$899.99</p>
                <p className="product-shipping">Free Shipping</p>
            </div>
        </div>
        <div className="product-card">
            <img src="https://i5.walmartimages.com/asr/f92b4a3c-4c9b-4d5c-9e54-bc39e6d0a9ba_1.f46b7a7cbda7274c7b7ffb54afebe445.jpeg" alt="Samsung Galaxy Z Fold 2" />
            <div className="product-details">
                <h2 className="product-title">Samsung Galaxy Z Fold 2</h2>
                <p className="product-condition">Brand New</p>
                <p className="product-price">$1,999.99</p>
                <p className="product-shipping">Free Shipping</p>
            </div>
        </div>
    </div>
    )
}
export default Product