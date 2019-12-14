import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замариновать: PerfectVerb = {
  name: Word('замариновать', 9),
  singular1stPerson: Word('замариную', 7),
  singular2ndPerson: Word('замаринуешь', 7),
  singular3rdPerson: Word('замаринует', 7),
  plural1stPerson: Word('замаринуем', 7),
  plural2ndPerson: Word('замаринуете', 7),
  plural3rdPerson: Word('замаринуют', 7),
  masculinePast: Word('замариновал', 9),
  femininePast: Word('замариновала', 9),
  neuterPast: Word('замариновало', 9),
  pluralPast: Word('замариновали', 9),
  imperativeInformal: Word('замаринуй', 7),
  imperativeFormal: Word('замаринуйте', 7),
  imperfect: [],
};

perfectVerbs.set(замариновать.name.text, замариновать);

export { замариновать };