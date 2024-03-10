export default function Input({ type = 'text', value, setValue, id, error }) {
  return (
    <input id={id} className={`input ${error ? 'error' : ''}`} type={type} value={value} onChange={(value) => setValue(value)} />
  )
}
