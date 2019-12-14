import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const докучать: PerfectVerb = {
  name: Word('докучать', 5),
  singular1stPerson: Word('докучаю', 5),
  singular2ndPerson: Word('докучаешь', 5),
  singular3rdPerson: Word('докучает', 5),
  plural1stPerson: Word('докучаем', 5),
  plural2ndPerson: Word('докучаете', 5),
  plural3rdPerson: Word('докучают', 5),
  masculinePast: Word('докучал', 5),
  femininePast: Word('докучала', 5),
  neuterPast: Word('докучало', 5),
  pluralPast: Word('докучали', 5),
  imperativeInformal: Word('докучай', 5),
  imperativeFormal: Word('докучайте', 5),
  imperfect: [],
};

perfectVerbs.set(докучать.name.text, докучать);

export { докучать };