import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прибааться: PerfectVerb = {
  name: Word('прибааться', 4),
  singular1stPerson: Word('приберусь', 6),
  singular2ndPerson: Word('приберёшься', 6),
  singular3rdPerson: Word('приберётся', 6),
  plural1stPerson: Word('приберёмся', 6),
  plural2ndPerson: Word('приберётесь', 6),
  plural3rdPerson: Word('приберутся', 6),
  masculinePast: Word('прибрался', 5),
  femininePast: Word('прибралась', 7),
  neuterPast: Word('прибралось//прибрало'сь', 5),
  pluralPast: Word('прибрались//прибрали'сь', 5),
  imperativeInformal: Word('приберись', 6),
  imperativeFormal: Word('приберитесь', 6),
  imperfect: [],
};

perfectVerbs.set(прибааться.name.text, прибааться);

export { прибааться };