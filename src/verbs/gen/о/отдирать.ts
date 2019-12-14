import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отдирать: PerfectVerb = {
  name: Word('отдирать', 5),
  singular1stPerson: Word('отдираю', 5),
  singular2ndPerson: Word('отдираешь', 5),
  singular3rdPerson: Word('отдирает', 5),
  plural1stPerson: Word('отдираем', 5),
  plural2ndPerson: Word('отдираете', 5),
  plural3rdPerson: Word('отдирают', 5),
  masculinePast: Word('отдирал', 5),
  femininePast: Word('отдирала', 5),
  neuterPast: Word('отдирало', 5),
  pluralPast: Word('отдирали', 5),
  imperativeInformal: Word('отдирай', 5),
  imperativeFormal: Word('отдирайте', 5),
  imperfect: [],
};

perfectVerbs.set(отдирать.name.text, отдирать);

export { отдирать };