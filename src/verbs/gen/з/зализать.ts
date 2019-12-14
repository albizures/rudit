import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зализать: PerfectVerb = {
  name: Word('зализать', 5),
  singular1stPerson: Word('залижу', 5),
  singular2ndPerson: Word('залижешь', 3),
  singular3rdPerson: Word('залижет', 3),
  plural1stPerson: Word('залижем', 3),
  plural2ndPerson: Word('залижете', 3),
  plural3rdPerson: Word('залижут', 3),
  masculinePast: Word('зализал', 5),
  femininePast: Word('зализала', 5),
  neuterPast: Word('зализало', 5),
  pluralPast: Word('зализали', 5),
  imperativeInformal: Word('залижи', 5),
  imperativeFormal: Word('залижите', 5),
  imperfect: [],
};

perfectVerbs.set(зализать.name.text, зализать);

export { зализать };