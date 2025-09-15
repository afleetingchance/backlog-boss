import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

const Card = ({ children }: Props) => {
    return (
        <div className="rounded-md border-2 border-gray-600 bg-gray-800 p-4 text-white">
            {children}
        </div>
    );
};

export default Card;
