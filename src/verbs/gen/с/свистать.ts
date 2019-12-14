import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const свистать: PerfectVerb = {
  name: Word('свистать', 5),
  singular1stPerson: Word('свищу', 4),
  singular2ndPerson: Word('свищешь', 2),
  singular3rdPerson: Word('свищет', 2),
  plural1stPerson: Word('свищем', 2),
  plural2ndPerson: Word('свищете', 2),
  plural3rdPerson: Word('свищут', 2),
  masculinePast: Word('свистал', 5),
  femininePast: Word('свистала', 5),
  neuterPast: Word('свистало', 5),
  pluralPast: Word('свистали', 5),
  imperativeInformal: Word('свищи', 4),
  imperativeFormal: Word('свищите', 4),
  imperfect: [],
};

perfectVerbs.set(свистать.name.text, свистать);

export { свистать };