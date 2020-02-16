use borsh::{BorshDeserialize, BorshSerialize};
use near_bindgen::{
    env,
    ext_contract,
    near_bindgen,
    Promise,
};
use serde_json::json;

#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[near_bindgen]
#[derive(Default, BorshDeserialize, BorshSerialize)]
pub struct CrossContract {}

// If the name is not provided, the namespace for generated methods in derived by applying snake
// case to the trait name, e.g. ext_guestbook.
#[ext_contract]
pub trait ExtGuestbook {
    fn addMessage(&mut self, text: String);
    fn getMessages(&self) -> Vec<String>;
}

#[near_bindgen]
impl CrossContract {

    pub fn add_message(&mut self, account_id: String, text: String) {
        ext_guestbook::addMessage(text, &account_id, 0, 1000000000000000000);
    }

    pub fn add_and_return_messages(&mut self, account_id: String, text: String) -> Promise {
        // 1) call guestbook to record a message from the signer.
        // 2) call guestbook to retrieve all messages.
        // 3) return messages as the result.
        ext_guestbook::addMessage(text, &account_id, 0, 1000000000000000000).then(
            ext_guestbook::getMessages(
                &account_id,
                0,
                1000000000000000000,
            ),
        )
    }
}