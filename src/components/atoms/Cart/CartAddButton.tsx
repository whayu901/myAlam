import React, { memo } from "react";

import { IconButton } from "../Button";

interface Props {
  onPress: () => void;
}

const CartAddButton = ({ onPress }: Props) => {
  return <IconButton icon="add" onPress={onPress} />;
};

export default memo(CartAddButton);
