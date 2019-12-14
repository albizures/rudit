import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распекать: PerfectVerb = {
  name: Word('распекать', 6),
  singular1stPerson: Word('распекаю', 6),
  singular2ndPerson: Word('распекаешь', 6),
  singular3rdPerson: Word('распекает', 6),
  plural1stPerson: Word('распекаем', 6),
  plural2ndPerson: Word('распекаете', 6),
  plural3rdPerson: Word('распекают', 6),
  masculinePast: Word('распекал', 6),
  femininePast: Word('распекала', 6),
  neuterPast: Word('распекало', 6),
  pluralPast: Word('распекали', 6),
  imperativeInformal: Word('распекай', 6),
  imperativeFormal: Word('распекайте', 6),
  imperfect: [],
};

perfectVerbs.set(распекать.name.text, распекать);

export { распекать };