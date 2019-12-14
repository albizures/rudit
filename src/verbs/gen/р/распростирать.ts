import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распростирать: PerfectVerb = {
  name: Word('распростирать', 10),
  singular1stPerson: Word('распростираю', 10),
  singular2ndPerson: Word('распростираешь', 10),
  singular3rdPerson: Word('распростирает', 10),
  plural1stPerson: Word('распростираем', 10),
  plural2ndPerson: Word('распростираете', 10),
  plural3rdPerson: Word('распростирают', 10),
  masculinePast: Word('распростирал', 10),
  femininePast: Word('распростирала', 10),
  neuterPast: Word('распростирало', 10),
  pluralPast: Word('распростирали', 10),
  imperativeInformal: Word('распростирай', 10),
  imperativeFormal: Word('распростирайте', 10),
  imperfect: [],
};

perfectVerbs.set(распростирать.name.text, распростирать);

export { распростирать };