import TextInput from "@/Components/TextInput";
import Dashboard from "../Dashboard";
import DropdownCard from "@/Components/Originals/DropdownCard";
import { useForm } from "@inertiajs/react";
import { useReducer, useState } from "react";
import { router } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
export default function Kesediaan({perusahaan, jurusans})
{
    
    const [inputs, setInput] = useState([
        {jurusan_id: '', total: ''}
    ])

    let handleChange = (i, e) => {
        let newInputVal = [...inputs];
        newInputVal[i][e.target.id] = e.target.value;
        setInput(newInputVal);
     }

     let handleAdd = () => {
        setInput([...inputs, { jurusan_id: "", total: "" }])
     }

     let handleDelete = (i) => {
        let newInputs = [...inputs];
    newInputs.splice(i, 1);
        setInput(newInputs)
    }

    let jurusan_id  = []
    let totals = []
    const jurusan = (inputs, jurusan_id) => {
        inputs = inputs
        for(const input of inputs){
            jurusan_id.push(input.jurusan_id)
        }

        return jurusan_id;
    }

    const total = (inputs, total) => {
        inputs = inputs
        for(const input of inputs){
            total.push(input.total)
        }

        return total;
    }

    function handleSubmit(e) {
        e.preventDefault()
        router.put(route('perusahaan.store.kesediaan', perusahaan.id), {
            jurusan_id: jurusan([...inputs], jurusan_id),
            total: total([...inputs], totals)
        } )
      }
    return(
        <Dashboard title={'Kesediaan'}>
            <DropdownCard title={'tambah kesediaan'}>
            <form onSubmit={handleSubmit}>
           
            <div className="flex-column pt-8 pb-4">
                <TextInput 
                    id="perusahaan_id"
                    type="text"
                    value={perusahaan.name}
                    isFocused={true}
                    readonly
                />
            </div>


    {
        inputs.map((input, index)=> 
            <div className="flex justify-between item-center" key={index}>
        
            <div className="flex-column pt-2 w-full pe-4" >
            <TextInput list="jurusans" 
                name="jurusan_id" 
                id="jurusan_id" 
                type="text"  
                placeholder="Pilih Jurusan"
                isFocused={true}
                value={input.jurusan_id}
                onChange={(e) => handleChange(index, e)}
                />

               
            <datalist id="jurusans" >
            {jurusans.map((jurusan, index) => 
                <option  key={jurusan.id} value={jurusan.id}>{jurusan.name}</option>
            )}
            </datalist>
            </div>
            
        
            <div className="flex-column pt-2 me-2">
                <TextInput
                id="total"
                name="total"
                type="number"
                placeholder="total"
                isFocused={true}
                value={input.total}
                onChange={(e) => handleChange(index, e) }
                />
            </div>


            <div className="mx-2">
                   <button type="button" onClick={() => handleDelete(index)} className="border-2 font-extrabold text-lg lg:text-xl hover:bg-primary  hover:text-white w-10 h-10 rounded-full my-3 ">x</button> 
            </div>
            </div>
        )
    }

            <div className="pt-3  mx-2">
            
                   <button type="button" onClick={() => handleAdd()} className="border-2 font-extrabold text-lg lg:text-xl hover:bg-primary  hover:text-white w-10 h-10 rounded-full ">+</button> 
            </div>
            
            <PrimaryButton>Submit</PrimaryButton>
       
            </form>   
            </DropdownCard>
        </Dashboard>
    )
}

  