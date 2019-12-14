import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const высохнуть: PerfectVerb = {
  name: Word('высохнуть', 1),
  singular1stPerson: Word('высохну', 1),
  singular2ndPerson: Word('высохнешь', 1),
  singular3rdPerson: Word('высохнет', 1),
  plural1stPerson: Word('высохнем', 1),
  plural2ndPerson: Word('высохнете', 1),
  plural3rdPerson: Word('высохнут', 1),
  masculinePast: Word('высох,вы'сохнул', 1),
  femininePast: Word('высохла,вы'сохнула', 1),
  neuterPast: Word('высохло,вы'сохнуло', 1),
  pluralPast: Word('высохли,вы'сохнули', 1),
  imperativeInformal: Word('высохни', 1),
  imperativeFormal: Word('высохните', 1),
  imperfect: ['высыхать','сохнуть'],
};

perfectVerbs.set(высохнуть.name.text, высохнуть);

export { высохнуть };