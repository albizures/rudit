import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закисать: PerfectVerb = {
  name: Word('закисать', 5),
  singular1stPerson: Word('закисаю', 5),
  singular2ndPerson: Word('закисаешь', 5),
  singular3rdPerson: Word('закисает', 5),
  plural1stPerson: Word('закисаем', 5),
  plural2ndPerson: Word('закисаете', 5),
  plural3rdPerson: Word('закисают', 5),
  masculinePast: Word('закисал', 5),
  femininePast: Word('закисала', 5),
  neuterPast: Word('закисало', 5),
  pluralPast: Word('закисали', 5),
  imperativeInformal: Word('закисай', 5),
  imperativeFormal: Word('закисайте', 5),
  imperfect: [],
};

perfectVerbs.set(закисать.name.text, закисать);

export { закисать };