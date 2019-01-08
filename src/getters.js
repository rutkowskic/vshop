export default {
    total: state => {
        return state.basket.reduce((total, next)=>{
            return total + (next.qty * next.price);
        }, 0);
    }
}