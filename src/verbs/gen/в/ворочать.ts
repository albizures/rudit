import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ворочать: PerfectVerb = {
  name: Word('ворочать', 3),
  singular1stPerson: Word('ворочаю', 3),
  singular2ndPerson: Word('ворочаешь', 3),
  singular3rdPerson: Word('ворочает', 3),
  plural1stPerson: Word('ворочаем', 3),
  plural2ndPerson: Word('ворочаете', 3),
  plural3rdPerson: Word('ворочают', 3),
  masculinePast: Word('ворочал', 3),
  femininePast: Word('ворочала', 3),
  neuterPast: Word('ворочало', 3),
  pluralPast: Word('ворочали', 3),
  imperativeInformal: Word('ворочай', 3),
  imperativeFormal: Word('ворочайте', 3),
  imperfect: [],
};

perfectVerbs.set(ворочать.name.text, ворочать);

export { ворочать };