"use client";
import { FC, Fragment, useEffect, useState } from "react";
import ReactModal from "react-modal";
import Avatar from "../Avatar/page";
import { LightImage } from "../Images/page";
import { userMessagePdfService } from "../helper/services/chat.services";
interface ModalData {
  isOpen: boolean;
  setIsOpen: any;
  messages: any;
}
const DownLoadModal: FC<ModalData> = ({ isOpen, setIsOpen, messages }) => {
  const [response, setResponse] = useState("");

  const pdfConversion = async () => {
    const response = await userMessagePdfService();
    console.log(response);
    setResponse(response);
  };
  const generateDocx = () => {
    const content = `
          Hello,
    
          Here is the data:
          
          ${messages
        .map(
          (data: any) =>
            `Date: ${data.date}, question: ${data.message}, reply: ${data.reply}`
        )
        .join("\n")}
        `;

    // Create a Blob with the text content
    const blob = new Blob([content], {
      type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    });
    // Create a URL for the Blob and trigger the download
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${messages[0]?.message}.docx`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const generatePdf = () => {
    const content = `      
      ${messages
        .map(
          (data: any) =>
            `Date: ${data.date}, question: ${data.message}, reply: ${data.reply}`
        )
        .join("\n")}`;

    const pdfBlob = new Blob([content], { type: "application/pdf" });

    // Create a URL for the Blob and trigger the download
    const url = URL.createObjectURL(pdfBlob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${messages[0]?.message}.pdf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const generateText = () => {
    const content = `
    ${messages
      .map(
        (data: any) =>
          `Date: ${data.date}, question: ${data.message}, reply: ${data.reply}`
      )
      .join("\n")}`;

    // Create a Blob with the text content
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });

    // Create a URL for the Blob and trigger the download
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${messages[0]?.message}.pdf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Fragment>
      <ReactModal
        className="w-80 h-36 m-auto h-fit z-10 absolute left-[60%] top-[45%] translate-x-[-60%] translate-y-[-45%]  bg-slate-300 dark:bg-white rounded-2xl p-0 opacity-100"
        isOpen={isOpen}
        onAfterOpen={() => (document.body.style.overflow = "hidden")}
        onAfterClose={() => (document.body.style.overflow = "unset")}
      >
        <div className="p-2">
          <div className="flex items-center justify-end">
            <button
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <Avatar path={LightImage.whiteCross} className="w-5" />
            </button>
          </div>
          <h1 className="text-gray-700 mb-7 text-center">Please select the format?</h1>
          <div className="text-center">
            <button
              className="bg-black px-5 w-20 text-white py-2 text-center mr-3"
              onClick={() => {
                generatePdf();
              }}
            >
              PDF
            </button>
            <button
              className="bg-red-500 px-5 w-20 text-white py-2 text-center mr-3"
              onClick={() => {
                generateDocx();
              }}
            >
              Docs
            </button>
            <button
              className="bg-black px-5 w-20 text-white py-2 text-center"
              onClick={() => {
                generateText();
              }}
            >
              Text
            </button>
          </div>
        </div>
      </ReactModal>
    </Fragment>
  );
};
export default DownLoadModal;
