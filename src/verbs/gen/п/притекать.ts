import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const притекать: PerfectVerb = {
  name: Word('притекать', 6),
  singular1stPerson: Word('притекаю', 6),
  singular2ndPerson: Word('притекаешь', 6),
  singular3rdPerson: Word('притекает', 6),
  plural1stPerson: Word('притекаем', 6),
  plural2ndPerson: Word('притекаете', 6),
  plural3rdPerson: Word('притекают', 6),
  masculinePast: Word('притекал', 6),
  femininePast: Word('притекала', 6),
  neuterPast: Word('притекало', 6),
  pluralPast: Word('притекали', 6),
  imperativeInformal: Word('притекай', 6),
  imperativeFormal: Word('притекайте', 6),
  imperfect: [],
};

perfectVerbs.set(притекать.name.text, притекать);

export { притекать };