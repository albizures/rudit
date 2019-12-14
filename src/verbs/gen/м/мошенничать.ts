import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мошенничать: PerfectVerb = {
  name: Word('мошенничать', 3),
  singular1stPerson: Word('мошенничаю', 3),
  singular2ndPerson: Word('мошенничаешь', 3),
  singular3rdPerson: Word('мошенничает', 3),
  plural1stPerson: Word('мошенничаем', 3),
  plural2ndPerson: Word('мошенничаете', 3),
  plural3rdPerson: Word('мошенничают', 3),
  masculinePast: Word('мошенничал', 3),
  femininePast: Word('мошенничала', 3),
  neuterPast: Word('мошенничало', 3),
  pluralPast: Word('мошенничали', 3),
  imperativeInformal: Word('мошенничай', 3),
  imperativeFormal: Word('мошенничайте', 3),
  imperfect: [],
};

perfectVerbs.set(мошенничать.name.text, мошенничать);

export { мошенничать };