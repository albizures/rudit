import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const гнуться: PerfectVerb = {
  name: Word('гнуться', 2),
  singular1stPerson: Word('гнусь', 2),
  singular2ndPerson: Word('гнёшься', 6),
  singular3rdPerson: Word('гнётся', 5),
  plural1stPerson: Word('гнёмся', 5),
  plural2ndPerson: Word('гнётесь', 4),
  plural3rdPerson: Word('гнутся', 2),
  masculinePast: Word('гнулся', 2),
  femininePast: Word('гнулась', 2),
  neuterPast: Word('гнулось', 2),
  pluralPast: Word('гнулись', 2),
  imperativeInformal: Word('гнись', 2),
  imperativeFormal: Word('гнитесь', 2),
  imperfect: ['согнуться'],
};

perfectVerbs.set(гнуться.name.text, гнуться);

export { гнуться };