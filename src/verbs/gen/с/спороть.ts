import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спороть: PerfectVerb = {
  name: Word('спороть', 4),
  singular1stPerson: Word('спорю', 4),
  singular2ndPerson: Word('спорешь', 2),
  singular3rdPerson: Word('спорет', 2),
  plural1stPerson: Word('спорем', 2),
  plural2ndPerson: Word('спорете', 2),
  plural3rdPerson: Word('спорют', 2),
  masculinePast: Word('спорол', 4),
  femininePast: Word('спорола', 4),
  neuterPast: Word('спороло', 4),
  pluralPast: Word('спороли', 4),
  imperativeInformal: Word('спори', 4),
  imperativeFormal: Word('спорите', 4),
  imperfect: [],
};

perfectVerbs.set(спороть.name.text, спороть);

export { спороть };