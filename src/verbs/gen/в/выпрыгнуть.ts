import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выпрыгнуть: PerfectVerb = {
  name: Word('выпрыгнуть', 1),
  singular1stPerson: Word('выпрыгну', 1),
  singular2ndPerson: Word('выпрыгнешь', 1),
  singular3rdPerson: Word('выпрыгнет', 1),
  plural1stPerson: Word('выпрыгнем', 1),
  plural2ndPerson: Word('выпрыгнете', 1),
  plural3rdPerson: Word('выпрыгнут', 1),
  masculinePast: Word('выпрыгнул', 1),
  femininePast: Word('выпрыгнула', 1),
  neuterPast: Word('выпрыгнуло', 1),
  pluralPast: Word('выпрыгнули', 1),
  imperativeInformal: Word('выпрыгни', 1),
  imperativeFormal: Word('выпрыгните', 1),
  imperfect: [],
};

perfectVerbs.set(выпрыгнуть.name.text, выпрыгнуть);

export { выпрыгнуть };