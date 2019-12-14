import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отекать: PerfectVerb = {
  name: Word('отекать', 4),
  singular1stPerson: Word('отекаю', 4),
  singular2ndPerson: Word('отекаешь', 4),
  singular3rdPerson: Word('отекает', 4),
  plural1stPerson: Word('отекаем', 4),
  plural2ndPerson: Word('отекаете', 4),
  plural3rdPerson: Word('отекают', 4),
  masculinePast: Word('отекал', 4),
  femininePast: Word('отекала', 4),
  neuterPast: Word('отекало', 4),
  pluralPast: Word('отекали', 4),
  imperativeInformal: Word('отекай', 4),
  imperativeFormal: Word('отекайте', 4),
  imperfect: [],
};

perfectVerbs.set(отекать.name.text, отекать);

export { отекать };