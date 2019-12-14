import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проспать: PerfectVerb = {
  name: Word('проспать', 5),
  singular1stPerson: Word('просплю', 6),
  singular2ndPerson: Word('проспишь', 5),
  singular3rdPerson: Word('проспит', 5),
  plural1stPerson: Word('проспим', 5),
  plural2ndPerson: Word('проспите', 5),
  plural3rdPerson: Word('проспят', 5),
  masculinePast: Word('проспал', 5),
  femininePast: Word('проспала', 7),
  neuterPast: Word('проспало', 5),
  pluralPast: Word('проспали', 5),
  imperativeInformal: Word('проспи', 5),
  imperativeFormal: Word('проспите', 5),
  imperfect: ['просыпать'],
};

perfectVerbs.set(проспать.name.text, проспать);

export { проспать };