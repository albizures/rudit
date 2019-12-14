import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взирать: PerfectVerb = {
  name: Word('взирать', 4),
  singular1stPerson: Word('взираю', 4),
  singular2ndPerson: Word('взираешь', 4),
  singular3rdPerson: Word('взирает', 4),
  plural1stPerson: Word('взираем', 4),
  plural2ndPerson: Word('взираете', 4),
  plural3rdPerson: Word('взирают', 4),
  masculinePast: Word('взирал', 4),
  femininePast: Word('взирала', 4),
  neuterPast: Word('взирало', 4),
  pluralPast: Word('взирали', 4),
  imperativeInformal: Word('взирай', 4),
  imperativeFormal: Word('взирайте', 4),
  imperfect: [],
};

perfectVerbs.set(взирать.name.text, взирать);

export { взирать };