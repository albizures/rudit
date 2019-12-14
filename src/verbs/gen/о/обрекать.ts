import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обрекать: PerfectVerb = {
  name: Word('обрекать', 5),
  singular1stPerson: Word('обрекаю', 5),
  singular2ndPerson: Word('обрекаешь', 5),
  singular3rdPerson: Word('обрекает', 5),
  plural1stPerson: Word('обрекаем', 5),
  plural2ndPerson: Word('обрекаете', 5),
  plural3rdPerson: Word('обрекают', 5),
  masculinePast: Word('обрекал', 5),
  femininePast: Word('обрекала', 5),
  neuterPast: Word('обрекало', 5),
  pluralPast: Word('обрекали', 5),
  imperativeInformal: Word('обрекай', 5),
  imperativeFormal: Word('обрекайте', 5),
  imperfect: ['[[обречь'],
};

perfectVerbs.set(обрекать.name.text, обрекать);

export { обрекать };