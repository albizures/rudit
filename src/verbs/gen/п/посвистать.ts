import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const посвистать: PerfectVerb = {
  name: Word('посвистать', 7),
  singular1stPerson: Word('посвищу', 6),
  singular2ndPerson: Word('посвищешь', 4),
  singular3rdPerson: Word('посвищет', 4),
  plural1stPerson: Word('посвищем', 4),
  plural2ndPerson: Word('посвищете', 4),
  plural3rdPerson: Word('посвищут', 4),
  masculinePast: Word('посвистал', 7),
  femininePast: Word('посвистала', 7),
  neuterPast: Word('посвистало', 7),
  pluralPast: Word('посвистали', 7),
  imperativeInformal: Word('посвищи', 6),
  imperativeFormal: Word('посвищите', 6),
  imperfect: [],
};

perfectVerbs.set(посвистать.name.text, посвистать);

export { посвистать };