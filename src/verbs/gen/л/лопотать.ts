import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лопотать: PerfectVerb = {
  name: Word('лопотать', 5),
  singular1stPerson: Word('лопочу', 5),
  singular2ndPerson: Word('лопочешь', 3),
  singular3rdPerson: Word('лопочет', 3),
  plural1stPerson: Word('лопочем', 3),
  plural2ndPerson: Word('лопочете', 3),
  plural3rdPerson: Word('лопочут', 3),
  masculinePast: Word('лопотал', 5),
  femininePast: Word('лопотала', 5),
  neuterPast: Word('лопотало', 5),
  pluralPast: Word('лопотали', 5),
  imperativeInformal: Word('лопочи', 5),
  imperativeFormal: Word('лопочите', 5),
  imperfect: [],
};

perfectVerbs.set(лопотать.name.text, лопотать);

export { лопотать };