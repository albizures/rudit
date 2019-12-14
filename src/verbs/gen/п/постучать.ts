import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const постучать: PerfectVerb = {
  name: Word('постучать', 6),
  singular1stPerson: Word('постучу', 6),
  singular2ndPerson: Word('постучишь', 6),
  singular3rdPerson: Word('постучит', 6),
  plural1stPerson: Word('постучим', 6),
  plural2ndPerson: Word('постучите', 6),
  plural3rdPerson: Word('постучат', 6),
  masculinePast: Word('постучал', 6),
  femininePast: Word('постучала', 6),
  neuterPast: Word('постучало', 6),
  pluralPast: Word('постучали', 6),
  imperativeInformal: Word('постучи', 6),
  imperativeFormal: Word('постучите', 6),
  imperfect: ['стучать'],
};

perfectVerbs.set(постучать.name.text, постучать);

export { постучать };