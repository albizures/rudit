import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const захлопотать: PerfectVerb = {
  name: Word('захлопотать', 8),
  singular1stPerson: Word('захлопочу', 8),
  singular2ndPerson: Word('захлопочешь', 6),
  singular3rdPerson: Word('захлопочет', 6),
  plural1stPerson: Word('захлопочем', 6),
  plural2ndPerson: Word('захлопочете', 6),
  plural3rdPerson: Word('захлопочут', 6),
  masculinePast: Word('захлопотал', 8),
  femininePast: Word('захлопотала', 8),
  neuterPast: Word('захлопотало', 8),
  pluralPast: Word('захлопотали', 8),
  imperativeInformal: Word('захлопочи', 8),
  imperativeFormal: Word('захлопочите', 8),
  imperfect: [],
};

perfectVerbs.set(захлопотать.name.text, захлопотать);

export { захлопотать };