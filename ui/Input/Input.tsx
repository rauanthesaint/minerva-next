import s from './Input.module.scss'
import { InputProps } from './Input.types'

const Input: React.FC<InputProps> = (props) => {
    return (
        <label htmlFor={props.name} className={s.group}>
            {props.label && <span className={'label sm'}>{props.label}</span>}
            <div className={s.container}>
                {props.leading}
                <input
                    type={props.type}
                    placeholder={props.placeholder}
                    id={props.id}
                    name={props.name}
                    onChange={props.onChange}
                    value={props.value}
                    {...props.register}
                />
            </div>
            {props.error && (
                <div>
                    <span className="label sm">{props.error.message}</span>
                </div>
            )}
        </label>
    )
}

export default Input
