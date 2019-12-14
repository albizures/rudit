import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вышмыгнуть: PerfectVerb = {
  name: Word('вышмыгнуть', 1),
  singular1stPerson: Word('вышмыгну', 1),
  singular2ndPerson: Word('вышмыгнешь', 1),
  singular3rdPerson: Word('вышмыгнет', 1),
  plural1stPerson: Word('вышмыгнем', 1),
  plural2ndPerson: Word('вышмыгнете', 1),
  plural3rdPerson: Word('вышмыгнут', 1),
  masculinePast: Word('вышмыгнул', 1),
  femininePast: Word('вышмыгнула', 1),
  neuterPast: Word('вышмыгнуло', 1),
  pluralPast: Word('вышмыгнули', 1),
  imperativeInformal: Word('вышмыгни', 1),
  imperativeFormal: Word('вышмыгните', 1),
  imperfect: [],
};

perfectVerbs.set(вышмыгнуть.name.text, вышмыгнуть);

export { вышмыгнуть };