import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прибегать: PerfectVerb = {
  name: Word('прибегать', 6),
  singular1stPerson: Word('прибегаю', 6),
  singular2ndPerson: Word('прибегаешь', 6),
  singular3rdPerson: Word('прибегает', 6),
  plural1stPerson: Word('прибегаем', 6),
  plural2ndPerson: Word('прибегаете', 6),
  plural3rdPerson: Word('прибегают', 6),
  masculinePast: Word('прибегал', 6),
  femininePast: Word('прибегала', 6),
  neuterPast: Word('прибегало', 6),
  pluralPast: Word('прибегали', 6),
  imperativeInformal: Word('прибегай', 6),
  imperativeFormal: Word('прибегайте', 6),
  imperfect: [],
};

perfectVerbs.set(прибегать.name.text, прибегать);

export { прибегать };