import Editor from "@/components/Editor";
import { supabase } from "@/lib/supabase";
import { redirect } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  const { data, error } = await supabase
    .from("code")
    .select("*")
    .eq("id", await id)
    .single();

  if (error) {
    redirect("/");
  }

  return <Editor defaultCode={data.code} defaultLang={data.lang} />;
}
