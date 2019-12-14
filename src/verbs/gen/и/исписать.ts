import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const исписать: PerfectVerb = {
  name: Word('исписать', 5),
  singular1stPerson: Word('испишу', 5),
  singular2ndPerson: Word('испишешь', 3),
  singular3rdPerson: Word('испишет', 3),
  plural1stPerson: Word('испишем', 3),
  plural2ndPerson: Word('испишете', 3),
  plural3rdPerson: Word('испишут', 3),
  masculinePast: Word('исписал', 5),
  femininePast: Word('исписала', 5),
  neuterPast: Word('исписало', 5),
  pluralPast: Word('исписали', 5),
  imperativeInformal: Word('испиши', 5),
  imperativeFormal: Word('испишите', 5),
  imperfect: [],
};

perfectVerbs.set(исписать.name.text, исписать);

export { исписать };