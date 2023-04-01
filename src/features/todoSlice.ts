import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type initialState = {
    name: string
    ifChecked: boolean
    id: number
}[]

type todo = {
    name: string,
    ifChecked: boolean,
    id: number
}

const initialState: initialState = []

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<todo>) => {
            state.push(action.payload)
        }, 
        del: (state, action: PayloadAction<string>) => {
            const name = state.map((e) => e.name)
            const index = name.indexOf(action.payload)
            index === 0 ? state.splice(index) : state.splice(index, index)
        },
        multipleDel: (state) => {
            state.filter((todo) => {
                console.log('dont know what is wrong')
                return todo.ifChecked !== true
                
            })
            
        },
        update: (state, action: PayloadAction<{name: string, checked: boolean}>) => {
            const name = action.payload.name
            state.map((e) => {
                if (name === e.name) {
                    return e.ifChecked = action.payload.checked
                }
            })
        },
        getLocalStorageTodo: (state, action: PayloadAction<initialState>) => {
            state = action.payload
        }
    },
    
})

export default todoSlice.reducer
export const {add, del, multipleDel, update, getLocalStorageTodo} = todoSlice.actions