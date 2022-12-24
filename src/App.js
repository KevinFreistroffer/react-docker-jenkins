import logo from './logo.svg'
import './App.css'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import Registration from './Registration/Registration'

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-header">
          <h1>React Jenkins Docker</h1>
        </header>
        <main>
          <Registration />
        </main>
      </div>
    </QueryClientProvider>
  )
}

export default App
