import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прерваться: PerfectVerb = {
  name: Word('прерваться', 5),
  singular1stPerson: Word('прервусь', 5),
  singular2ndPerson: Word('прервёшься', 5),
  singular3rdPerson: Word('прервётся', 5),
  plural1stPerson: Word('прервёмся', 5),
  plural2ndPerson: Word('прервётесь', 5),
  plural3rdPerson: Word('прервутся', 5),
  masculinePast: Word('прервался', 5),
  femininePast: Word('прервалась', 7),
  neuterPast: Word('прервалось//прервало'сь', 5),
  pluralPast: Word('прервались//прервали'сь', 5),
  imperativeInformal: Word('прервись', 5),
  imperativeFormal: Word('прервитесь', 5),
  imperfect: [],
};

perfectVerbs.set(прерваться.name.text, прерваться);

export { прерваться };