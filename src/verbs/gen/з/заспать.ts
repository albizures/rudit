import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заспать: PerfectVerb = {
  name: Word('заспать', 4),
  singular1stPerson: Word('засплю', 5),
  singular2ndPerson: Word('заспишь', 4),
  singular3rdPerson: Word('заспит', 4),
  plural1stPerson: Word('заспим', 4),
  plural2ndPerson: Word('заспите', 4),
  plural3rdPerson: Word('заспят', 4),
  masculinePast: Word('заспал', 4),
  femininePast: Word('заспала', 6),
  neuterPast: Word('заспало', 4),
  pluralPast: Word('заспали', 4),
  imperativeInformal: Word('заспи', 4),
  imperativeFormal: Word('заспите', 4),
  imperfect: [],
};

perfectVerbs.set(заспать.name.text, заспать);

export { заспать };