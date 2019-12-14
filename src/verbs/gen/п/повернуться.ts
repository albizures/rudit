import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const повернуться: PerfectVerb = {
  name: Word('повернуться', 6),
  singular1stPerson: Word('повернусь', 6),
  singular2ndPerson: Word('повернёшься', 3),
  singular3rdPerson: Word('повернётся', 3),
  plural1stPerson: Word('повернёмся', 3),
  plural2ndPerson: Word('повернётесь', 3),
  plural3rdPerson: Word('повернутся', 6),
  masculinePast: Word('повернулся', 6),
  femininePast: Word('повернулась', 6),
  neuterPast: Word('повернулось', 6),
  pluralPast: Word('повернулись', 6),
  imperativeInformal: Word('повернись', 6),
  imperativeFormal: Word('повернитесь', 6),
  imperfect: ['поворачиваться'],
};

perfectVerbs.set(повернуться.name.text, повернуться);

export { повернуться };