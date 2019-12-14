import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обмереть: PerfectVerb = {
  name: Word('обмереть', 5),
  singular1stPerson: Word('обомру', 5),
  singular2ndPerson: Word('обомрёшь', 0),
  singular3rdPerson: Word('обомрёт', 0),
  plural1stPerson: Word('обомрём', 0),
  plural2ndPerson: Word('обомрёте', 7),
  plural3rdPerson: Word('обомрут', 5),
  masculinePast: Word('обмер', 0),
  femininePast: Word('обмерла', 6),
  neuterPast: Word('обмерло', 0),
  pluralPast: Word('обмерли', 0),
  imperativeInformal: Word('обомри', 5),
  imperativeFormal: Word('обомрите', 5),
  imperfect: [],
};

perfectVerbs.set(обмереть.name.text, обмереть);

export { обмереть };