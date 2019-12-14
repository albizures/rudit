import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const докармливать: PerfectVerb = {
  name: Word('докармливать', 3),
  singular1stPerson: Word('докармливаю', 3),
  singular2ndPerson: Word('докармливаешь', 3),
  singular3rdPerson: Word('докармливает', 3),
  plural1stPerson: Word('докармливаем', 3),
  plural2ndPerson: Word('докармливаете', 3),
  plural3rdPerson: Word('докармливают', 3),
  masculinePast: Word('докармливал', 3),
  femininePast: Word('докармливала', 3),
  neuterPast: Word('докармливало', 3),
  pluralPast: Word('докармливали', 3),
  imperativeInformal: Word('докармливай', 3),
  imperativeFormal: Word('докармливайте', 3),
  imperfect: [],
};

perfectVerbs.set(докармливать.name.text, докармливать);

export { докармливать };