import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выстрогать: PerfectVerb = {
  name: Word('выстрогать', 1),
  singular1stPerson: Word('выстрогаю', 1),
  singular2ndPerson: Word('выстрогаешь', 1),
  singular3rdPerson: Word('выстрогает', 1),
  plural1stPerson: Word('выстрогаем', 1),
  plural2ndPerson: Word('выстрогаете', 1),
  plural3rdPerson: Word('выстрогают', 1),
  masculinePast: Word('выстрогал', 1),
  femininePast: Word('выстрогала', 1),
  neuterPast: Word('выстрогало', 1),
  pluralPast: Word('выстрогали', 1),
  imperativeInformal: Word('выстрогай', 1),
  imperativeFormal: Word('выстрогайте', 1),
  imperfect: [],
};

perfectVerbs.set(выстрогать.name.text, выстрогать);

export { выстрогать };