import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спекать: PerfectVerb = {
  name: Word('спекать', 4),
  singular1stPerson: Word('спекаю', 4),
  singular2ndPerson: Word('спекаешь', 4),
  singular3rdPerson: Word('спекает', 4),
  plural1stPerson: Word('спекаем', 4),
  plural2ndPerson: Word('спекаете', 4),
  plural3rdPerson: Word('спекают', 4),
  masculinePast: Word('спекал', 4),
  femininePast: Word('спекала', 4),
  neuterPast: Word('спекало', 4),
  pluralPast: Word('спекали', 4),
  imperativeInformal: Word('спекай', 4),
  imperativeFormal: Word('спекайте', 4),
  imperfect: [],
};

perfectVerbs.set(спекать.name.text, спекать);

export { спекать };