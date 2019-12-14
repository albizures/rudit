import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выпороть: PerfectVerb = {
  name: Word('выпороть', 1),
  singular1stPerson: Word('выпорю', 1),
  singular2ndPerson: Word('выпорешь', 1),
  singular3rdPerson: Word('выпорет', 1),
  plural1stPerson: Word('выпорем', 1),
  plural2ndPerson: Word('выпорете', 1),
  plural3rdPerson: Word('выпорют', 1),
  masculinePast: Word('выпорол', 1),
  femininePast: Word('выпорола', 1),
  neuterPast: Word('выпороло', 1),
  pluralPast: Word('выпороли', 1),
  imperativeInformal: Word('выпори', 1),
  imperativeFormal: Word('выпорите', 1),
  imperfect: [],
};

perfectVerbs.set(выпороть.name.text, выпороть);

export { выпороть };