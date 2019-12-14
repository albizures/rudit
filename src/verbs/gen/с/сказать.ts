import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сказать: PerfectVerb = {
  name: Word('сказать', 4),
  singular1stPerson: Word('скажу', 4),
  singular2ndPerson: Word('скажешь', 2),
  singular3rdPerson: Word('скажет', 2),
  plural1stPerson: Word('скажем', 2),
  plural2ndPerson: Word('скажете', 2),
  plural3rdPerson: Word('скажут', 2),
  masculinePast: Word('сказал', 4),
  femininePast: Word('сказала', 4),
  neuterPast: Word('сказало', 4),
  pluralPast: Word('сказали', 4),
  imperativeInformal: Word('скажи', 4),
  imperativeFormal: Word('скажите', 4),
  imperfect: ['говорить'],
};

perfectVerbs.set(сказать.name.text, сказать);

export { сказать };