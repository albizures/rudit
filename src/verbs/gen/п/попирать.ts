import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const попирать: PerfectVerb = {
  name: Word('попирать', 5),
  singular1stPerson: Word('попираю', 5),
  singular2ndPerson: Word('попираешь', 5),
  singular3rdPerson: Word('попирает', 5),
  plural1stPerson: Word('попираем', 5),
  plural2ndPerson: Word('попираете', 5),
  plural3rdPerson: Word('попирают', 5),
  masculinePast: Word('попирал', 5),
  femininePast: Word('попирала', 5),
  neuterPast: Word('попирало', 5),
  pluralPast: Word('попирали', 5),
  imperativeInformal: Word('попирай', 5),
  imperativeFormal: Word('попирайте', 5),
  imperfect: [],
};

perfectVerbs.set(попирать.name.text, попирать);

export { попирать };