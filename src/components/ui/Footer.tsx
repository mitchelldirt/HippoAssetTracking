import {GithubIcon} from "lucide-react";

export default function Footer () {
    return (
        <footer className={'grid grid-cols-2 sm:grid-cols-3 h-32 px-2 sm:px-8 py-4 bg-gray-200'}>
            <div className={'flex flex-col items-center justify-center'}>
                <ul className={'w-full h-full flex flex-col items-center justify-between'}>
                    <li className={'w-4/5 sm:w-3/5'}>
                        <a className={'text-left'} href={''}>About the author</a>
                    </li>

                    <li className={'w-4/5 sm:w-3/5'}>
                        <a className={'text-left'}>FAQ</a>
                    </li>
                </ul>
            </div>
            <div className={'flex flex-col items-center justify-center'}>
                <ul className={'w-full h-full flex flex-col items-center justify-between'}>
                    <li className={'w-4/5 sm:w-3/5'}>
                        <a className={'text-left'}>Terms of Service</a>
                    </li>

                    <li className={'w-4/5 sm:w-3/5'}>
                        <a className={'text-left'}>Privacy Policy</a>
                    </li>
                </ul>
            </div>
            <div className={'flex flex-row col-span-2 w-full items-end justify-end w right-0 bottom-0'}>
                <a>
                    <GithubIcon className={'w-8 h-8'} />
                </a>
            </div>
        </footer>
    )
}