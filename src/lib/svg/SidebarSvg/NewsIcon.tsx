import ISvgIconProps from '@/Interfaces/IsvgProps'
import React from 'react'

const NewsIcon = (props: ISvgIconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="24" height="24" {...props}>
            <path d="M47.5 1.5H10.32c-.55 0-1 .45-1 1v19.44H2.5c-.55 0-1 .45-1 1v20.91c0 2.57 2.2 4.66 4.91 4.66h37.8c2.37 0 4.29-1.83 4.29-4.08V2.5c0-.55-.45-1-1-1zM9.32 43.84c0 1.46-1.3 2.66-2.91 2.66S3.5 45.31 3.5 43.84v-19.9h5.82v19.9zm37.18.58c0 1.15-1.03 2.08-2.29 2.08H10.44c.55-.75.88-1.67.88-2.66V3.5H46.5v40.92z" />
            <path d="m15.57 11.45 2.93 4.73h1.47V8.92h-1.36v4.85l-2.97-4.85h-1.43v7.26h1.36zM27.04 14.96h-4.05v-1.98h3.64v-1.22h-3.64v-1.61h3.91V8.92h-5.38v7.26h5.52zM30.9 16.18l1.45-5.43 1.44 5.43h1.56l1.76-7.26h-1.48l-1.11 5.07-1.27-5.07H31.5l-1.32 4.99-1.1-4.99h-1.5l1.73 7.26zM40.5 15.07c-.45 0-.8-.11-1.06-.34-.26-.22-.44-.58-.52-1.05l-1.43.14c.1.81.39 1.43.88 1.85s1.2.64 2.11.64c.63 0 1.16-.09 1.58-.26s.75-.45.98-.81c.23-.36.35-.75.35-1.17 0-.46-.1-.84-.29-1.16-.19-.31-.46-.56-.8-.74-.34-.18-.87-.35-1.58-.52-.71-.17-1.16-.33-1.35-.49a.544.544 0 0 1-.22-.44c0-.19.08-.34.23-.45.24-.17.57-.26 1-.26.41 0 .72.08.93.25.21.16.34.43.4.8l1.47-.06c-.02-.67-.26-1.2-.73-1.6-.45-.4-1.14-.6-2.05-.6-.56 0-1.03.08-1.43.25-.39.17-.7.41-.91.74s-.31.67-.31 1.04c0 .57.22 1.06.67 1.46.32.28.87.52 1.65.72.61.15 1 .26 1.17.32.25.09.43.19.53.31s.15.27.15.44c0 .27-.12.5-.36.7-.23.19-.59.29-1.06.29zM14.73 19.83h28.14v2H14.73zM14.73 26.62h28.14v2H14.73zM14.73 33.41h28.14v2H14.73zM14.73 40.21h28.14v2H14.73z" />
        </svg>
    )
}

export default NewsIcon