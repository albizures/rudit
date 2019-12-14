import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const потереть: PerfectVerb = {
  name: Word('потереть', 5),
  singular1stPerson: Word('потру', 4),
  singular2ndPerson: Word('потрёшь', 1),
  singular3rdPerson: Word('потрёт', 1),
  plural1stPerson: Word('потрём', 1),
  plural2ndPerson: Word('потрёте', 6),
  plural3rdPerson: Word('потрут', 4),
  masculinePast: Word('потер', 3),
  femininePast: Word('потерла', 3),
  neuterPast: Word('потерло', 3),
  pluralPast: Word('потерли', 3),
  imperativeInformal: Word('потри', 4),
  imperativeFormal: Word('потрите', 4),
  imperfect: [],
};

perfectVerbs.set(потереть.name.text, потереть);

export { потереть };