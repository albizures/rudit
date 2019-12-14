import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выторговать: PerfectVerb = {
  name: Word('выторговать', 1),
  singular1stPerson: Word('выторгую', 1),
  singular2ndPerson: Word('выторгуешь', 1),
  singular3rdPerson: Word('выторгует', 1),
  plural1stPerson: Word('выторгуем', 1),
  plural2ndPerson: Word('выторгуете', 1),
  plural3rdPerson: Word('выторгуют', 1),
  masculinePast: Word('выторговал', 1),
  femininePast: Word('выторговала', 1),
  neuterPast: Word('выторговало', 1),
  pluralPast: Word('выторговали', 1),
  imperativeInformal: Word('выторгуй', 1),
  imperativeFormal: Word('выторгуйте', 1),
  imperfect: [],
};

perfectVerbs.set(выторговать.name.text, выторговать);

export { выторговать };