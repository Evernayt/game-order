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
});

export default spacer;
