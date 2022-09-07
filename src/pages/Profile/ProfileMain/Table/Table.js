import PropTypes from 'prop-types'

import { RefreshIcon } from '~/components/Icons'
import Image from '~/components/Image/Image'
import '~/pages/Profile/Profile.scss'

function Table({ heading, category, author, title, item, src }) {
    return (
        <div className="dashbox bg-[#28282d] pb-[20xp]">
            <div className="flex items-center justify-between p-[20px] border-b-[1px] border-solid border-[#ffffff0d]">
                <div className="flex items-center">
                    <Image className="w-[20px] mr-[10px]" src={src} alt="img" />
                    <p className="text-[18px] text-[#fff] font-normal leading-[100%] ">{heading}</p>
                </div>
                <div className="flex items-center">
                    <RefreshIcon className="w-[14px] mr-[20px] fill-text cursor-pointer hover:fill-primary" />
                    <button className="w-[60px] h-[24px] text-[12px] rounded font-openSans outline-none text-text bg-[#ffffff0d] hover:text-primary">
                        View All
                    </button>
                </div>
            </div>
            <div className="p-[20px] table-wrapper">
                <table className="w-full">
                    <thead>
                        <tr className="text-[#ffffff80] text-[12px] leading-[100%] border-b-[1px] border-solid border-[#ffffff0d] text-left">
                            <th className="font-light pr-[10px] pb-[15px]">ID</th>
                            <th className="font-light pr-[10px] pb-[15px]">{title || item}</th>
                            <th className="font-light pr-[10px] pb-[15px]">{category || author}</th>
                            <th className="font-light pr-[10px] pb-[15px]">RATING</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-[14px] text-[#fff] leading-[21px]">
                            <td className="font-normal font-openSans pt-[15px] pr-[10px] pb-[5px]">321</td>
                            <td className="font-normal font-openSans pt-[15px] pr-[10px] pb-[5px] hover:text-primary cursor-pointer">
                                Salt
                            </td>
                            <td className="font-normal font-openSans pt-[15px] pr-[10px] pb-[5px]">
                                {(author && 'Cao Anh') || (category && 'Action')}
                            </td>
                            <td className="font-normal font-openSans pt-[15px] pr-[10px] pb-[5px] flex">
                                {' '}
                                <Image
                                    className="w-[16px] mr-[4px]"
                                    src="https://dmitryvolkov.me/demo/flixgo2.0/main/img/star.svg"
                                    alt="img"
                                />{' '}
                                <span className="text-[16px] font-medium">9.2</span>
                            </td>
                        </tr>
                        <tr className="text-[14px] text-[#fff] leading-[21px]">
                            <td className="font-normal font-openSans pt-[15px] pr-[10px] pb-[5px]">11</td>
                            <td className="font-normal font-openSans pt-[15px] pr-[10px] pb-[5px] hover:text-primary cursor-pointer">
                                Benched
                            </td>
                            <td className="font-normal font-openSans pt-[15px] pr-[10px] pb-[5px]">
                                {(author && 'Cao Anh') || (category && 'Action')}
                            </td>
                            <td className="font-normal font-openSans pt-[15px] pr-[10px] pb-[5px] flex">
                                {' '}
                                <Image
                                    className="w-[16px] mr-[4px]"
                                    src="https://dmitryvolkov.me/demo/flixgo2.0/main/img/star.svg"
                                    alt="img"
                                />{' '}
                                <span className="text-[16px] font-medium">9.2</span>
                            </td>
                        </tr>
                        <tr className="text-[14px] text-[#fff] leading-[21px]">
                            <td className="font-normal font-openSans pt-[15px] pr-[10px] pb-[5px]">362</td>
                            <td className="font-normal font-openSans pt-[15px] pr-[10px] pb-[5px] hover:text-primary cursor-pointer">
                                Whitney
                            </td>
                            <td className="font-normal font-openSans pt-[15px] pr-[10px] pb-[5px]">
                                {(author && 'Cao Anh') || (category && 'Action')}
                            </td>
                            <td className="font-normal font-openSans pt-[15px] pr-[10px] pb-[5px] flex">
                                {' '}
                                <Image
                                    className="w-[16px] mr-[4px]"
                                    src="https://dmitryvolkov.me/demo/flixgo2.0/main/img/star.svg"
                                    alt="img"
                                />{' '}
                                <span className="text-[16px] font-medium">9.2</span>
                            </td>
                        </tr>
                        <tr className="text-[14px] text-[#fff] leading-[21px]">
                            <td className="font-normal font-openSans pt-[15px] pr-[10px] pb-[5px]">31</td>
                            <td className="font-normal font-openSans pt-[15px] pr-[10px] pb-[5px] hover:text-primary cursor-pointer">
                                Blindspotting 2
                            </td>
                            <td className="font-normal font-openSans pt-[15px] pr-[10px] pb-[5px]">
                                {(author && 'Cao Anh') || (category && 'Action')}
                            </td>
                            <td className="font-normal font-openSans pt-[15px] pr-[10px] pb-[5px] flex">
                                {' '}
                                <Image
                                    className="w-[16px] mr-[4px]"
                                    src="https://dmitryvolkov.me/demo/flixgo2.0/main/img/star.svg"
                                    alt="img"
                                />{' '}
                                <span className="text-[16px] font-medium">9.2</span>
                            </td>
                        </tr>
                        <tr className="text-[14px] text-[#fff] leading-[21px]">
                            <td className="font-normal font-openSans pt-[15px] pr-[10px] pb-[5px]">12</td>
                            <td className="font-normal font-openSans pt-[15px] pr-[10px] pb-[5px] hover:text-primary cursor-pointer">
                                Blindspotting
                            </td>
                            <td className="font-normal font-openSans pt-[15px] pr-[10px] pb-[5px]">
                                {(author && 'Cao Anh') || (category && 'Action')}
                            </td>
                            <td className="font-normal font-openSans pt-[15px] pr-[10px] pb-[5px] flex">
                                {' '}
                                <Image
                                    className="w-[16px] mr-[4px]"
                                    src="https://dmitryvolkov.me/demo/flixgo2.0/main/img/star.svg"
                                    alt="img"
                                />{' '}
                                <span className="text-[16px] font-medium">9.2</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

Table.propTypes = {
    heading: PropTypes.string,
    category: PropTypes.string,
    author: PropTypes.string,
    title: PropTypes.string,
    item: PropTypes.string,
    src: PropTypes.string,
}
export default Table
