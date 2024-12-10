"use client";

import { useState } from "react";
import MonacoEditor from "@monaco-editor/react";
import Selector from "./Selector";
import { DEFAULT_CODE, languages, themes } from "@/constants";
import clsx from "clsx";
import { ShareButton, UuidCopy } from "./Buttons";

type EditorProps = {
  defaultCode?: string;
  defaultLang?: string;
};

const Editor = ({ defaultCode, defaultLang }: EditorProps) => {
  const [language, setLanguage] = useState(defaultLang || languages[0]);
  const [theme, setTheme] = useState(themes[0]);
  const [code, setCode] = useState(defaultCode || DEFAULT_CODE);
  const [share, setShare] = useState({
    savedCode: "",
    error: "",
    uuid: "",
  });

  const errorHandler = (error: string) =>
    setShare((prev) => ({ ...prev, error }));
  const uuidHandler = (uuid: string, savedCode: string) =>
    setShare((prev) => ({ ...prev, uuid, savedCode }));

  const changeHandler = (value: string | undefined) => setCode(value!);

  return (
    <div
      className={clsx(
        "py-6 w-full rounded-xl border border-gray-2 drop-shadow-2xl",
        theme === "vs-dark" ? "bg-vsCode" : "bg-white"
      )}
    >
      <MonacoEditor
        defaultValue={defaultCode || DEFAULT_CODE}
        options={{
          minimap: {
            enabled: true,
            size: "proportional",
          },
          overviewRulerLanes: 0,
          wordWrap: "on",
          scrollBeyondLastLine: false,
        }}
        defaultLanguage={defaultLang}
        language={language}
        theme={theme}
        height="560px"
        width="100%"
        onChange={changeHandler}
      />
      <div className="w-full flex justify-between items-end px-6">
        <div className="flex gap-2">
          <Selector
            values={languages}
            value={language}
            setValue={(value: string) => setLanguage(value)}
          />
          <Selector
            values={themes}
            value={theme}
            setValue={(value: string) => setTheme(value)}
          />
        </div>
        <div className="flex gap-2 items-center">
          {share.uuid !== "" && <UuidCopy uuid={share.uuid} />}
          {share.error !== "" && (
            <p className="text-red-500 text-sm">{share.error}</p>
          )}
          <ShareButton
            disabled={code === defaultCode || code === share.savedCode}
            code={code}
            lang={language}
            setError={errorHandler}
            setUuid={uuidHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default Editor;
