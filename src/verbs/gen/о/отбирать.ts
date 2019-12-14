import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отбирать: PerfectVerb = {
  name: Word('отбирать', 5),
  singular1stPerson: Word('отбираю', 5),
  singular2ndPerson: Word('отбираешь', 5),
  singular3rdPerson: Word('отбирает', 5),
  plural1stPerson: Word('отбираем', 5),
  plural2ndPerson: Word('отбираете', 5),
  plural3rdPerson: Word('отбирают', 5),
  masculinePast: Word('отбирал', 5),
  femininePast: Word('отбирала', 5),
  neuterPast: Word('отбирало', 5),
  pluralPast: Word('отбирали', 5),
  imperativeInformal: Word('отбирай', 5),
  imperativeFormal: Word('отбирайте', 5),
  imperfect: [],
};

perfectVerbs.set(отбирать.name.text, отбирать);

export { отбирать };