export type SpacerProps = {
  margin?: string;
  mt?: string;
  mr?: string;
  mb?: string;
  ml?: string;
  padding?: string;
  pt?: string;
  pr?: string;
  pb?: string;
  pl?: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
};

const spacer = (props: SpacerProps) => ({
  margin: props.margin,
  marginTop: props.mt,
  marginRight: props.mr,
  marginBottom: props.mb,
  marginLeft: props.ml,
  padding: props.padding,
  paddingTop: props.pt,
  paddingRight: props.pr,
  paddingBottom: props.pb,
  paddingLeft: props.pl,
  top: props.top,
  right: props.right,
  bottom: props.bottom,
  left: props.left,
});

export default spacer;
