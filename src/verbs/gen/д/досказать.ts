import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const досказать: PerfectVerb = {
  name: Word('досказать', 6),
  singular1stPerson: Word('доскажу', 6),
  singular2ndPerson: Word('доскажешь', 4),
  singular3rdPerson: Word('доскажет', 4),
  plural1stPerson: Word('доскажем', 4),
  plural2ndPerson: Word('доскажете', 4),
  plural3rdPerson: Word('доскажут', 4),
  masculinePast: Word('досказал', 6),
  femininePast: Word('досказала', 6),
  neuterPast: Word('досказало', 6),
  pluralPast: Word('досказали', 6),
  imperativeInformal: Word('доскажи', 6),
  imperativeFormal: Word('доскажите', 6),
  imperfect: [],
};

perfectVerbs.set(досказать.name.text, досказать);

export { досказать };