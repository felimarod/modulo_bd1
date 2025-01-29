import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import * as React from "react";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

interface PropsInputFileUpload {
  setDirArchivos: React.Dispatch<React.SetStateAction<string>>;
}

export default function InputFileUpload({
  setDirArchivos,
}: PropsInputFileUpload) {
  return (
    <Button
      component="label"
      role={undefined}
      variant="outlined"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
    >
      Subir archivos
      <VisuallyHiddenInput
        type="file"
        multiple
        onChange={(event) => {
          let nombresArchivos = "";
          const files = event.target.files;
          if (files) {
            for (let index = 0; index < files.length; index++) {
              const element = files?.item(index);

              nombresArchivos +=
                index === 0 ? `${element!.name}` : `,${element!.name}`;
            }
          }
          setDirArchivos(nombresArchivos);
        }}
      />
    </Button>
  );
}
