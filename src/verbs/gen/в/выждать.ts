import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выждать: PerfectVerb = {
  name: Word('выждать', 1),
  singular1stPerson: Word('выжду', 1),
  singular2ndPerson: Word('выждешь', 1),
  singular3rdPerson: Word('выждет', 1),
  plural1stPerson: Word('выждем', 1),
  plural2ndPerson: Word('выждете', 1),
  plural3rdPerson: Word('выждут', 1),
  masculinePast: Word('выждал', 1),
  femininePast: Word('выждала', 1),
  neuterPast: Word('выждало', 1),
  pluralPast: Word('выждали', 1),
  imperativeInformal: Word('выжди', 1),
  imperativeFormal: Word('выждите', 1),
  imperfect: [],
};

perfectVerbs.set(выждать.name.text, выждать);

export { выждать };