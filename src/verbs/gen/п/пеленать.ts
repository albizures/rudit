import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пеленать: PerfectVerb = {
  name: Word('пеленать', 5),
  singular1stPerson: Word('пеленаю', 5),
  singular2ndPerson: Word('пеленаешь', 5),
  singular3rdPerson: Word('пеленает', 5),
  plural1stPerson: Word('пеленаем', 5),
  plural2ndPerson: Word('пеленаете', 5),
  plural3rdPerson: Word('пеленают', 5),
  masculinePast: Word('пеленал', 5),
  femininePast: Word('пеленала', 5),
  neuterPast: Word('пеленало', 5),
  pluralPast: Word('пеленали', 5),
  imperativeInformal: Word('пеленай', 5),
  imperativeFormal: Word('пеленайте', 5),
  imperfect: [],
};

perfectVerbs.set(пеленать.name.text, пеленать);

export { пеленать };