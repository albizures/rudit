import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const топотать: PerfectVerb = {
  name: Word('топотать', 5),
  singular1stPerson: Word('топочу', 5),
  singular2ndPerson: Word('топочешь', 3),
  singular3rdPerson: Word('топочет', 3),
  plural1stPerson: Word('топочем', 3),
  plural2ndPerson: Word('топочете', 3),
  plural3rdPerson: Word('топочут', 3),
  masculinePast: Word('топотал', 5),
  femininePast: Word('топотала', 5),
  neuterPast: Word('топотало', 5),
  pluralPast: Word('топотали', 5),
  imperativeInformal: Word('топочи', 5),
  imperativeFormal: Word('топочите', 5),
  imperfect: [],
};

perfectVerbs.set(топотать.name.text, топотать);

export { топотать };