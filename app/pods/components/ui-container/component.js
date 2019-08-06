import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import move from 'ember-animated/motions/move';
import { easeOut, easeIn } from 'ember-animated/easings/cosine';
import { fadeIn, fadeOut } from 'ember-animated/motions/opacity';
import { wait } from 'ember-animated';

export default class UiContainerComponent extends Component {
  @tracked animated = true

  transition = function* ({ insertedSprites, keptSprites, removedSprites, duration }) {
    for (let sprite of insertedSprites) {
      yield wait(duration / 4)
      sprite.startAtPixel({ x: sprite.originalFinalBounds.left + 20 });
      move(sprite, { easing: easeOut });
      fadeIn(sprite)
    }

    for (let sprite of keptSprites) {
      move(sprite);
    }

    for (let sprite of removedSprites) {
      sprite.endAtPixel({ x: sprite.originalInitialBounds.left + 20 });
      move(sprite, { easing: easeIn });
      fadeOut(sprite)
    }
  }
}
