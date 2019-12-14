import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const натирать: PerfectVerb = {
  name: Word('натирать', 5),
  singular1stPerson: Word('натираю', 5),
  singular2ndPerson: Word('натираешь', 5),
  singular3rdPerson: Word('натирает', 5),
  plural1stPerson: Word('натираем', 5),
  plural2ndPerson: Word('натираете', 5),
  plural3rdPerson: Word('натирают', 5),
  masculinePast: Word('натирал', 5),
  femininePast: Word('натирала', 5),
  neuterPast: Word('натирало', 5),
  pluralPast: Word('натирали', 5),
  imperativeInformal: Word('натирай', 5),
  imperativeFormal: Word('натирайте', 5),
  imperfect: [],
};

perfectVerbs.set(натирать.name.text, натирать);

export { натирать };