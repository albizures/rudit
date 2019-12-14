import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const высказать: PerfectVerb = {
  name: Word('высказать', 1),
  singular1stPerson: Word('выскажу', 1),
  singular2ndPerson: Word('выскажешь', 1),
  singular3rdPerson: Word('выскажет', 1),
  plural1stPerson: Word('выскажем', 1),
  plural2ndPerson: Word('выскажете', 1),
  plural3rdPerson: Word('выскажут', 1),
  masculinePast: Word('высказал', 1),
  femininePast: Word('высказала', 1),
  neuterPast: Word('высказало', 1),
  pluralPast: Word('высказали', 1),
  imperativeInformal: Word('выскажи', 1),
  imperativeFormal: Word('выскажите', 1),
  imperfect: [],
};

perfectVerbs.set(высказать.name.text, высказать);

export { высказать };