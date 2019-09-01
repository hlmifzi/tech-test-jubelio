
import { observable, action } from "mobx";
import ROOT_URL from '../services/api/URLApi';

class ProductStore {
    @observable product = []
    @observable productDetail = []
    @observable carousel = [
        {
            imageUrl: "https://www.desaindistro.com/wp-content/uploads/2018/06/SLIDER_desain-kaos-distro-wanita-02.jpg",
            mainText: "DISKON AKHIR TAHUN",
            descText: "Diskon Up to 50%"
        },
        {
            imageUrl: "https://www.desaindistro.com/wp-content/uploads/2018/06/SLIDER_desain-kaos-distro-pria-01-2.jpg",
            mainText: "HOT SALE",
            descText: "Diskon Up to 50%"
        },
    ]

    @action getProduct = async () => {
        const getData = await ROOT_URL.get('getProduct')
        this.product = getData.data.data
    }

    @action getProductDetail = async (param) => {
        const getData = await ROOT_URL.get(`getProductDetail/${param}`)
        this.productDetail = getData.data.data
    
        return getData.data
    }

    @action updateProduct = async (param,payload) => {
        const getData = await ROOT_URL.post(`updateProduct/${param}`, payload)

        return getData.data
    }

    @action getProductFromElevenia = async (param) => {
        const action = await ROOT_URL.get(`getProductFromElevenia/${param}`)
        const getDataNew = await ROOT_URL.get('getProduct')
        this.product = getDataNew.data.data

        return action.data 
    }
}

const store = new ProductStore()
export default store