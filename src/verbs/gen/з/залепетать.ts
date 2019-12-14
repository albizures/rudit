import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const залепетать: PerfectVerb = {
  name: Word('залепетать', 7),
  singular1stPerson: Word('залепечу', 7),
  singular2ndPerson: Word('залепечешь', 5),
  singular3rdPerson: Word('залепечет', 5),
  plural1stPerson: Word('залепечем', 5),
  plural2ndPerson: Word('залепечете', 5),
  plural3rdPerson: Word('залепечут', 5),
  masculinePast: Word('залепетал', 7),
  femininePast: Word('залепетала', 7),
  neuterPast: Word('залепетало', 7),
  pluralPast: Word('залепетали', 7),
  imperativeInformal: Word('залепечи', 7),
  imperativeFormal: Word('залепечите', 7),
  imperfect: [],
};

perfectVerbs.set(залепетать.name.text, залепетать);

export { залепетать };