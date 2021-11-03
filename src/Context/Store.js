import React, {createContext, useState} from "react"

export const Storage = createContext();
const StoreContext = ({children}) => {
    let [name, setName] = useState();
    let [phone, setPhone] = useState();
    let [email, setEmail] = useState();
    let [password, setPassword] = useState();
    let [image, setImage] = useState();
    let [price, setPrice] = useState();
    let [description, setDesc] = useState();
    let [quantity, setQuantity] = useState();
    let [open, setOpen] = useState (false);
    let [post, setPost] = useState([]);
    let [msg, setMsg] =useState([]);
    let [count, SetCount]=useState("");
    let [cart, setCart]= useState([])

    let state = {
        info: [name, setName],
        phone:[phone, setPhone],
        email: [email, setEmail],
        password: [password, setPassword],
        pimage:[image, setImage],
        pprice: [price, setPrice],
        pdesc:[description, setDesc],
        pqty: [quantity, setQuantity],
        modal: [open, setOpen],
        poster:[post, setPost],
        msg: [msg, setMsg],
        counter:[count, SetCount],
        Opener: [open, setOpen],
        MyCart: [cart, setCart]
    };

    return <Storage.Provider value={state}>{children}</Storage.Provider>
};

export default StoreContext;