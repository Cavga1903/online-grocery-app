//rnfe
import { Text, TouchableOpacity } from 'react-native';

const variantStyles = {
  default: 'bg-gray-500',
  primary: 'bg-blue-500',
  danger: 'bg-red-500',
  success: 'bg-green-500',
};

type Props = {
  text: string;
  variant?: 'default' | 'primary' | 'danger' | 'success';
  className?: string;
};

const Button = (props: Props) => {
  const style = variantStyles[props.variant || 'default'];
  return (
    <TouchableOpacity className={`items-center rounded-xl p-4 ${style} ${props.className}`}>
      <Text className="text-3xl text-white">{props.text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
