require "test_helper"

class TranslatorControllerTest < ActionDispatch::IntegrationTest
  test "should get translate" do
    get translator_translate_url
    assert_response :success
  end
end
