import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поискать: PerfectVerb = {
  name: Word('поискать', 5),
  singular1stPerson: Word('поищу', 4),
  singular2ndPerson: Word('поищешь', 2),
  singular3rdPerson: Word('поищет', 2),
  plural1stPerson: Word('поищем', 2),
  plural2ndPerson: Word('поищете', 2),
  plural3rdPerson: Word('поищут', 2),
  masculinePast: Word('поискал', 5),
  femininePast: Word('поискала', 5),
  neuterPast: Word('поискало', 5),
  pluralPast: Word('поискали', 5),
  imperativeInformal: Word('поищи', 4),
  imperativeFormal: Word('поищите', 4),
  imperfect: [],
};

perfectVerbs.set(поискать.name.text, поискать);

export { поискать };