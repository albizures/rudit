import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const продирать: PerfectVerb = {
  name: Word('продирать', 6),
  singular1stPerson: Word('продираю', 6),
  singular2ndPerson: Word('продираешь', 6),
  singular3rdPerson: Word('продирает', 6),
  plural1stPerson: Word('продираем', 6),
  plural2ndPerson: Word('продираете', 6),
  plural3rdPerson: Word('продирают', 6),
  masculinePast: Word('продирал', 6),
  femininePast: Word('продирала', 6),
  neuterPast: Word('продирало', 6),
  pluralPast: Word('продирали', 6),
  imperativeInformal: Word('продирай', 6),
  imperativeFormal: Word('продирайте', 6),
  imperfect: [],
};

perfectVerbs.set(продирать.name.text, продирать);

export { продирать };