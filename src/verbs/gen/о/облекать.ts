import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const облекать: PerfectVerb = {
  name: Word('облекать', 5),
  singular1stPerson: Word('облекаю', 5),
  singular2ndPerson: Word('облекаешь', 5),
  singular3rdPerson: Word('облекает', 5),
  plural1stPerson: Word('облекаем', 5),
  plural2ndPerson: Word('облекаете', 5),
  plural3rdPerson: Word('облекают', 5),
  masculinePast: Word('облекал', 5),
  femininePast: Word('облекала', 5),
  neuterPast: Word('облекало', 5),
  pluralPast: Word('облекали', 5),
  imperativeInformal: Word('облекай', 5),
  imperativeFormal: Word('облекайте', 5),
  imperfect: [],
};

perfectVerbs.set(облекать.name.text, облекать);

export { облекать };