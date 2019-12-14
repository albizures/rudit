import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отпрыгнуть: PerfectVerb = {
  name: Word('отпрыгнуть', 4),
  singular1stPerson: Word('отпрыгну', 4),
  singular2ndPerson: Word('отпрыгнешь', 4),
  singular3rdPerson: Word('отпрыгнет', 4),
  plural1stPerson: Word('отпрыгнем', 4),
  plural2ndPerson: Word('отпрыгнете', 4),
  plural3rdPerson: Word('отпрыгнут', 4),
  masculinePast: Word('отпрыгнул', 4),
  femininePast: Word('отпрыгнула', 4),
  neuterPast: Word('отпрыгнуло', 4),
  pluralPast: Word('отпрыгнули', 4),
  imperativeInformal: Word('отпрыгни', 4),
  imperativeFormal: Word('отпрыгните', 4),
  imperfect: [],
};

perfectVerbs.set(отпрыгнуть.name.text, отпрыгнуть);

export { отпрыгнуть };