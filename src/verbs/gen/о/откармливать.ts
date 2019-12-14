import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const откармливать: PerfectVerb = {
  name: Word('откармливать', 3),
  singular1stPerson: Word('откармливаю', 3),
  singular2ndPerson: Word('откармливаешь', 3),
  singular3rdPerson: Word('откармливает', 3),
  plural1stPerson: Word('откармливаем', 3),
  plural2ndPerson: Word('откармливаете', 3),
  plural3rdPerson: Word('откармливают', 3),
  masculinePast: Word('откармливал', 3),
  femininePast: Word('откармливала', 3),
  neuterPast: Word('откармливало', 3),
  pluralPast: Word('откармливали', 3),
  imperativeInformal: Word('откармливай', 3),
  imperativeFormal: Word('откармливайте', 3),
  imperfect: [],
};

perfectVerbs.set(откармливать.name.text, откармливать);

export { откармливать };