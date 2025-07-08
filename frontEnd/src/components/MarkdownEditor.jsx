import React, { useState, useRef, useEffect } from "react";
import MDEditor from "@uiw/react-md-editor";
import { FaDownload, FaFilePdf, FaFileCode, FaFileAlt } from "react-icons/fa";
import html2pdf from "html2pdf.js";
import { marked } from "marked";
import { motion, AnimatePresence } from "framer-motion";

const EditorPanel = () => {
  const [note, setNote] = useState(
    `# Welcome to MarkForge

You can insert images like this:

![OpenAI Logo](https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg)
`
  );
  const [previewMode, setPreviewMode] = useState("live");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [filename, setFilename] = useState("MarkForge");
  const dropdownRef = useRef();

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const downloadFile = async (format) => {
    const fullName = `${filename || "MarkForge"}.${format}`;
    const htmlContent = marked.parse(note);

    if (format === "md") {
      const blob = new Blob([note], { type: "text/markdown" });
      triggerDownload(blob, fullName);
    } else if (format === "html") {
      const fullHtml = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>${filename}</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; line-height: 1.6; }
            img { max-width: 100%; height: auto; display: block; margin: 10px 0; }
          </style>
        </head>
        <body>${htmlContent}</body>
        </html>
      `;
      const blob = new Blob([fullHtml], { type: "text/html" });
      triggerDownload(blob, fullName);
    } else if (format === "pdf") {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = htmlContent;

      // Apply styles to ensure images scale and render correctly
      tempDiv.style.padding = "20px";
      tempDiv.style.fontFamily = "Arial, sans-serif";
      tempDiv.style.fontSize = "14px";
      tempDiv.style.lineHeight = "1.6";
      tempDiv.style.color = "#000";
      tempDiv.style.width = "100%";

      // Inject style for images
      const styleTag = document.createElement("style");
      styleTag.textContent = `
        img {
          max-width: 100%;
          height: auto;
          display: block;
          margin: 10px 0;
        }
      `;
      tempDiv.prepend(styleTag);

      document.body.appendChild(tempDiv);

      // Wait for all images to load
      const images = tempDiv.querySelectorAll("img");
      const imageLoadPromises = Array.from(images).map(
        (img) =>
          new Promise((resolve) => {
            if (img.complete) resolve();
            else img.onload = img.onerror = resolve;
          })
      );
      await Promise.all(imageLoadPromises);

      await html2pdf()
        .set({
          filename: fullName,
          margin: 10,
          jsPDF: { unit: "mm", format: "a4" },
          html2canvas: {
            scale: 2,
            useCORS: true,
          },
        })
        .from(tempDiv)
        .save();

      document.body.removeChild(tempDiv);
    }

    setDropdownOpen(false);
  };

  const triggerDownload = (blob, filename) => {
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  };

  const DropdownButton = () => (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="p-2 rounded hover:text-blue-400 transition"
        title="Download"
      >
        <FaDownload className="text-white" />
      </button>

      <AnimatePresence>
        {dropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 mt-2 w-52 bg-white text-black rounded-lg shadow-lg right-0 overflow-hidden"
          >
            <div className="px-4 py-2 border-b">
              <input
                type="text"
                value={filename}
                onChange={(e) => setFilename(e.target.value)}
                placeholder="Enter file name"
                className="w-full px-2 py-1 text-sm rounded bg-gray-100 focus:outline-none"
              />
            </div>
            <button
              onClick={() => downloadFile("md")}
              className="flex items-center gap-2 w-full px-4 py-2 text-left hover:bg-gray-100"
            >
              <FaFileCode /> Download as `.md`
            </button>
            <button
              onClick={() => downloadFile("html")}
              className="flex items-center gap-2 w-full px-4 py-2 text-left hover:bg-gray-100"
            >
              <FaFileAlt /> Download as `.html`
            </button>
            <button
              onClick={() => downloadFile("pdf")}
              className="flex items-center gap-2 w-full px-4 py-2 text-left hover:bg-gray-100"
            >
              <FaFilePdf /> Download as `.pdf`
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-screen h-screen bg-[#1a1a1a] text-white overflow-hidden">
      <MDEditor
        value={note}
        onChange={setNote}
        preview={previewMode}
        onPreviewChange={(mode) =>
          setPreviewMode(mode === "live" ? "edit" : mode)
        }
        extraCommands={[
          {
            name: "download",
            keyCommand: "download",
            render: () => <DropdownButton />,
          },
          {
            name: "insertImage",
            keyCommand: "insertImage",
            buttonProps: { "aria-label": "Insert image" },
            render: () => (
              <button
                aria-label="Insert image"
                onClick={() => {
                  const url = prompt("Enter image URL:");
                  if (url) {
                    setNote((prev) => `${prev}\n\n![Image](${url})`);
                  }
                }}
                className="px-2 text-white hover:text-blue-400"
              >
                🖼️
              </button>
            ),
          },
        ]}
        height="100%"
        style={{
          color: "white",
          border: "none",
          fontSize: "14px",
        }}
        textareaProps={{
          style: {
            color: "white",
            backgroundColor: "#1a1a1a",
            tabSize: 4,
          },
        }}
        visibleDragbar={false}
      />
    </div>
  );
};

export default EditorPanel;
