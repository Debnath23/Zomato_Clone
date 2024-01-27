export default function FilterButton({
    children,
    onClick,
    type = "button",
    text = "text-[14px]",
    border = "border-[0.1px]",
    b_radius = "rounded-lg",
    b_color = "border-slate-300",
    padding = "p-2",
    margin = "my-4 mr-4",
    className = "",
    ...props
  }) {
    return (
      <button
        className={`w-auto h-auto flex items-center ${text} ${border} ${b_radius} ${b_color} ${padding} ${margin} ${className}`}
        {...props}
        onClick={onClick}
      >
      {children} 
      </button>
    );
  }
  