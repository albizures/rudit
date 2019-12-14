import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const щебетать: PerfectVerb = {
  name: Word('щебетать', 5),
  singular1stPerson: Word('щебечу', 5),
  singular2ndPerson: Word('щебечешь', 3),
  singular3rdPerson: Word('щебечет', 3),
  plural1stPerson: Word('щебечем', 3),
  plural2ndPerson: Word('щебечете', 3),
  plural3rdPerson: Word('щебечут', 3),
  masculinePast: Word('щебетал', 5),
  femininePast: Word('щебетала', 5),
  neuterPast: Word('щебетало', 5),
  pluralPast: Word('щебетали', 5),
  imperativeInformal: Word('щебечи', 5),
  imperativeFormal: Word('щебечите', 5),
  imperfect: [],
};

perfectVerbs.set(щебетать.name.text, щебетать);

export { щебетать };