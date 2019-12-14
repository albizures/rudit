import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кусать: PerfectVerb = {
  name: Word('кусать', 3),
  singular1stPerson: Word('кусаю', 3),
  singular2ndPerson: Word('кусаешь', 3),
  singular3rdPerson: Word('кусает', 3),
  plural1stPerson: Word('кусаем', 3),
  plural2ndPerson: Word('кусаете', 3),
  plural3rdPerson: Word('кусают', 3),
  masculinePast: Word('кусал', 3),
  femininePast: Word('кусала', 3),
  neuterPast: Word('кусало', 3),
  pluralPast: Word('кусали', 3),
  imperativeInformal: Word('кусай', 3),
  imperativeFormal: Word('кусайте', 3),
  imperfect: ['покусать','укусить'],
};

perfectVerbs.set(кусать.name.text, кусать);

export { кусать };