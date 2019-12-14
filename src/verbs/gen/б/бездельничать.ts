import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бездельничать: PerfectVerb = {
  name: Word('бездельничать', 4),
  singular1stPerson: Word('бездельничаю', 4),
  singular2ndPerson: Word('бездельничаешь', 4),
  singular3rdPerson: Word('бездельничает', 4),
  plural1stPerson: Word('бездельничаем', 4),
  plural2ndPerson: Word('бездельничаете', 4),
  plural3rdPerson: Word('бездельничают', 4),
  masculinePast: Word('бездельничал', 4),
  femininePast: Word('бездельничала', 4),
  neuterPast: Word('бездельничало', 4),
  pluralPast: Word('бездельничали', 4),
  imperativeInformal: Word('бездельничай', 4),
  imperativeFormal: Word('бездельничайте', 4),
  imperfect: [],
};

perfectVerbs.set(бездельничать.name.text, бездельничать);

export { бездельничать };