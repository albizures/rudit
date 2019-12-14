import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отпирать: PerfectVerb = {
  name: Word('отпирать', 5),
  singular1stPerson: Word('отпираю', 5),
  singular2ndPerson: Word('отпираешь', 5),
  singular3rdPerson: Word('отпирает', 5),
  plural1stPerson: Word('отпираем', 5),
  plural2ndPerson: Word('отпираете', 5),
  plural3rdPerson: Word('отпирают', 5),
  masculinePast: Word('отпирал', 5),
  femininePast: Word('отпирала', 5),
  neuterPast: Word('отпирало', 5),
  pluralPast: Word('отпирали', 5),
  imperativeInformal: Word('отпирай', 5),
  imperativeFormal: Word('отпирайте', 5),
  imperfect: [],
};

perfectVerbs.set(отпирать.name.text, отпирать);

export { отпирать };