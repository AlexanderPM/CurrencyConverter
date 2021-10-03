// Стили Select
export const customStyles = {
    option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? '#2C3E50' : '#2C3E50' && state.isFocused ? '#2C3E50' : '#2C3E50',
        backgroundColor: state.isSelected ? '#E3E7EE' : 'white' && state.isFocused ? '#EFF1F5' : 'white',

    }),
    control: (base, state) => ({
        ...base,
        background: "white",
        // Overwrittes the different states of border
        border: state.isFocused ? '1px solid black': '1px dotted #2C3E50',
        // Removes weird border around container
        boxShadow: state.isFocused ? null  : null,
        "&:hover": {
            // Overwrittes the different states of border
            borderColor: state.isFocused ? "black" : "#2C3E50",
        },
        borderRadius: 0,
        
    }),
    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.9 : 1;
        const transition = 'opacity 300ms';
        return { ...provided, opacity, transition };
    }
}