import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const упирать: PerfectVerb = {
  name: Word('упирать', 4),
  singular1stPerson: Word('упираю', 4),
  singular2ndPerson: Word('упираешь', 4),
  singular3rdPerson: Word('упирает', 4),
  plural1stPerson: Word('упираем', 4),
  plural2ndPerson: Word('упираете', 4),
  plural3rdPerson: Word('упирают', 4),
  masculinePast: Word('упирал', 4),
  femininePast: Word('упирала', 4),
  neuterPast: Word('упирало', 4),
  pluralPast: Word('упирали', 4),
  imperativeInformal: Word('упирай', 4),
  imperativeFormal: Word('упирайте', 4),
  imperfect: [],
};

perfectVerbs.set(упирать.name.text, упирать);

export { упирать };