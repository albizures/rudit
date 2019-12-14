import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запрыгнуть: PerfectVerb = {
  name: Word('запрыгнуть', 4),
  singular1stPerson: Word('запрыгну', 4),
  singular2ndPerson: Word('запрыгнешь', 4),
  singular3rdPerson: Word('запрыгнет', 4),
  plural1stPerson: Word('запрыгнем', 4),
  plural2ndPerson: Word('запрыгнете', 4),
  plural3rdPerson: Word('запрыгнут', 4),
  masculinePast: Word('запрыгнул', 4),
  femininePast: Word('запрыгнула', 4),
  neuterPast: Word('запрыгнуло', 4),
  pluralPast: Word('запрыгнули', 4),
  imperativeInformal: Word('запрыгни', 4),
  imperativeFormal: Word('запрыгните', 4),
  imperfect: [],
};

perfectVerbs.set(запрыгнуть.name.text, запрыгнуть);

export { запрыгнуть };