import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выпереть: PerfectVerb = {
  name: Word('выпереть', 1),
  singular1stPerson: Word('выпру', 1),
  singular2ndPerson: Word('выпрешь', 1),
  singular3rdPerson: Word('выпрет', 1),
  plural1stPerson: Word('выпрем', 1),
  plural2ndPerson: Word('выпрете', 1),
  plural3rdPerson: Word('выпрут', 1),
  masculinePast: Word('выпер', 1),
  femininePast: Word('выперла', 1),
  neuterPast: Word('выперло', 1),
  pluralPast: Word('выперли', 1),
  imperativeInformal: Word('выпри', 1),
  imperativeFormal: Word('выприте', 1),
  imperfect: [],
};

perfectVerbs.set(выпереть.name.text, выпереть);

export { выпереть };