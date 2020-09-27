import React, { Component } from 'react';
import { Grid, Icon } from 'semantic-ui-react';
import ChocoCookies from '../../img/cookies/chocola-cookies.jpg';
import Cake from '../../img/cookies/cake.jpg';
import FishCookies from '../../img/cookies/fish-cookies.jpg';
import Rice from '../../img/cookies/rice.jpg';

class Page1 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listData: [
        {
          id: 1,
          name: 'Choco chip Cookies',
          img: ChocoCookies,
          content: 'Bánh quy sô-cô-la chip là một trong những món bánh quy đầu tiên mà mình tập làm. Công thức cũ ngay từ ngày ấy đã rất ưng ý rồi. Sau này trong một lần đi hội thảo khoa học ở Mỹ, tình cờ được thử món bánh quy sô-cô-la chip trong một cửa hàng rất nổi tiếng ở đây, mê vị cuả nó lắm, và cả kích thước cỡ XXL to bằng bàn tay người lớn cuả chiếc bánh nữa, nên về mày mò làm lại. Và thế là cho ra đời công thức mới ở dưới đây',
          ingredients: [
            '165 gram bơ động vật không muối (approx. 3/4 cup unsalted butter)',
            '80 gram đường trắng (1/4 cup plus 3 Tbsp caster sugar)',
            '80 gram đường nâu (1/4 cup plus 2 Tbsp brown sugar)',
            '2 lòng đỏ trứng (18 – 20 gram/ lòng đỏ) – để lạnh',
            '2 thìa cafe vani chiết xuất (2 tsp vanilla extract)',
            '300 gram bột mì đa dụng (2 cup plus 4 Tbsp all purpose flour)',
            '1/2 thìa cafe muối nở (1/2 tsp baking soda/ bicarb)',
            '1/4 thìa cafe muối ăn (1/4 tsp salt)',
            '130~150 gram sô-cô-la chip',
          ],
        },
        {
          id: 2,
          name: 'Fish Cookies',
          img: FishCookies,
          content: 'Cách làm bánh Cookies chuẩn nhất với công thức nguyên liệu và các bước làm cụ thể, cùng những lưu ý vô cùng quan trọng trong cách làm món bánh Cookies này, chắc chắn bạn sẽ thực hiện thành công.',
          ingredients: [
            '165 gram bơ động vật không muối (approx. 3/4 cup unsalted butter)',
            '80 gram đường trắng (1/4 cup plus 3 Tbsp caster sugar)',
            '80 gram đường nâu (1/4 cup plus 2 Tbsp brown sugar)',
            '2 lòng đỏ trứng (18 – 20 gram/ lòng đỏ) – để lạnh',
            '2 thìa cafe vani chiết xuất (2 tsp vanilla extract)',
            '300 gram bột mì đa dụng (2 cup plus 4 Tbsp all purpose flour)',
            '1/2 thìa cafe muối nở (1/2 tsp baking soda/ bicarb)',
            '1/4 thìa cafe muối ăn (1/4 tsp salt)',
            '130~150 gram sô-cô-la chip',
          ],
        },
        {
          id: 3,
          name: 'Rice Cookies',
          img: Rice,
          content: 'Cookies là loại bánh nên làm đầu tiên khi mới bắt đầu tập làm bánh, vì nó rất dễ làm. Dễ đến đâu? Cùng thử làm xem nhé.',
          ingredients: [
            '250 gram bơ',
            '250 gram đường (Phải xay ra nhé)',
            '1 lòng đỏ trứng',
            '350 gram bột mì',
            '35 gram Cacao (hoặc 20gram matcha) tùy vị các bạn muốn',
            '8 gram baking powder',
            '2 gram baking soda (nhớ đừng nhầm 2 loại với nhau nhé)',
            'Trang trí: 100 gram chocolate chip.',
          ]
        },
        {
          id: 4,
          name: 'Cake Cookies',
          img: Cake,
          content: 'Có thể các bạn có đọc được những công thức khác cần cán bột, hay những thứ tương tự, tuy nhiên, đối với công thức này, cán bột không cần thiết (để tiết kiệm dụng cụ mua đồ). Nếu muốn sang chảnh và nặn hình thì các bạn có thể mua cán bột để cán và dập khuôn theo ý thích.',
          ingredients: [
            '165 gram bơ động vật không muối (approx. 3/4 cup unsalted butter)',
            '80 gram đường trắng (1/4 cup plus 3 Tbsp caster sugar)',
            '80 gram đường nâu (1/4 cup plus 2 Tbsp brown sugar)',
            '2 lòng đỏ trứng (18 – 20 gram/ lòng đỏ) – để lạnh',
            '2 thìa cafe vani chiết xuất (2 tsp vanilla extract)',
            '300 gram bột mì đa dụng (2 cup plus 4 Tbsp all purpose flour)',
            '1/2 thìa cafe muối nở (1/2 tsp baking soda/ bicarb)',
            '1/4 thìa cafe muối ăn (1/4 tsp salt)',
            '130~150 gram sô-cô-la chip',
          ],
        },
      ]
    }
  }

  render() {
    return (
      <div className="page1Wapper">
        <Grid className="boxElememt">
          {this.state.listData.map((item, index) => {
            return <Grid.Row className="Row" key={index}>
              <Grid.Column width={5} className="imgColumn">
                <img src={item.img}></img>
              </Grid.Column>
              <Grid.Column width={11} className="contentColumn">
                <h3>{item.name}</h3>
                <p>{item.content}</p>
                <div className="ingredientsBox">
                  <h4>Nguyên Liệu</h4>
                  <ul>
                    {
                      item.ingredients.map((e, idx) => {
                        return <li key={idx}>
                          <Icon disabled name='check' />
                          <span>{e}</span>
                        </li>
                      })
                    }
                  </ul>
                </div>
              </Grid.Column>
            </Grid.Row>
          })}
          </Grid>
      </div>
    );
  }
}

export default Page1;