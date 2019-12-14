import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const истекать: PerfectVerb = {
  name: Word('истекать', 5),
  singular1stPerson: Word('истекаю', 5),
  singular2ndPerson: Word('истекаешь', 5),
  singular3rdPerson: Word('истекает', 5),
  plural1stPerson: Word('истекаем', 5),
  plural2ndPerson: Word('истекаете', 5),
  plural3rdPerson: Word('истекают', 5),
  masculinePast: Word('истекал', 5),
  femininePast: Word('истекала', 5),
  neuterPast: Word('истекало', 5),
  pluralPast: Word('истекали', 5),
  imperativeInformal: Word('истекай', 5),
  imperativeFormal: Word('истекайте', 5),
  imperfect: [],
};

perfectVerbs.set(истекать.name.text, истекать);

export { истекать };