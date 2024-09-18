import styles from "./css/Button.module.css";

interface PrimaryButtonProps {
  title: string;
  primary: boolean;
  action?: string;
  icon?: string;
  params?: any;
}

export var PrimaryButton = ({
  title,
  primary,
  icon,
  action,
  params,
}: PrimaryButtonProps) => {
  const contactWhatsapp = () => {
    const title = params["title"];
    const encodedTitle = encodeURIComponent(title);
    console.log(encodedTitle);
    const url = `https://wa.me/6281381884838?text=Halo,%20saya%20ingin%20mendaftar%20${encodedTitle},%20apakah%20training%20ini%20masih%20tersedia?`;
    window.open(url, "_blank");
  };

  const contactWhatsappTransform = () => {
    const url = `https://wa.me/6281381884838?`;
    window.open(url, "_blank");
  };

  const downloadFile = () => {
    const url = params['url'];
    const title = params['title'];
    const formattedTitle = title.replaceAll(' ', "_");
    const link = document.createElement("a");
    link.href = url;
    console.log(url)
    link.download = formattedTitle; // Optional: specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navigatePublicTraining = () => {
    window.location.href = "/public-training/"
  }

  const handleAction = (e: any) => {
    console.log(action);
    switch (action) {
      case "downloadFile":
        return downloadFile();
      case "contactWhatsapp":
        return contactWhatsapp();
      case "contactWhatsappTransform":
        return contactWhatsappTransform();
      case "publicTraining":
        return navigatePublicTraining();
      default:
        return console.log("test 3");
    }
  };

  return (
    <button
      className={!primary ? styles.button : styles.secondaryButton}
      onClick={handleAction}
    >
      {icon && (
        <span className={primary ? styles.icon : styles.altIcon}>
          <img src={icon} width={40} />
        </span>
      )}
      {title}
    </button>
  );
};
