import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изрекать: PerfectVerb = {
  name: Word('изрекать', 5),
  singular1stPerson: Word('изрекаю', 5),
  singular2ndPerson: Word('изрекаешь', 5),
  singular3rdPerson: Word('изрекает', 5),
  plural1stPerson: Word('изрекаем', 5),
  plural2ndPerson: Word('изрекаете', 5),
  plural3rdPerson: Word('изрекают', 5),
  masculinePast: Word('изрекал', 5),
  femininePast: Word('изрекала', 5),
  neuterPast: Word('изрекало', 5),
  pluralPast: Word('изрекали', 5),
  imperativeInformal: Word('изрекай', 5),
  imperativeFormal: Word('изрекайте', 5),
  imperfect: ['изречь'],
};

perfectVerbs.set(изрекать.name.text, изрекать);

export { изрекать };