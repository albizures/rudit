import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отирать: PerfectVerb = {
  name: Word('отирать', 4),
  singular1stPerson: Word('отираю', 4),
  singular2ndPerson: Word('отираешь', 4),
  singular3rdPerson: Word('отирает', 4),
  plural1stPerson: Word('отираем', 4),
  plural2ndPerson: Word('отираете', 4),
  plural3rdPerson: Word('отирают', 4),
  masculinePast: Word('отирал', 4),
  femininePast: Word('отирала', 4),
  neuterPast: Word('отирало', 4),
  pluralPast: Word('отирали', 4),
  imperativeInformal: Word('отирай', 4),
  imperativeFormal: Word('отирайте', 4),
  imperfect: [],
};

perfectVerbs.set(отирать.name.text, отирать);

export { отирать };