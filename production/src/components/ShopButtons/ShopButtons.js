export const fannyButton = `<form target="_blank" action="https://www.paypal.com/cgi-bin/webscr" method="post" >
    <input type="hidden" name="cmd" value="_s-xclick">
    <table>
    <tr><td><input type="hidden" name="on0" value="Colors">Colors</td></tr><tr><td><select name="os0">
        <option value="Red">Red $3.00 USD</option>
        <option value="Black">Black $3.00 USD</option>
    </select> </td></tr>
    </table>
    <input type="hidden" name="currency_code" value="USD">
    <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----">
    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
    </form>`
