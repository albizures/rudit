import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отмереть: PerfectVerb = {
  name: Word('отмереть', 5),
  singular1stPerson: Word('отомру', 5),
  singular2ndPerson: Word('отомрёшь', 0),
  singular3rdPerson: Word('отомрёт', 0),
  plural1stPerson: Word('отомрём', 0),
  plural2ndPerson: Word('отомрёте', 7),
  plural3rdPerson: Word('отомрут', 5),
  masculinePast: Word('отмер', 0),
  femininePast: Word('отмерла', 6),
  neuterPast: Word('отмерло', 0),
  pluralPast: Word('отмерли', 0),
  imperativeInformal: Word('отомри', 5),
  imperativeFormal: Word('отомрите', 5),
  imperfect: [],
};

perfectVerbs.set(отмереть.name.text, отмереть);

export { отмереть };