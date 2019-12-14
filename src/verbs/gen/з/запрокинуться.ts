import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запрокинуться: PerfectVerb = {
  name: Word('запрокинуться', 6),
  singular1stPerson: Word('запрокинусь', 6),
  singular2ndPerson: Word('запрокинешься', 6),
  singular3rdPerson: Word('запрокинется', 6),
  plural1stPerson: Word('запрокинемся', 6),
  plural2ndPerson: Word('запрокинетесь', 6),
  plural3rdPerson: Word('запрокинутся', 6),
  masculinePast: Word('запрокинулся', 6),
  femininePast: Word('запрокинулась', 6),
  neuterPast: Word('запрокинулось', 6),
  pluralPast: Word('запрокинулись', 6),
  imperativeInformal: Word('запрокинься', 6),
  imperativeFormal: Word('запрокиньтесь', 6),
  imperfect: [],
};

perfectVerbs.set(запрокинуться.name.text, запрокинуться);

export { запрокинуться };