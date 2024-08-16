import { type FormEventHandler } from 'react';
import Button from './Button';
import Input from './Input';

function Searcher() {

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()

    const fields = new window.FormData(event.target as HTMLFormElement)
    const query = fields.get('query')

    console.log('input value: ', query)
  }

  return (
    <form className='w-full flex gap-2' onSubmit={handleSubmit}>
      <Input name='query' />

      <Button>
        Buscar
      </Button>
    </form>

  )
}

export default Searcher