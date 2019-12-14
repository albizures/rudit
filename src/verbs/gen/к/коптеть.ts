import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const коптеть: PerfectVerb = {
  name: Word('коптеть', 4),
  singular1stPerson: Word('копчу', 4),
  singular2ndPerson: Word('коптишь', 4),
  singular3rdPerson: Word('коптит', 4),
  plural1stPerson: Word('коптим', 4),
  plural2ndPerson: Word('коптите', 4),
  plural3rdPerson: Word('коптят', 4),
  masculinePast: Word('коптел', 4),
  femininePast: Word('коптела', 4),
  neuterPast: Word('коптело', 4),
  pluralPast: Word('коптели', 4),
  imperativeInformal: Word('копти', 4),
  imperativeFormal: Word('коптите', 4),
  imperfect: [],
};

perfectVerbs.set(коптеть.name.text, коптеть);

export { коптеть };