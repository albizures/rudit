import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выказать: PerfectVerb = {
  name: Word('выказать', 1),
  singular1stPerson: Word('выкажу', 1),
  singular2ndPerson: Word('выкажешь', 1),
  singular3rdPerson: Word('выкажет', 1),
  plural1stPerson: Word('выкажем', 1),
  plural2ndPerson: Word('выкажете', 1),
  plural3rdPerson: Word('выкажут', 1),
  masculinePast: Word('выказал', 1),
  femininePast: Word('выказала', 1),
  neuterPast: Word('выказало', 1),
  pluralPast: Word('выказали', 1),
  imperativeInformal: Word('выкажи', 1),
  imperativeFormal: Word('выкажите', 1),
  imperfect: [],
};

perfectVerbs.set(выказать.name.text, выказать);

export { выказать };