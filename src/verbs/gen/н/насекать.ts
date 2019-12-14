import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const насекать: PerfectVerb = {
  name: Word('насекать', 5),
  singular1stPerson: Word('насекаю', 5),
  singular2ndPerson: Word('насекаешь', 5),
  singular3rdPerson: Word('насекает', 5),
  plural1stPerson: Word('насекаем', 5),
  plural2ndPerson: Word('насекаете', 5),
  plural3rdPerson: Word('насекают', 5),
  masculinePast: Word('насекал', 5),
  femininePast: Word('насекала', 5),
  neuterPast: Word('насекало', 5),
  pluralPast: Word('насекали', 5),
  imperativeInformal: Word('насекай', 5),
  imperativeFormal: Word('насекайте', 5),
  imperfect: [],
};

perfectVerbs.set(насекать.name.text, насекать);

export { насекать };