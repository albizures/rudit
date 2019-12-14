import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const иссушать: PerfectVerb = {
  name: Word('иссушать', 5),
  singular1stPerson: Word('иссушаю', 5),
  singular2ndPerson: Word('иссушаешь', 5),
  singular3rdPerson: Word('иссушает', 5),
  plural1stPerson: Word('иссушаем', 5),
  plural2ndPerson: Word('иссушаете', 5),
  plural3rdPerson: Word('иссушают', 5),
  masculinePast: Word('иссушал', 5),
  femininePast: Word('иссушала', 5),
  neuterPast: Word('иссушало', 5),
  pluralPast: Word('иссушали', 5),
  imperativeInformal: Word('иссушай', 5),
  imperativeFormal: Word('иссушайте', 5),
  imperfect: [],
};

perfectVerbs.set(иссушать.name.text, иссушать);

export { иссушать };