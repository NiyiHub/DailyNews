'use client'

export default function IdModal({ 
  isOpen, 
  onClose, 
  onSubmit 
}: { 
  isOpen: boolean
  onClose: () => void
  onSubmit: (id: string) => void 
}) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const id = formData.get('id') as string
    if (id) {
      onSubmit(id)
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4">Enter Your ID</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="id"
            className="w-full border p-2 mb-4 rounded"
            placeholder="Enter your ID"
            required
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}