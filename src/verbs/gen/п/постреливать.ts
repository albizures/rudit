import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const постреливать: PerfectVerb = {
  name: Word('постреливать', 5),
  singular1stPerson: Word('постреливаю', 5),
  singular2ndPerson: Word('постреливаешь', 5),
  singular3rdPerson: Word('постреливает', 5),
  plural1stPerson: Word('постреливаем', 5),
  plural2ndPerson: Word('постреливаете', 5),
  plural3rdPerson: Word('постреливают', 5),
  masculinePast: Word('постреливал', 5),
  femininePast: Word('постреливала', 5),
  neuterPast: Word('постреливало', 5),
  pluralPast: Word('постреливали', 5),
  imperativeInformal: Word('постреливай', 5),
  imperativeFormal: Word('постреливайте', 5),
  imperfect: [],
};

perfectVerbs.set(постреливать.name.text, постреливать);

export { постреливать };