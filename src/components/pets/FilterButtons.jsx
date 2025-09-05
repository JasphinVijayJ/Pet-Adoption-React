export default function FilterButtons({ activeFilter, setFilter }) {
    const buttons = [
        { id: 'allbtn', label: 'All', type: 'all' },
        { id: 'dogsbtn', label: 'Dogs', type: 'dogs' },
        { id: 'catsbtn', label: 'Cats', type: 'cats' },
        { id: 'othersbtn', label: 'Others', type: 'others' },
    ];

    return (
        <div className="filter-buttons">
            {buttons.map(btn => (
                <button
                    key={btn.id}
                    id={btn.id}
                    className={activeFilter === btn.type ? 'activeButton' : ''}
                    onClick={() => setFilter(btn.type)}
                >
                    {btn.label}
                </button>
            ))}
        </div>
    );
}
