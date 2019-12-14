import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замирать: PerfectVerb = {
  name: Word('замирать', 5),
  singular1stPerson: Word('замираю', 5),
  singular2ndPerson: Word('замираешь', 5),
  singular3rdPerson: Word('замирает', 5),
  plural1stPerson: Word('замираем', 5),
  plural2ndPerson: Word('замираете', 5),
  plural3rdPerson: Word('замирают', 5),
  masculinePast: Word('замирал', 5),
  femininePast: Word('замирала', 5),
  neuterPast: Word('замирало', 5),
  pluralPast: Word('замирали', 5),
  imperativeInformal: Word('замирай', 5),
  imperativeFormal: Word('замирайте', 5),
  imperfect: ['замереть'],
};

perfectVerbs.set(замирать.name.text, замирать);

export { замирать };