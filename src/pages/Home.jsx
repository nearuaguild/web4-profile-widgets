/* INCLUDE: "common.jsx" */
/* END_INCLUDE: "common.jsx" */

if (!context.accountId) {
  return <div>Please log in to be able to create Little Link profile</div>;
}

const rpcUrl = "https://rpc.testnet.near.org";
const factoryContractId = "web4_profile.testnet";

const profileContractId =
  Near.view(factoryContractId, "get_registered_contract_by_creator", {
    creator_id: context.accountId,
  }) || "";

if (profileContractId === null || profileContractId === undefined) {
  return <div>Fetching data ...</div>;
} else if (profileContractId === "") {
  return widget("components.profiles.ProfileCreator", {
    rpcUrl: rpcUrl,
    factoryContractId: factoryContractId,
  });
} else {
  const fields = Near.view(profileContractId, "get_data");

  return widget("components.profiles.ProfileEditor", {
    profileContractId: profileContractId,
    ...(fields || {}),
  });
}
