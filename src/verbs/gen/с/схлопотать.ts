import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const схлопотать: PerfectVerb = {
  name: Word('схлопотать', 7),
  singular1stPerson: Word('схлопочу', 7),
  singular2ndPerson: Word('схлопочешь', 5),
  singular3rdPerson: Word('схлопочет', 5),
  plural1stPerson: Word('схлопочем', 5),
  plural2ndPerson: Word('схлопочете', 5),
  plural3rdPerson: Word('схлопочут', 5),
  masculinePast: Word('схлопотал', 7),
  femininePast: Word('схлопотала', 7),
  neuterPast: Word('схлопотало', 7),
  pluralPast: Word('схлопотали', 7),
  imperativeInformal: Word('схлопочи', 7),
  imperativeFormal: Word('схлопочите', 7),
  imperfect: [],
};

perfectVerbs.set(схлопотать.name.text, схлопотать);

export { схлопотать };