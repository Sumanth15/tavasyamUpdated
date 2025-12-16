import './SummaryCards.css'

function SummaryCards() {
  const data = [
    { id: 1, value: 12, label: 'Trainees Assigned' },
    { id: 2, value: 42, label: 'Weekly Working Hours' },
    { id: 3, value: 34, label: 'Sessions Completed' }
  ]

  return (
    <div className="summary-wrapper">
      <h2 className="summary-title">Summary</h2>

      <div className="summary">
        {data.map(item => (
          <div className="summary-card" key={item.id}>
            <h2 className="summary-value">{item.value}</h2>
            <p className="summary-label">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SummaryCards
