import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выпекать: PerfectVerb = {
  name: Word('выпекать', 5),
  singular1stPerson: Word('выпекаю', 5),
  singular2ndPerson: Word('выпекаешь', 5),
  singular3rdPerson: Word('выпекает', 5),
  plural1stPerson: Word('выпекаем', 5),
  plural2ndPerson: Word('выпекаете', 5),
  plural3rdPerson: Word('выпекают', 5),
  masculinePast: Word('выпекал', 5),
  femininePast: Word('выпекала', 5),
  neuterPast: Word('выпекало', 5),
  pluralPast: Word('выпекали', 5),
  imperativeInformal: Word('выпекай', 5),
  imperativeFormal: Word('выпекайте', 5),
  imperfect: [],
};

perfectVerbs.set(выпекать.name.text, выпекать);

export { выпекать };