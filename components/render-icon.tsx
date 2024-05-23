import { GenericIcon } from "./generic_icon";

export const renderIcon = (
  iconData: {
    icon?: string;
    IconElement?: React.ElementType;
  },
  className: string
) => {
  if (iconData?.IconElement) {
    return <iconData.IconElement className={className} />;
  } else if (iconData?.icon) {
    return <GenericIcon className={className} />;
  }

  return null;
};
