import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const израсходовать: PerfectVerb = {
  name: Word('израсходовать', 6),
  singular1stPerson: Word('израсходую', 6),
  singular2ndPerson: Word('израсходуешь', 6),
  singular3rdPerson: Word('израсходует', 6),
  plural1stPerson: Word('израсходуем', 6),
  plural2ndPerson: Word('израсходуете', 6),
  plural3rdPerson: Word('израсходуют', 6),
  masculinePast: Word('израсходовал', 6),
  femininePast: Word('израсходовала', 6),
  neuterPast: Word('израсходовало', 6),
  pluralPast: Word('израсходовали', 6),
  imperativeInformal: Word('израсходуй', 6),
  imperativeFormal: Word('израсходуйте', 6),
  imperfect: [],
};

perfectVerbs.set(израсходовать.name.text, израсходовать);

export { израсходовать };