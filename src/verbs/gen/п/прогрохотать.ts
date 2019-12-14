import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прогрохотать: PerfectVerb = {
  name: Word('прогрохотать', 9),
  singular1stPerson: Word('прогрохочу', 9),
  singular2ndPerson: Word('прогрохочешь', 7),
  singular3rdPerson: Word('прогрохочет', 7),
  plural1stPerson: Word('прогрохочем', 7),
  plural2ndPerson: Word('прогрохочете', 7),
  plural3rdPerson: Word('прогрохочут', 7),
  masculinePast: Word('прогрохотал', 9),
  femininePast: Word('прогрохотала', 9),
  neuterPast: Word('прогрохотало', 9),
  pluralPast: Word('прогрохотали', 9),
  imperativeInformal: Word('прогрохочи', 9),
  imperativeFormal: Word('прогрохочите', 9),
  imperfect: [],
};

perfectVerbs.set(прогрохотать.name.text, прогрохотать);

export { прогрохотать };