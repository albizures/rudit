import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const измотать: PerfectVerb = {
  name: Word('измотать', 5),
  singular1stPerson: Word('измотаю', 5),
  singular2ndPerson: Word('измотаешь', 5),
  singular3rdPerson: Word('измотает', 5),
  plural1stPerson: Word('измотаем', 5),
  plural2ndPerson: Word('измотаете', 5),
  plural3rdPerson: Word('измотают', 5),
  masculinePast: Word('измотал', 5),
  femininePast: Word('измотала', 5),
  neuterPast: Word('измотало', 5),
  pluralPast: Word('измотали', 5),
  imperativeInformal: Word('измотай', 5),
  imperativeFormal: Word('измотайте', 5),
  imperfect: [],
};

perfectVerbs.set(измотать.name.text, измотать);

export { измотать };