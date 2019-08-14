const crudReducer = (state = undefined, action) => {

    const newState;

    const unde = () => {
        return {
            max_id : 2,
            mode : 'welcome',
            select_id : 2,
            contents : [
                {id:1, title:'HTML', desc:'HTML is ~'},
                {id:2, title:'CSS', desc:'CSS is ~'},
            ]
        }
    };

    const create = () => {
        const newMaxId = state.max_id + 1;
        const newContents = state.contents.concat();
    }

    const select = () => {
        newState = Object.assign(
            {},
            state,
            {select_id : action.id, mode : 'read'}
        );
    }

    const deletes = () => {
        const newContents = [];
        let i = 0;
        while(i < state.contents.length){
            if(state.select_id !== state.contents[i].id){
                newContents.push(
                    state.contents[i]
                );
            }
            i = i + 1;
        }
        newState = Object.assign({},state,{
            contents : newContents,
            mode : 'welcome'
        });
    }


    if(state === undefined){
        return unde();
    } else if(action.type === 'CREATE') {
        return
    } else if(action.type === 'READ') {
        return
    } else if(action.type === 'SELECT') {
        return select();
    } else if(action.type === 'DELETE') {
        return deletes();
    } else if(action.type === 'CHANGE_MODE') {
        return
    }
    
}

export default crudReducer;