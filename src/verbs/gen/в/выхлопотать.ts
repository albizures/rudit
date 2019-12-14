import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выхлопотать: PerfectVerb = {
  name: Word('выхлопотать', 1),
  singular1stPerson: Word('выхлопочу', 1),
  singular2ndPerson: Word('выхлопочешь', 1),
  singular3rdPerson: Word('выхлопочет', 1),
  plural1stPerson: Word('выхлопочем', 1),
  plural2ndPerson: Word('выхлопочете', 1),
  plural3rdPerson: Word('выхлопочут', 1),
  masculinePast: Word('выхлопотал', 1),
  femininePast: Word('выхлопотала', 1),
  neuterPast: Word('выхлопотало', 1),
  pluralPast: Word('выхлопотали', 1),
  imperativeInformal: Word('выхлопочи', 1),
  imperativeFormal: Word('выхлопочите', 1),
  imperfect: [],
};

perfectVerbs.set(выхлопотать.name.text, выхлопотать);

export { выхлопотать };