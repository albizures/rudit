import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поспать: PerfectVerb = {
  name: Word('поспать', 4),
  singular1stPerson: Word('посплю', 5),
  singular2ndPerson: Word('поспишь', 4),
  singular3rdPerson: Word('поспит', 4),
  plural1stPerson: Word('поспим', 4),
  plural2ndPerson: Word('поспите', 4),
  plural3rdPerson: Word('поспят', 4),
  masculinePast: Word('поспал', 4),
  femininePast: Word('поспала', 6),
  neuterPast: Word('поспало', 4),
  pluralPast: Word('поспали', 4),
  imperativeInformal: Word('поспи', 4),
  imperativeFormal: Word('поспите', 4),
  imperfect: ['спать'],
};

perfectVerbs.set(поспать.name.text, поспать);

export { поспать };