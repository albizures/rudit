import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const потрогать: PerfectVerb = {
  name: Word('потрогать', 4),
  singular1stPerson: Word('потрогаю', 4),
  singular2ndPerson: Word('потрогаешь', 4),
  singular3rdPerson: Word('потрогает', 4),
  plural1stPerson: Word('потрогаем', 4),
  plural2ndPerson: Word('потрогаете', 4),
  plural3rdPerson: Word('потрогают', 4),
  masculinePast: Word('потрогал', 4),
  femininePast: Word('потрогала', 4),
  neuterPast: Word('потрогало', 4),
  pluralPast: Word('потрогали', 4),
  imperativeInformal: Word('потрогай', 4),
  imperativeFormal: Word('потрогайте', 4),
  imperfect: [],
};

perfectVerbs.set(потрогать.name.text, потрогать);

export { потрогать };