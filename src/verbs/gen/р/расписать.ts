import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расписать: PerfectVerb = {
  name: Word('расписать', 6),
  singular1stPerson: Word('распишу', 6),
  singular2ndPerson: Word('распишешь', 4),
  singular3rdPerson: Word('распишет', 4),
  plural1stPerson: Word('распишем', 4),
  plural2ndPerson: Word('распишете', 4),
  plural3rdPerson: Word('распишут', 4),
  masculinePast: Word('расписал', 6),
  femininePast: Word('расписала', 6),
  neuterPast: Word('расписало', 6),
  pluralPast: Word('расписали', 6),
  imperativeInformal: Word('распиши', 6),
  imperativeFormal: Word('распишите', 6),
  imperfect: [],
};

perfectVerbs.set(расписать.name.text, расписать);

export { расписать };