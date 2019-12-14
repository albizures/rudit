import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замотать: PerfectVerb = {
  name: Word('замотать', 5),
  singular1stPerson: Word('замотаю', 5),
  singular2ndPerson: Word('замотаешь', 5),
  singular3rdPerson: Word('замотает', 5),
  plural1stPerson: Word('замотаем', 5),
  plural2ndPerson: Word('замотаете', 5),
  plural3rdPerson: Word('замотают', 5),
  masculinePast: Word('замотал', 5),
  femininePast: Word('замотала', 5),
  neuterPast: Word('замотало', 5),
  pluralPast: Word('замотали', 5),
  imperativeInformal: Word('замотай', 5),
  imperativeFormal: Word('замотайте', 5),
  imperfect: [],
};

perfectVerbs.set(замотать.name.text, замотать);

export { замотать };