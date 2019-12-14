import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прилегать: PerfectVerb = {
  name: Word('прилегать', 6),
  singular1stPerson: Word('прилегаю', 6),
  singular2ndPerson: Word('прилегаешь', 6),
  singular3rdPerson: Word('прилегает', 6),
  plural1stPerson: Word('прилегаем', 6),
  plural2ndPerson: Word('прилегаете', 6),
  plural3rdPerson: Word('прилегают', 6),
  masculinePast: Word('прилегал', 6),
  femininePast: Word('прилегала', 6),
  neuterPast: Word('прилегало', 6),
  pluralPast: Word('прилегали', 6),
  imperativeInformal: Word('прилегай', 6),
  imperativeFormal: Word('прилегайте', 6),
  imperfect: [],
};

perfectVerbs.set(прилегать.name.text, прилегать);

export { прилегать };