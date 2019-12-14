import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const праздновать: PerfectVerb = {
  name: Word('праздновать', 2),
  singular1stPerson: Word('праздную', 2),
  singular2ndPerson: Word('празднуешь', 2),
  singular3rdPerson: Word('празднует', 2),
  plural1stPerson: Word('празднуем', 2),
  plural2ndPerson: Word('празднуете', 2),
  plural3rdPerson: Word('празднуют', 2),
  masculinePast: Word('праздновал', 2),
  femininePast: Word('праздновала', 2),
  neuterPast: Word('праздновало', 2),
  pluralPast: Word('праздновали', 2),
  imperativeInformal: Word('празднуй', 2),
  imperativeFormal: Word('празднуйте', 2),
  imperfect: [],
};

perfectVerbs.set(праздновать.name.text, праздновать);

export { праздновать };