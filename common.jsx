const contractAccountId =
  props.contractAccountId ||
  (context.widgetSrc ?? "web4_profile.testnet").split("/", 1)[0];
const widgetAccountId =
  props.widgetAccountId ||
  (context.widgetSrc ?? "web4_profile.testnet").split("/", 1)[0];

function widget(widgetName, widgetProps, key) {
  widgetProps = {
    ...widgetProps,
    contractAccountId: props.contractAccountId,
    widgetAccountId: props.widgetAccountId,
    referral: props.referral,
  };
  return (
    <Widget
      src={`${widgetAccountId}/widget/${widgetName}`}
      props={widgetProps}
      key={key}
    />
  );
}

function href(widgetName, linkProps) {
  linkProps = { ...linkProps };
  if (props.contractAccountId) {
    linkProps.contractAccountId = props.contractAccountId;
  }
  if (props.widgetAccountId) {
    linkProps.widgetAccountId = props.widgetAccountId;
  }
  if (props.referral) {
    linkProps.referral = props.referral;
  }
  const linkPropsQuery = Object.entries(linkProps)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
  return `#/${widgetAccountId}/widget/pages.${widgetName}${
    linkPropsQuery ? "?" : ""
  }${linkPropsQuery}`;
}
