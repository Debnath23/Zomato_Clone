export default function FilterButton({
    children,
    type = "button",
    text = "text-[14px]",
    border = "border-[0.1px]",
    b_radius = "rounded-md",
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
      >
      {children} 
      </button>
    );
  }
  