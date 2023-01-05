
import { useState } from 'react'
import { Button, Modal, Group, TextInput, Textarea } from '@mantine/core'

function AddTodo() {
	const [open, setOpen] = useState(false)

	return (
		<>
			<Modal opened={open} onClose={() => setOpen(false)} title="Create todo">
				<TextInput
					required
					mb={12}
					label="Todo"
					placeholder='what do you want todo?'
				/>
				<Textarea
					required
					mb={12}
					label="Body"
					placeholder='Tell me more...'

				/>
				<Button type="submit">Create Todo</Button>
			</Modal>
			<Group position='center'>
				<Button fullWidth mb={12} onClick={() => setOpen(true)}>
					ADD TODO
				</Button>
			</Group>
		</>
	)
}

export default AddTodo
