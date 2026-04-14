
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'
import { Provider } from 'react-redux'
import { store } from './Store/store'


function App() {
 

  return (
    <Provider store={store}>
    <AddTodo/>
      <Todo />
    </Provider>
  )
}

export default App
