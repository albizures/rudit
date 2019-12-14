import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const соперничать: PerfectVerb = {
  name: Word('соперничать', 3),
  singular1stPerson: Word('соперничаю', 3),
  singular2ndPerson: Word('соперничаешь', 3),
  singular3rdPerson: Word('соперничает', 3),
  plural1stPerson: Word('соперничаем', 3),
  plural2ndPerson: Word('соперничаете', 3),
  plural3rdPerson: Word('соперничают', 3),
  masculinePast: Word('соперничал', 3),
  femininePast: Word('соперничала', 3),
  neuterPast: Word('соперничало', 3),
  pluralPast: Word('соперничали', 3),
  imperativeInformal: Word('соперничай', 3),
  imperativeFormal: Word('соперничайте', 3),
  imperfect: [],
};

perfectVerbs.set(соперничать.name.text, соперничать);

export { соперничать };