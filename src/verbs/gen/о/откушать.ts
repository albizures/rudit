import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const откушать: PerfectVerb = {
  name: Word('откушать', 3),
  singular1stPerson: Word('откушаю', 3),
  singular2ndPerson: Word('откушаешь', 3),
  singular3rdPerson: Word('откушает', 3),
  plural1stPerson: Word('откушаем', 3),
  plural2ndPerson: Word('откушаете', 3),
  plural3rdPerson: Word('откушают', 3),
  masculinePast: Word('откушал', 3),
  femininePast: Word('откушала', 3),
  neuterPast: Word('откушало', 3),
  pluralPast: Word('откушали', 3),
  imperativeInformal: Word('откушай', 3),
  imperativeFormal: Word('откушайте', 3),
  imperfect: [],
};

perfectVerbs.set(откушать.name.text, откушать);

export { откушать };