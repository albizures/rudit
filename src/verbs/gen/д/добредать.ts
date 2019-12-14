import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const добредать: PerfectVerb = {
  name: Word('добредать', 6),
  singular1stPerson: Word('добредаю', 6),
  singular2ndPerson: Word('добредаешь', 6),
  singular3rdPerson: Word('добредает', 6),
  plural1stPerson: Word('добредаем', 6),
  plural2ndPerson: Word('добредаете', 6),
  plural3rdPerson: Word('добредают', 6),
  masculinePast: Word('добредал', 6),
  femininePast: Word('добредала', 6),
  neuterPast: Word('добредало', 6),
  pluralPast: Word('добредали', 6),
  imperativeInformal: Word('добредай', 6),
  imperativeFormal: Word('добредайте', 6),
  imperfect: [],
};

perfectVerbs.set(добредать.name.text, добредать);

export { добредать };