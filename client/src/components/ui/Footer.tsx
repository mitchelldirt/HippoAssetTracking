import {GithubIcon, LinkedinIcon, GlobeIcon} from "lucide-react";

export default function Footer () {
    return (
        <footer className={'h-44 sm:h-36 grid grid-cols-2 sm:grid-cols-3 px-2 sm:px-8 py-4 sm:py-8 bg-gray-200 w-full shadow-footer'}>
            <div className={'flex flex-col items-center justify-center'}>
                <ul className={'w-full h-full flex flex-col items-center justify-between'}>
                    <li className={'w-4/5 sm:w-3/5'}>
                        <a className={'text-left hover:underline decoration-black decoration-wavy decoration-2 underline-offset-4'} href={''}>About the author</a>
                    </li>

                    <li className={'w-4/5 sm:w-3/5'}>
                        <a className={'text-left hover:underline decoration-black decoration-wavy decoration-2 underline-offset-4'} href={''}>Privacy Policy</a>
                    </li>
                </ul>
            </div>
            <div className={'flex flex-col items-center justify-center'}>
                <ul className={'w-full h-full flex flex-col items-center justify-between'}>
                    <li className={'w-4/5 sm:w-3/5'}>
                        <a className={'text-left hover:underline decoration-black decoration-wavy decoration-2 underline-offset-4'} href={''}>Terms of Service</a>
                    </li>

                    <li className={'w-4/5 sm:w-3/5'}>
                        <a className={'text-left hover:underline decoration-black decoration-wavy decoration-2 underline-offset-4'} href={''}>FAQ</a>
                    </li>
                </ul>
            </div>
            <div className={'flex pt-8 sm:pt-0 flex-row col-span-2 sm:col-span-1 w-full items-center justify-around'}>
                <a href="https://github.com/mitchelldirt/HippoAssetTracking" target="_blank">
                    <GithubIcon className={'w-8 h-8'} />
                </a>
                <a href="https://www.linkedin.com/in/mitchellmudd/" target="_blank">
                    <LinkedinIcon className={'w-8 h-8'} />
                </a>
                <a href="https://www.mitchellmudd.dev/" target="_blank">
                    <GlobeIcon className={'w-8 h-8'} />
                </a>
            </div>
        </footer>
    )
}