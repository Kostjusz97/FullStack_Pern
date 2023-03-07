import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const destroyType = async (type) => {
  const {data} = await $authHost.post('api/type/destroy', type)
  return data
}

export const createBrand = async (brand) => {
    const {data} = await $authHost.post('api/brand/create', brand)
    return data
}

export const destroyBrand = async (brand) => {
  const {data} = await $authHost.post('api/brand/destroy', brand)
  return data
}

export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand', )
    return data
}

export const createDevice = async (device) => {
    const {data} = await $authHost.post('api/device/create', device)
    return data
}


export const fetchDevices = async (typeId, brandId, page, limit= 5) => {
    const {data} = await $host.get('api/device', {params: {
            typeId, brandId, page, limit
        }})
    return data
}

export const destroyDevice = async (device) => {
  const {data} = await $authHost.post('api/device/destroy', device)
  return data
}

export const fetchOneDevice = async (id) => {
    const {data} = await $host.get('api/device/' + id)
    return data
}