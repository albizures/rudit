import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const колыхнуться: PerfectVerb = {
  name: Word('колыхнуться', 6),
  singular1stPerson: Word('колыхнусь', 6),
  singular2ndPerson: Word('колыхнёшься', 1),
  singular3rdPerson: Word('колыхнётся', 1),
  plural1stPerson: Word('колыхнёмся', 1),
  plural2ndPerson: Word('колыхнётесь', 8),
  plural3rdPerson: Word('колыхнутся', 6),
  masculinePast: Word('колыхнулся', 6),
  femininePast: Word('колыхнулась', 6),
  neuterPast: Word('колыхнулось', 6),
  pluralPast: Word('колыхнулись', 6),
  imperativeInformal: Word('колыхнись', 6),
  imperativeFormal: Word('колыхнитесь', 6),
  imperfect: ['колыхаться'],
};

perfectVerbs.set(колыхнуться.name.text, колыхнуться);

export { колыхнуться };