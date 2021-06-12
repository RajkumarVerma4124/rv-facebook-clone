import Image from 'next/image';

function SidebarRow({ src, Icon, title }) {
    return (
        <div className='flex items-center sm:ml-3 space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer'>
            {src && (
                <Image
                    className="rounded-full"
                    src={src}
                    width={30}
                    height={30}
                    layout="fixed"
                />
            )}

            {Icon && (
                <Icon className="h-8 x-8 text-blue-500" />
            )}
            <p className="hidden sm:inline font-medium">{title}</p>
        </div>
    )
}

export default SidebarRow