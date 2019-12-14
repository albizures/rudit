import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пожадничать: PerfectVerb = {
  name: Word('пожадничать', 3),
  singular1stPerson: Word('пожадничаю', 3),
  singular2ndPerson: Word('пожадничаешь', 3),
  singular3rdPerson: Word('пожадничает', 3),
  plural1stPerson: Word('пожадничаем', 3),
  plural2ndPerson: Word('пожадничаете', 3),
  plural3rdPerson: Word('пожадничают', 3),
  masculinePast: Word('пожадничал', 3),
  femininePast: Word('пожадничала', 3),
  neuterPast: Word('пожадничало', 3),
  pluralPast: Word('пожадничали', 3),
  imperativeInformal: Word('пожадничай', 3),
  imperativeFormal: Word('пожадничайте', 3),
  imperfect: [],
};

perfectVerbs.set(пожадничать.name.text, пожадничать);

export { пожадничать };