import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обернуться: PerfectVerb = {
  name: Word('обернуться', 5),
  singular1stPerson: Word('обернусь', 5),
  singular2ndPerson: Word('обернёшься', 5),
  singular3rdPerson: Word('обернётся', 5),
  plural1stPerson: Word('обернёмся', 5),
  plural2ndPerson: Word('обернётесь', 5),
  plural3rdPerson: Word('обернутся', 5),
  masculinePast: Word('обернулся', 5),
  femininePast: Word('обернулась', 5),
  neuterPast: Word('обернулось', 5),
  pluralPast: Word('обернулись', 5),
  imperativeInformal: Word('обернись', 5),
  imperativeFormal: Word('обернитесь', 5),
  imperfect: ['оборачиваться','обёртываться'],
};

perfectVerbs.set(обернуться.name.text, обернуться);

export { обернуться };