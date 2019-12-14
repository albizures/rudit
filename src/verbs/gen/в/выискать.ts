import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выискать: PerfectVerb = {
  name: Word('выискать', 1),
  singular1stPerson: Word('выищу', 4),
  singular2ndPerson: Word('выищешь', 2),
  singular3rdPerson: Word('выищет', 2),
  plural1stPerson: Word('выищем', 2),
  plural2ndPerson: Word('выищете', 2),
  plural3rdPerson: Word('выищут', 2),
  masculinePast: Word('выискал', 1),
  femininePast: Word('выискала', 1),
  neuterPast: Word('выискало', 1),
  pluralPast: Word('выискали', 1),
  imperativeInformal: Word('выищи', 4),
  imperativeFormal: Word('выищите', 4),
  imperfect: [],
};

perfectVerbs.set(выискать.name.text, выискать);

export { выискать };