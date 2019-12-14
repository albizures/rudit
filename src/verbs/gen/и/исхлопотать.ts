import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const исхлопотать: PerfectVerb = {
  name: Word('исхлопотать', 8),
  singular1stPerson: Word('исхлопочу', 8),
  singular2ndPerson: Word('исхлопочешь', 6),
  singular3rdPerson: Word('исхлопочет', 6),
  plural1stPerson: Word('исхлопочем', 6),
  plural2ndPerson: Word('исхлопочете', 6),
  plural3rdPerson: Word('исхлопочут', 6),
  masculinePast: Word('исхлопотал', 8),
  femininePast: Word('исхлопотала', 8),
  neuterPast: Word('исхлопотало', 8),
  pluralPast: Word('исхлопотали', 8),
  imperativeInformal: Word('исхлопочи', 8),
  imperativeFormal: Word('исхлопочите', 8),
  imperfect: [],
};

perfectVerbs.set(исхлопотать.name.text, исхлопотать);

export { исхлопотать };