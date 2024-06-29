import React from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form'
import { Input } from "@/components/ui/input";


import { Control } from 'react-hook-form';
import { z } from 'zod';
import { authFormSchema } from '@/lib/utils';


const formSchema = authFormSchema('sign-up')

interface CustomInput{
    control : Control<z.infer<typeof formSchema>>,
    name: 'email' | 'password' | 'firstName' | 'lastName' | 'address' |'city'| 'state' |'postalCode' | 'DOB' | 'ssn',
    label:string,
    placeholder:string,
}







function CustomInput({  control, name, label, placeholder} :CustomInput ) {
  return (
    
           <FormField
                control={ control}
                name= {name}
                render={({ field }) => (
                  <div className="form-item">
                    <FormLabel className="form-label"> {label}</FormLabel>
                    <div className="flex w-full flex-col">
                      <FormControl>
                        <input
                          placeholder= {placeholder}
                          className="input-class p-2"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage className="form-message mt-2" />
                      </div>
                      </div>
                         )}
                         />
  )
}

export default CustomInput