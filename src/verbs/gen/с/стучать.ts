import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стучать: PerfectVerb = {
  name: Word('стучать', 4),
  singular1stPerson: Word('стучу', 4),
  singular2ndPerson: Word('стучишь', 4),
  singular3rdPerson: Word('стучит', 4),
  plural1stPerson: Word('стучим', 4),
  plural2ndPerson: Word('стучите', 4),
  plural3rdPerson: Word('стучат', 4),
  masculinePast: Word('стучал', 4),
  femininePast: Word('стучала', 4),
  neuterPast: Word('стучало', 4),
  pluralPast: Word('стучали', 4),
  imperativeInformal: Word('стучи', 4),
  imperativeFormal: Word('стучите', 4),
  imperfect: ['постучать','стукнуть'],
};

perfectVerbs.set(стучать.name.text, стучать);

export { стучать };