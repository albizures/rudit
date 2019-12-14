import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const недосказать: PerfectVerb = {
  name: Word('недосказать', 8),
  singular1stPerson: Word('недоскажу', 8),
  singular2ndPerson: Word('недоскажешь', 6),
  singular3rdPerson: Word('недоскажет', 6),
  plural1stPerson: Word('недоскажем', 6),
  plural2ndPerson: Word('недоскажете', 6),
  plural3rdPerson: Word('недоскажут', 6),
  masculinePast: Word('недосказал', 8),
  femininePast: Word('недосказала', 8),
  neuterPast: Word('недосказало', 8),
  pluralPast: Word('недосказали', 8),
  imperativeInformal: Word('недоскажи', 8),
  imperativeFormal: Word('недоскажите', 8),
  imperfect: [],
};

perfectVerbs.set(недосказать.name.text, недосказать);

export { недосказать };