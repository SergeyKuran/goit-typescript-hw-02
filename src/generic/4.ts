/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface ComponentPage {
  title: string
}

class Component<T extends ComponentPage> {
  constructor(public props: T) {

  }
}

class PageProps implements ComponentPage {
  title: string = '';
}

class Page extends Component<PageProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export { };