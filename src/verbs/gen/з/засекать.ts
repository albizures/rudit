import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const засекать: PerfectVerb = {
  name: Word('засекать', 5),
  singular1stPerson: Word('засекаю', 5),
  singular2ndPerson: Word('засекаешь', 5),
  singular3rdPerson: Word('засекает', 5),
  plural1stPerson: Word('засекаем', 5),
  plural2ndPerson: Word('засекаете', 5),
  plural3rdPerson: Word('засекают', 5),
  masculinePast: Word('засекал', 5),
  femininePast: Word('засекала', 5),
  neuterPast: Word('засекало', 5),
  pluralPast: Word('засекали', 5),
  imperativeInformal: Word('засекай', 5),
  imperativeFormal: Word('засекайте', 5),
  imperfect: [],
};

perfectVerbs.set(засекать.name.text, засекать);

export { засекать };