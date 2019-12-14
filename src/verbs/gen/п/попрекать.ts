import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const попрекать: PerfectVerb = {
  name: Word('попрекать', 6),
  singular1stPerson: Word('попрекаю', 6),
  singular2ndPerson: Word('попрекаешь', 6),
  singular3rdPerson: Word('попрекает', 6),
  plural1stPerson: Word('попрекаем', 6),
  plural2ndPerson: Word('попрекаете', 6),
  plural3rdPerson: Word('попрекают', 6),
  masculinePast: Word('попрекал', 6),
  femininePast: Word('попрекала', 6),
  neuterPast: Word('попрекало', 6),
  pluralPast: Word('попрекали', 6),
  imperativeInformal: Word('попрекай', 6),
  imperativeFormal: Word('попрекайте', 6),
  imperfect: ['попрекнуть'],
};

perfectVerbs.set(попрекать.name.text, попрекать);

export { попрекать };