import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сотрудничать: PerfectVerb = {
  name: Word('сотрудничать', 4),
  singular1stPerson: Word('сотрудничаю', 4),
  singular2ndPerson: Word('сотрудничаешь', 4),
  singular3rdPerson: Word('сотрудничает', 4),
  plural1stPerson: Word('сотрудничаем', 4),
  plural2ndPerson: Word('сотрудничаете', 4),
  plural3rdPerson: Word('сотрудничают', 4),
  masculinePast: Word('сотрудничал', 4),
  femininePast: Word('сотрудничала', 4),
  neuterPast: Word('сотрудничало', 4),
  pluralPast: Word('сотрудничали', 4),
  imperativeInformal: Word('сотрудничай', 4),
  imperativeFormal: Word('сотрудничайте', 4),
  imperfect: [],
};

perfectVerbs.set(сотрудничать.name.text, сотрудничать);

export { сотрудничать };