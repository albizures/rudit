import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const засаливать: PerfectVerb = {
  name: Word('засаливать', 3),
  singular1stPerson: Word('засаливаю', 3),
  singular2ndPerson: Word('засаливаешь', 3),
  singular3rdPerson: Word('засаливает', 3),
  plural1stPerson: Word('засаливаем', 3),
  plural2ndPerson: Word('засаливаете', 3),
  plural3rdPerson: Word('засаливают', 3),
  masculinePast: Word('засаливал', 3),
  femininePast: Word('засаливала', 3),
  neuterPast: Word('засаливало', 3),
  pluralPast: Word('засаливали', 3),
  imperativeInformal: Word('засаливай', 3),
  imperativeFormal: Word('засаливайте', 3),
  imperfect: [],
};

perfectVerbs.set(засаливать.name.text, засаливать);

export { засаливать };