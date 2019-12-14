import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const залопотать: PerfectVerb = {
  name: Word('залопотать', 7),
  singular1stPerson: Word('залопочу', 7),
  singular2ndPerson: Word('залопочешь', 5),
  singular3rdPerson: Word('залопочет', 5),
  plural1stPerson: Word('залопочем', 5),
  plural2ndPerson: Word('залопочете', 5),
  plural3rdPerson: Word('залопочут', 5),
  masculinePast: Word('залопотал', 7),
  femininePast: Word('залопотала', 7),
  neuterPast: Word('залопотало', 7),
  pluralPast: Word('залопотали', 7),
  imperativeInformal: Word('залопочи', 7),
  imperativeFormal: Word('залопочите', 7),
  imperfect: [],
};

perfectVerbs.set(залопотать.name.text, залопотать);

export { залопотать };