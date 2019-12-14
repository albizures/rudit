import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вернуться: PerfectVerb = {
  name: Word('вернуться', 4),
  singular1stPerson: Word('вернусь', 4),
  singular2ndPerson: Word('вернёшься', 4),
  singular3rdPerson: Word('вернётся', 4),
  plural1stPerson: Word('вернёмся', 4),
  plural2ndPerson: Word('вернётесь', 4),
  plural3rdPerson: Word('вернутся', 4),
  masculinePast: Word('вернулся', 4),
  femininePast: Word('вернулась', 4),
  neuterPast: Word('вернулось', 4),
  pluralPast: Word('вернулись', 4),
  imperativeInformal: Word('вернись', 4),
  imperativeFormal: Word('вернитесь', 4),
  imperfect: ['возвращаться'],
};

perfectVerbs.set(вернуться.name.text, вернуться);

export { вернуться };