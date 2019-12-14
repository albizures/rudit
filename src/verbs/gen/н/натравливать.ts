import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const натравливать: PerfectVerb = {
  name: Word('натравливать', 4),
  singular1stPerson: Word('натравливаю', 4),
  singular2ndPerson: Word('натравливаешь', 4),
  singular3rdPerson: Word('натравливает', 4),
  plural1stPerson: Word('натравливаем', 4),
  plural2ndPerson: Word('натравливаете', 4),
  plural3rdPerson: Word('натравливают', 4),
  masculinePast: Word('натравливал', 4),
  femininePast: Word('натравливала', 4),
  neuterPast: Word('натравливало', 4),
  pluralPast: Word('натравливали', 4),
  imperativeInformal: Word('натравливай', 4),
  imperativeFormal: Word('натравливайте', 4),
  imperfect: [],
};

perfectVerbs.set(натравливать.name.text, натравливать);

export { натравливать };