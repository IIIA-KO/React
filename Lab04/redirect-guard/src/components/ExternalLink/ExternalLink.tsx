import { useExternalRedirectContext } from "../../contexts/ExternalRedirectContext";
import { IExternalLinkProps } from "./IExternalLinkProps";

const ExternalLink = ({ href, children, className }: IExternalLinkProps) => {
    const { handleExternalLink } = useExternalRedirectContext();

    return (
        <a
            href={href}
            className={className}
            onClick={(event) => {
                event.preventDefault();
                handleExternalLink(href);
            }}
        >
            {children}
        </a>
    )
}

export default ExternalLink;