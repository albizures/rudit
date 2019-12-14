import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отторгнуть: PerfectVerb = {
  name: Word('отторгнуть', 3),
  singular1stPerson: Word('отторгну', 3),
  singular2ndPerson: Word('отторгнешь', 3),
  singular3rdPerson: Word('отторгнет', 3),
  plural1stPerson: Word('отторгнем', 3),
  plural2ndPerson: Word('отторгнете', 3),
  plural3rdPerson: Word('отторгнут', 3),
  masculinePast: Word('отторг//отто'ргнул', 3),
  femininePast: Word('отторгла', 3),
  neuterPast: Word('отторгло', 3),
  pluralPast: Word('отторгли', 3),
  imperativeInformal: Word('отторгни', 3),
  imperativeFormal: Word('отторгните', 3),
  imperfect: [],
};

perfectVerbs.set(отторгнуть.name.text, отторгнуть);

export { отторгнуть };