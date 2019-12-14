import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спрыгнуть: PerfectVerb = {
  name: Word('спрыгнуть', 3),
  singular1stPerson: Word('спрыгну', 3),
  singular2ndPerson: Word('спрыгнешь', 3),
  singular3rdPerson: Word('спрыгнет', 3),
  plural1stPerson: Word('спрыгнем', 3),
  plural2ndPerson: Word('спрыгнете', 3),
  plural3rdPerson: Word('спрыгнут', 3),
  masculinePast: Word('спрыгнул', 3),
  femininePast: Word('спрыгнула', 3),
  neuterPast: Word('спрыгнуло', 3),
  pluralPast: Word('спрыгнули', 3),
  imperativeInformal: Word('спрыгни', 3),
  imperativeFormal: Word('спрыгните', 3),
  imperfect: [],
};

perfectVerbs.set(спрыгнуть.name.text, спрыгнуть);

export { спрыгнуть };