import Dashboard from "../Dashboard";
import { Head, Link, useForm, usePage} from '@inertiajs/react';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import Home from "../Home";

export default function PengajuanIndex({auth})
{
    const {data, post, error, setData} = useForm();
    return(
        <Dashboard
            menu={'Pengajuan Tempat PKL'}
        >
            <div className="w-full h-max-content p-2 bg-[#6867AC] rounded flex justify-between ">
                <div className="text-white ps-2 text-sm lg:text-base">Form Pengajuan</div>
                <button className="mx-2"><i className=" border-r-2 border-b-2 p-1  inline-block rotate-45"></i></button>
            </div>
            <div className="bg-white w-full h-max-content rounded my-2 text-black text-xs lg:text-base md:text-sm px-10">
                <form>
                    <div className="flex-column pt-8 pb-4">
                    <label className="block" htmlFor="name">Nama Perusahaan</label>
                    <input className="w-full mt-1  rounded focus:outline-none focus:border-b-1 focus:border-x-0 focus:border-t-0  focus:rounded-none focus:border-[#6867AC] focus:ring-0 " type="text" name="name" id="" />
                    </div>
                    <div className="flex-column py-4">
                    <label className="block" htmlFor="name">Alamat Perusahaan</label>
                    <input className="w-full mt-1 rounded focus:outline-none focus:border-b-1 focus:border-x-0 focus:border-t-0  focus:rounded-none focus:border-[#6867AC] focus:ring-0 " type="text" name="name" id="" />
                    </div>
                    <div className="flex-column py-4">
                    <label className="block" htmlFor="name">Kontak Perusahaan</label>
                    <input className="w-full mt-1  rounded focus:outline-none focus:border-b-1 focus:border-x-0 focus:border-t-0  focus:rounded-nonefocus:border-[#6867AC] focus:ring-0 " type="text" name="name" id="" />
                    </div>
                    <div className="flex-column py-4">
                    <label className="block" htmlFor="name">Bukti Negosiasi</label>
                    <input className="w-full mt-1  rounded focus:outline-none focus:border-b-1 focus:border-x-0 focus:border-t-0  focus:rounded-nonefocus:border-[#6867AC] focus:ring-0 " type="file" name="name" id="" />

                    <button className="p-2 w-24 float-right my-6 text-sm lg:text-base bg-violet-200 rounded tracking-widest">submit</button>
                    <div className="clear-right"></div>
                    </div>
                </form>
            </div>

            <div className="w-full h-max-content bg-[#6867AC] rounded my-4">
                <div className="text-white flex justify-between p-2">
                    <div className="ps-3 text-base lg:text-lg " >Nama Perusahaan</div>
                    <div className="pe-3 text-sm lg:text-base font-thin text-rose-700">belum dikonfirmasi</div>
                </div>
                <div className="bg-white min-w-full h-max-content p-4 text-sm lg:text-base text-slate-800">
                    <div className="my-2 break-all "><span className="font-bold">Alamat :</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit ut ad nulla quia, eum accusantium similique voluptatem, ratione quod deleniti modi itaque tenetur? Quidem aliquam quas repudiandae quam aliquid eius accusantium cumque maiores! Magnam nisi, veritatis excepturi quaerat expedita obcaecati!</div>
                    <div className="my-2"> <span className="font-bold">Kontak :</span> 00000000000000</div>
                    <button className="p-2 bg-violet-200 rounded w-24 my-2 float-right me-4">lihat Bukti</button>
                    <div className="clear-right"></div>
                </div>
            </div>
        </Dashboard>
    )
}