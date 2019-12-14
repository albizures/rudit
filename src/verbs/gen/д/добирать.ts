import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const добирать: PerfectVerb = {
  name: Word('добирать', 5),
  singular1stPerson: Word('добираю', 5),
  singular2ndPerson: Word('добираешь', 5),
  singular3rdPerson: Word('добирает', 5),
  plural1stPerson: Word('добираем', 5),
  plural2ndPerson: Word('добираете', 5),
  plural3rdPerson: Word('добирают', 5),
  masculinePast: Word('добирал', 5),
  femininePast: Word('добирала', 5),
  neuterPast: Word('добирало', 5),
  pluralPast: Word('добирали', 5),
  imperativeInformal: Word('добирай', 5),
  imperativeFormal: Word('добирайте', 5),
  imperfect: [],
};

perfectVerbs.set(добирать.name.text, добирать);

export { добирать };