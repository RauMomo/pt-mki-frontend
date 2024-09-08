export const SecondaryButton: React.FC = () => {

  const contactWhatsapp = () => {
    const url = `https://wa.me/6281381884838?`;
    window.open(url, "_blank");
  }
  return (
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 text-left justify-start">
        <p
          id="demo"
          onClick={contactWhatsapp}
          className="inline-flex justify-center items-center px-5 text-base font-medium text-center text-white rounded-lg bg-primary focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 py-5 cursor-pointer"
        >
          Mulai Transformasi Anda
        </p>
      </div>
  )
}