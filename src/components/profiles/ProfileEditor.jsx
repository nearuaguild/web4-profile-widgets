/* INCLUDE: "common.jsx" */
/* END_INCLUDE: "common.jsx" */

const profileContractId = props.profileContractId;

const findLinkByType = (type) => {
  if (!props.links) return;

  const link = props.links.find((link) => link.type === type);

  if (!link) return;

  return link.path;
};

State.init({
  title: props.title ?? "",
  description: props.description ?? "",
  twitter: findLinkByType(1) ?? "",
  telegram: findLinkByType(2) ?? "",
  github: findLinkByType(3) ?? "",
  medium: findLinkByType(0) ?? "",
  error: "",
});

// This must be outside onClick, because Near.view returns null at first, and when the view call finished, it returns true/false.
// If checking this inside onClick, it will give `null` and we cannot tell the result is true or false.
const grantNotify = Near.view("social.near", "is_write_permission_granted", {
  predecessor_id: contractAccountId,
  key: context.accountId + "/index/notify",
});
if (grantNotify === null) {
  return;
}

const onEditClick = () => {
  State.update({ error: "" });

  if (!state.title) {
    return State.update({ error: "Title can't be empty" });
  }

  if (!state.description) {
    return State.update({ error: "Description can't be empty" });
  }

  const links = [];

  if (state.twitter) {
    links.push({
      type: 1,
      text: "Twitter",
      path: state.twitter,
    });
  }

  if (state.telegram) {
    links.push({
      type: 2,
      text: "Telegram",
      path: state.telegram,
    });
  }

  if (state.medium) {
    links.push({
      type: 0,
      text: "Medium",
      path: state.medium,
    });
  }

  if (state.github) {
    links.push({
      type: 3,
      text: "GitHub",
      path: state.github,
    });
  }

  const data = {
    title: state.title,
    description: state.description,
    links: links,
  };

  Near.call(
    profileContractId,
    "set_data",
    {
      data: data,
    },
    Big(10).pow(12).mul(300)
  );
};

return (
  <div className="card">
    <div className="card-header">Update</div>
    <div class="card-body">
      <div className="row">
        <div className="col-lg-6  mb-2">
          Title
          <input
            type="text"
            value={state.title}
            onChange={(event) => {
              State.update({ title: event.target.value });
            }}
          />
        </div>
        <div className="col-lg-12  mb-2">
          Description
          <textarea
            value={state.description}
            type="text"
            rows={2}
            className="form-control"
            onChange={(event) => {
              State.update({ description: event.target.value });
            }}
          />
        </div>
        <div className="col-lg-3  mb-2">
          GitHub
          <input
            type="text"
            value={state.github}
            placeholder="account"
            onChange={(event) => {
              State.update({ github: event.target.value });
            }}
          />
        </div>
        <div className="col-lg-3  mb-2">
          Twitter
          <input
            type="text"
            value={state.twitter}
            placeholder="account"
            onChange={(event) => {
              State.update({ twitter: event.target.value });
            }}
          />
        </div>
        <div className="col-lg-3  mb-2">
          Telegram
          <input
            type="text"
            placeholder="account"
            value={state.telegram}
            onChange={(event) => {
              State.update({ telegram: event.target.value });
            }}
          />
        </div>
        <div className="col-lg-3  mb-2">
          Medium
          <input
            type="text"
            placeholder="@account"
            value={state.medium}
            onChange={(event) => {
              State.update({ medium: event.target.value });
            }}
          />
        </div>
      </div>
      <a
        className="btn btn-outline-primary mb-2 mt-2 px-8 py-1"
        onClick={onEditClick}
      >
        Edit
      </a>
      <a
        className="btn btn-secondary ml-2 my-2 px-8 py-1"
        href={`https://${profileContractId}.page`}
        target="_blank"
      >
        Open profile
      </a>
    </div>
    {state.error && (
      <div class="card-footer">
        <p style={{ color: "red" }}>{state.error}</p>
      </div>
    )}
  </div>
);
