


const Select = ({options}) =>{

return(

    <select>
    {
        options.map((opt) => <options key={opt.value} value={opt.value}>{opt.text}</options>)
    }

    </select>
)


}


export default Select