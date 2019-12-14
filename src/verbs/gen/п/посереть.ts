import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const посереть: PerfectVerb = {
  name: Word('посереть', 5),
  singular1stPerson: Word('посерею', 5),
  singular2ndPerson: Word('посереешь', 5),
  singular3rdPerson: Word('посереет', 5),
  plural1stPerson: Word('посереем', 5),
  plural2ndPerson: Word('посереете', 5),
  plural3rdPerson: Word('посереют', 5),
  masculinePast: Word('посерел', 5),
  femininePast: Word('посерела', 5),
  neuterPast: Word('посерело', 5),
  pluralPast: Word('посерели', 5),
  imperativeInformal: Word('посерей', 5),
  imperativeFormal: Word('посерейте', 5),
  imperfect: [],
};

perfectVerbs.set(посереть.name.text, посереть);

export { посереть };