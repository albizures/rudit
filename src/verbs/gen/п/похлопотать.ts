import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const похлопотать: PerfectVerb = {
  name: Word('похлопотать', 8),
  singular1stPerson: Word('похлопочу', 8),
  singular2ndPerson: Word('похлопочешь', 6),
  singular3rdPerson: Word('похлопочет', 6),
  plural1stPerson: Word('похлопочем', 6),
  plural2ndPerson: Word('похлопочете', 6),
  plural3rdPerson: Word('похлопочут', 6),
  masculinePast: Word('похлопотал', 8),
  femininePast: Word('похлопотала', 8),
  neuterPast: Word('похлопотало', 8),
  pluralPast: Word('похлопотали', 8),
  imperativeInformal: Word('похлопочи', 8),
  imperativeFormal: Word('похлопочите', 8),
  imperfect: [],
};

perfectVerbs.set(похлопотать.name.text, похлопотать);

export { похлопотать };