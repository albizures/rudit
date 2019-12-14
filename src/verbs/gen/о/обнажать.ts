import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обнажать: PerfectVerb = {
  name: Word('обнажать', 5),
  singular1stPerson: Word('обнажаю', 5),
  singular2ndPerson: Word('обнажаешь', 5),
  singular3rdPerson: Word('обнажает', 5),
  plural1stPerson: Word('обнажаем', 5),
  plural2ndPerson: Word('обнажаете', 5),
  plural3rdPerson: Word('обнажают', 5),
  masculinePast: Word('обнажал', 5),
  femininePast: Word('обнажала', 5),
  neuterPast: Word('обнажало', 5),
  pluralPast: Word('обнажали', 5),
  imperativeInformal: Word('обнажай', 5),
  imperativeFormal: Word('обнажайте', 5),
  imperfect: [],
};

perfectVerbs.set(обнажать.name.text, обнажать);

export { обнажать };