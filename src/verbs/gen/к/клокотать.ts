import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const клокотать: PerfectVerb = {
  name: Word('клокотать', 6),
  singular1stPerson: Word('клокочу', 6),
  singular2ndPerson: Word('клокочешь', 4),
  singular3rdPerson: Word('клокочет', 4),
  plural1stPerson: Word('клокочем', 4),
  plural2ndPerson: Word('клокочете', 4),
  plural3rdPerson: Word('клокочут', 4),
  masculinePast: Word('клокотал', 6),
  femininePast: Word('клокотала', 6),
  neuterPast: Word('клокотало', 6),
  pluralPast: Word('клокотали', 6),
  imperativeInformal: Word('клокочи', 6),
  imperativeFormal: Word('клокочите', 6),
  imperfect: [],
};

perfectVerbs.set(клокотать.name.text, клокотать);

export { клокотать };