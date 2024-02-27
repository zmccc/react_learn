import ContactList from './components/ContactList';
import Chat from './components/Chat';
import useReducer from './components/MyReact';

const contacts = [
    { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
    { id: 1, name: 'Alice', email: 'alice@mail.com' },
    { id: 2, name: 'Bob', email: 'bob@mail.com' },
];

// messages 有时候对象形式修改信息也很方便
// {
//     0: 'message'
// }
const initialState = {
    selectedId: 0,
    messages: [
        {
            id: 0,
            message: '你好',
        },
        {
            id: 1,
            message: '',
        },
        {
            id: 2,
            message: '',
        },
    ],
};

const emailReducer = (state, action) => {
    switch (action.type) {
        case 'change_name': {
            return {
                ...state,
                selectedId: action.contactId,
            };
        }
        case 'change_message': {
            return {
                ...state,
                messages: state.messages.map((m) => {
                    if (m.id === state.selectedId) {
                        return {
                            ...m,
                            message: action.message,
                        };
                    }
                    return m;
                }),
            };
        }
        default: {
            throw Error('未知 action: ' + action.type);
        }
    }
};

function App() {
    // useReducer接收一个reducer(一个包含状态和action的js对象)和初始状态
    const [state, dispatch] = useReducer(emailReducer, initialState);
    const message = state.messages?.[state.selectedId];
    const contact = contacts.find((c) => c.id === state.selectedId);

    return (
        <div>
            <ContactList
                contacts={contacts}
                selectedId={state.selectedId}
                dispatch={dispatch}
            />
            <Chat
                key={contact.id}
                message={message}
                contact={contact}
                dispatch={dispatch}
            />
        </div>
    );
}

export default App;
