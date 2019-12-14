import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утирать: PerfectVerb = {
  name: Word('утирать', 4),
  singular1stPerson: Word('утираю', 4),
  singular2ndPerson: Word('утираешь', 4),
  singular3rdPerson: Word('утирает', 4),
  plural1stPerson: Word('утираем', 4),
  plural2ndPerson: Word('утираете', 4),
  plural3rdPerson: Word('утирают', 4),
  masculinePast: Word('утирал', 4),
  femininePast: Word('утирала', 4),
  neuterPast: Word('утирало', 4),
  pluralPast: Word('утирали', 4),
  imperativeInformal: Word('утирай', 4),
  imperativeFormal: Word('утирайте', 4),
  imperfect: [],
};

perfectVerbs.set(утирать.name.text, утирать);

export { утирать };