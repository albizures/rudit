import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const належаться: PerfectVerb = {
  name: Word('належаться', 5),
  singular1stPerson: Word('належусь', 5),
  singular2ndPerson: Word('належишься', 5),
  singular3rdPerson: Word('належится', 5),
  plural1stPerson: Word('належимся', 5),
  plural2ndPerson: Word('належитесь', 5),
  plural3rdPerson: Word('належатся', 5),
  masculinePast: Word('належался', 5),
  femininePast: Word('належалась', 5),
  neuterPast: Word('належалось', 5),
  pluralPast: Word('належались', 5),
  imperativeInformal: Word('належись', 5),
  imperativeFormal: Word('належитесь', 5),
  imperfect: [],
};

perfectVerbs.set(належаться.name.text, належаться);

export { належаться };