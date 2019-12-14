import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отсекать: PerfectVerb = {
  name: Word('отсекать', 5),
  singular1stPerson: Word('отсекаю', 5),
  singular2ndPerson: Word('отсекаешь', 5),
  singular3rdPerson: Word('отсекает', 5),
  plural1stPerson: Word('отсекаем', 5),
  plural2ndPerson: Word('отсекаете', 5),
  plural3rdPerson: Word('отсекают', 5),
  masculinePast: Word('отсекал', 5),
  femininePast: Word('отсекала', 5),
  neuterPast: Word('отсекало', 5),
  pluralPast: Word('отсекали', 5),
  imperativeInformal: Word('отсекай', 5),
  imperativeFormal: Word('отсекайте', 5),
  imperfect: [],
};

perfectVerbs.set(отсекать.name.text, отсекать);

export { отсекать };