export const logIn = ()=>{
    return {
        type:'SIGN_IN'
    };
};

export const logOut = ()=>{
    return {
        type:'SIGN_OUT'
    };
};

export const add = (stock)=>{
    return {
        type:'ADD',
        data:stock
    }
}

export const reduce =(pos)=>{
    return{
        type:'REDUCE',
        index:pos
    }
}

export const editStock = (pos,obj) =>{
    return {
        type:'EDIT',
        data:obj,
        index:pos
    }
}

export const deleteStock = (pos) =>{
    return {
        type:'DELETE',
        index:pos
    }
}