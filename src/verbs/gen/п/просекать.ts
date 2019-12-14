import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const просекать: PerfectVerb = {
  name: Word('просекать', 6),
  singular1stPerson: Word('просекаю', 6),
  singular2ndPerson: Word('просекаешь', 6),
  singular3rdPerson: Word('просекает', 6),
  plural1stPerson: Word('просекаем', 6),
  plural2ndPerson: Word('просекаете', 6),
  plural3rdPerson: Word('просекают', 6),
  masculinePast: Word('просекал', 6),
  femininePast: Word('просекала', 6),
  neuterPast: Word('просекало', 6),
  pluralPast: Word('просекали', 6),
  imperativeInformal: Word('просекай', 6),
  imperativeFormal: Word('просекайте', 6),
  imperfect: [],
};

perfectVerbs.set(просекать.name.text, просекать);

export { просекать };