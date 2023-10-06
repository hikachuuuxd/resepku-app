import Dashboard from "../Dashboard";
import { Head, Link, useForm, usePage} from '@inertiajs/react';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import Home from "../Home";

export default function PengajuanIndex({auth})
{
    return(
        <Dashboard>Jurnal {auth.user.name}</Dashboard>
    )
}