


const Select = ({options, onSelect}) =>{

    const handleSelect = (e) => {
        onSelect(e.target.value)
    }

return(

    <select onChange={handleSelect} className="form-select form-select-sm" aria-label=".form-select-lg example">
    {
        options.map((opt) => <options key={opt.value} value={opt.value}>{opt.text}</options>)
    }

    </select>
)


}


export default Select