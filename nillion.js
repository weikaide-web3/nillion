import("@nillion/nillion-client-js-browser/nillion_client_js_browser.js");

const user_key = UserKey.generate();
const node_key = NodeKey.from_seed('your-seed-here');
const client = new NillionClient(
    user_key,
    node_key,
    bootnodes,
    payments_config
    );


console.log(key)
