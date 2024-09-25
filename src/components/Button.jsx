export default function Button({ label, onClick, className, ...props }) {
    return (
        <button 
            className={`px-8 text-white rounded-xl ${className}`} 
            onClick={onClick}
            {...props}
        >
            {label}
        </button>
    );
}
