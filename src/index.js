require('../css/hell.css')
function sa() {
    alert("hello")
}
sa();
import $ from 'jquery'
$(function () {
    $("li:odd").css("backgroundColor","red");
    $("li:even").css("backgroundColor","blue")

})