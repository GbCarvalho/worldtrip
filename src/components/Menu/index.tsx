import { HStack, StackProps } from "@chakra-ui/layout";
import { MenuItem } from "./MenuItem";

interface MenuProps extends StackProps {}

export function Menu({ ...rest }: MenuProps) {
  return (
    <HStack
      justifyContent="space-around"
      mt="20"
      spacing={0}
      w="100%"
      {...rest}
    >
      <MenuItem src="/images/cocktail.svg" text="vida noturna" />
      <MenuItem src="/images/surf.svg" text="praia" />
      <MenuItem src="/images/building.svg" text="moderno" />
      <MenuItem src="/images/museum.svg" text="clássico" />
      <MenuItem src="/images/earth.svg" text="e mais..." />
    </HStack>
  );
}
