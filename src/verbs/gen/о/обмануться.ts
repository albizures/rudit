import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обмануться: PerfectVerb = {
  name: Word('обмануться', 5),
  singular1stPerson: Word('обманусь', 5),
  singular2ndPerson: Word('обманешься', 3),
  singular3rdPerson: Word('обманется', 3),
  plural1stPerson: Word('обманемся', 3),
  plural2ndPerson: Word('обманетесь', 3),
  plural3rdPerson: Word('обманутся', 3),
  masculinePast: Word('обманулся', 5),
  femininePast: Word('обманулась', 5),
  neuterPast: Word('обманулось', 5),
  pluralPast: Word('обманулись', 5),
  imperativeInformal: Word('обманись', 5),
  imperativeFormal: Word('обманитесь', 5),
  imperfect: [],
};

perfectVerbs.set(обмануться.name.text, обмануться);

export { обмануться };