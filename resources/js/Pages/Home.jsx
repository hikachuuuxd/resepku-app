import { Head, Link } from "@inertiajs/react";
export default function Home(){
    return(
        <>
        <Head title="home" />
        <h3 className="text-green-800 bg-purple-200">Algoritma Login</h3>
        

        </>
    )
}

/*
Role Siswa
1. Admin Menginputkan data siswa di excel 
    - nama
    - no telp
    - email
    - jenis kelamin ( default none)
    - password == nama 
2. Siswa login 
    - email
    - password


Role Du/Di
1. Registrasi
    - nama
    - no telp
    - email
    - jenis kelamin (default none)
    - password
2. Menunggu akun dikonfirmasi oleh admin
3. login 
    - email
    - password


Role Guru 
1. admin mengiinput data dari excel
    - nama
    - no telp
    - email
    - jenis kelamin ( default none)
    - password == nama 
2. Login 
    - email
    - password


Role Admin
1. login 
    - email = 
    - password =


Public 
- Dapat melihat data jurnal siswa serta informasi siswa
    
*/

/*
1. login vervikasi akun
2. memasukkan data dari excel ke database



User
- id
- nama 
- email

role 
- id 
- name
name = admin/siswa/dudi/guru

role_user 
- user_id
- role_id

jurnal 
- id
- tanggal
- isi
- status

jurnal_user
- jurnal_id
- user_id

authorization 
create/update/delete = role siswa
index = role dudi && guru
update status = role dudi

plotingan
- id 
- perusahaan_id
- guru_id



plotingan_siswa
- plotingan_id
- siswa_id

authorization route = admin

perusahaan 
- id
- name
- detail

authorization route = admin

perusahaan_user
- perusahaan_id
- dudi_id

create = admin melalui request dudi_id


*/

