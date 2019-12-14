import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стучаться: PerfectVerb = {
  name: Word('стучаться', 4),
  singular1stPerson: Word('стучусь', 4),
  singular2ndPerson: Word('стучишься', 4),
  singular3rdPerson: Word('стучится', 4),
  plural1stPerson: Word('стучимся', 4),
  plural2ndPerson: Word('стучитесь', 4),
  plural3rdPerson: Word('стучатся', 4),
  masculinePast: Word('стучался', 4),
  femininePast: Word('стучалась', 4),
  neuterPast: Word('стучалось', 4),
  pluralPast: Word('стучались', 4),
  imperativeInformal: Word('стучись', 4),
  imperativeFormal: Word('стучитесь', 4),
  imperfect: [],
};

perfectVerbs.set(стучаться.name.text, стучаться);

export { стучаться };