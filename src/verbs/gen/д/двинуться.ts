import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const двинуться: PerfectVerb = {
  name: Word('двинуться', 2),
  singular1stPerson: Word('двинусь', 2),
  singular2ndPerson: Word('двинешься', 2),
  singular3rdPerson: Word('двинется', 2),
  plural1stPerson: Word('двинемся', 2),
  plural2ndPerson: Word('двинетесь', 2),
  plural3rdPerson: Word('двинутся', 2),
  masculinePast: Word('двинулся', 2),
  femininePast: Word('двинулась', 2),
  neuterPast: Word('двинулось', 2),
  pluralPast: Word('двинулись', 2),
  imperativeInformal: Word('двинься', 2),
  imperativeFormal: Word('двиньтесь', 2),
  imperfect: ['двигаться'],
};

perfectVerbs.set(двинуться.name.text, двинуться);

export { двинуться };