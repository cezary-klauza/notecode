'use server';

import { supabase } from "./supabase";

export const addCode = async (code: string, lang: string): Promise<string | false> => {
    const { data, error } = await supabase.from('code').insert({code, lang}).select();

    if(error){
        console.log(error)
        return false;
    } else{
        return data[0].id;
    }
}