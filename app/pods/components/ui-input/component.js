import Component from '@glimmer/component';

export default class UiInputComponent extends Component {
  get type() {
    return this.args.type || 'text'
  }

  onChange = (value) => {
    const { onChange } = this.args

    if (typeof onChange === 'function') {
      onChange(value)
    }
  }
}
