import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прийтись: PerfectVerb = {
  name: Word('прийтись', 5),
  singular1stPerson: Word('придусь', 4),
  singular2ndPerson: Word('придёшься', 4),
  singular3rdPerson: Word('придётся', 4),
  plural1stPerson: Word('придёмся', 4),
  plural2ndPerson: Word('придётесь', 4),
  plural3rdPerson: Word('придутся', 4),
  masculinePast: Word('пришёлся', 4),
  femininePast: Word('пришлась', 5),
  neuterPast: Word('пришлось', 5),
  pluralPast: Word('пришлись', 5),
  imperativeInformal: Word('придись', 4),
  imperativeFormal: Word('придитесь', 4),
  imperfect: [],
};

perfectVerbs.set(прийтись.name.text, прийтись);

export { прийтись };