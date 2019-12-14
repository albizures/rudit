import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затирать: PerfectVerb = {
  name: Word('затирать', 5),
  singular1stPerson: Word('затираю', 5),
  singular2ndPerson: Word('затираешь', 5),
  singular3rdPerson: Word('затирает', 5),
  plural1stPerson: Word('затираем', 5),
  plural2ndPerson: Word('затираете', 5),
  plural3rdPerson: Word('затирают', 5),
  masculinePast: Word('затирал', 5),
  femininePast: Word('затирала', 5),
  neuterPast: Word('затирало', 5),
  pluralPast: Word('затирали', 5),
  imperativeInformal: Word('затирай', 5),
  imperativeFormal: Word('затирайте', 5),
  imperfect: [],
};

perfectVerbs.set(затирать.name.text, затирать);

export { затирать };