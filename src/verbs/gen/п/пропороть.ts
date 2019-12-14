import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пропороть: PerfectVerb = {
  name: Word('пропороть', 6),
  singular1stPerson: Word('пропорю', 6),
  singular2ndPerson: Word('пропорешь', 4),
  singular3rdPerson: Word('пропорет', 4),
  plural1stPerson: Word('пропорем', 4),
  plural2ndPerson: Word('пропорете', 4),
  plural3rdPerson: Word('пропорют', 4),
  masculinePast: Word('пропорол', 6),
  femininePast: Word('пропорола', 6),
  neuterPast: Word('пропороло', 6),
  pluralPast: Word('пропороли', 6),
  imperativeInformal: Word('пропори', 6),
  imperativeFormal: Word('пропорите', 6),
  imperfect: [],
};

perfectVerbs.set(пропороть.name.text, пропороть);

export { пропороть };