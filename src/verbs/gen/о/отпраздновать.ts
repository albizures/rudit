import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отпраздновать: PerfectVerb = {
  name: Word('отпраздновать', 4),
  singular1stPerson: Word('отпраздную', 4),
  singular2ndPerson: Word('отпразднуешь', 4),
  singular3rdPerson: Word('отпразднует', 4),
  plural1stPerson: Word('отпразднуем', 4),
  plural2ndPerson: Word('отпразднуете', 4),
  plural3rdPerson: Word('отпразднуют', 4),
  masculinePast: Word('отпраздновал', 4),
  femininePast: Word('отпраздновала', 4),
  neuterPast: Word('отпраздновало', 4),
  pluralPast: Word('отпраздновали', 4),
  imperativeInformal: Word('отпразднуй', 4),
  imperativeFormal: Word('отпразднуйте', 4),
  imperfect: [],
};

perfectVerbs.set(отпраздновать.name.text, отпраздновать);

export { отпраздновать };