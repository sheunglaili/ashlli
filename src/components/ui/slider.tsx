import React from 'react'

export interface SliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange' | 'value'> {
  value?: number
  label?: string
  showValue?: boolean
  valueLabel?: (value: number) => string
  onChange?: (value: number) => void
}

export const Slider: React.FC<SliderProps> = ({
  label,
  showValue = false,
  valueLabel,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  value,
  className = '',
  ...props
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(Number(e.target.value))
  }

  const currentValue = value ?? 0
  const displayValue = valueLabel ? valueLabel(currentValue) : `${currentValue}`

  return (
    <div className={`flex flex-col gap-1.5 font-mono text-sm-minus w-full ${className}`}>
      {(label || showValue) && (
        <div className="flex items-center justify-between">
          {label && (
            <label className="font-semibold text-sm-minus text-ink uppercase tracking-wider">
              {label}
            </label>
          )}
          {showValue && (
            <span className="text-xs-plus font-mono font-semibold text-ink">
              {displayValue}
            </span>
          )}
        </div>
      )}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        className={`slider w-full ${className}`}
        {...props}
      />
    </div>
  )
}
