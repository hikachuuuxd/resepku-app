export default function InputLabel({ value, className = '', children, ...props }) {
    return (
        <label {...props} className={`block capitalize` + className}>
            {value ? value : children}
        </label>
    );

}

// font-medium text-sm text-gray-700