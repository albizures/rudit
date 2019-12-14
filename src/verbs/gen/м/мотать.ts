import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мотать: PerfectVerb = {
  name: Word('мотать', 3),
  singular1stPerson: Word('мотаю', 3),
  singular2ndPerson: Word('мотаешь', 3),
  singular3rdPerson: Word('мотает', 3),
  plural1stPerson: Word('мотаем', 3),
  plural2ndPerson: Word('мотаете', 3),
  plural3rdPerson: Word('мотают', 3),
  masculinePast: Word('мотал', 3),
  femininePast: Word('мотала', 3),
  neuterPast: Word('мотало', 3),
  pluralPast: Word('мотали', 3),
  imperativeInformal: Word('мотай', 3),
  imperativeFormal: Word('мотайте', 3),
  imperfect: [],
};

perfectVerbs.set(мотать.name.text, мотать);

export { мотать };