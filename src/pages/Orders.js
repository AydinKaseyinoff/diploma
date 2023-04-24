import OrderList from "../components/OrderList/OrderList";

export default function Orders() {
    return (
        <div className="Orders">
            <h1>
                Orders
                <OrderList />
            </h1>
        </div>
    )
}