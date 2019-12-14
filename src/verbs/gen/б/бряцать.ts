import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бряцать: PerfectVerb = {
  name: Word('бряцать', 4),
  singular1stPerson: Word('бряцаю', 4),
  singular2ndPerson: Word('бряцаешь', 4),
  singular3rdPerson: Word('бряцает', 4),
  plural1stPerson: Word('бряцаем', 4),
  plural2ndPerson: Word('бряцаете', 4),
  plural3rdPerson: Word('бряцают', 4),
  masculinePast: Word('бряцал', 4),
  femininePast: Word('бряцала', 4),
  neuterPast: Word('бряцало', 4),
  pluralPast: Word('бряцали', 4),
  imperativeInformal: Word('бряцай', 4),
  imperativeFormal: Word('бряцайте', 4),
  imperfect: [],
};

perfectVerbs.set(бряцать.name.text, бряцать);

export { бряцать };