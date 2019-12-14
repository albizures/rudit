import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обобраться: PerfectVerb = {
  name: Word('обобраться', 5),
  singular1stPerson: Word('оберусь', 4),
  singular2ndPerson: Word('оберёшься', 4),
  singular3rdPerson: Word('оберётся', 4),
  plural1stPerson: Word('оберёмся', 4),
  plural2ndPerson: Word('оберётесь', 4),
  plural3rdPerson: Word('оберутся', 4),
  masculinePast: Word('обобрался', 5),
  femininePast: Word('обобралась', 7),
  neuterPast: Word('обобралось//обобрало'сь', 5),
  pluralPast: Word('обобрались//обобрали'сь', 5),
  imperativeInformal: Word('оберись', 4),
  imperativeFormal: Word('оберитесь', 4),
  imperfect: [],
};

perfectVerbs.set(обобраться.name.text, обобраться);

export { обобраться };