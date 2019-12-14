import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прижиться: PerfectVerb = {
  name: Word('прижиться', 4),
  singular1stPerson: Word('приживусь', 6),
  singular2ndPerson: Word('приживёшься', 6),
  singular3rdPerson: Word('приживётся', 6),
  plural1stPerson: Word('приживёмся', 6),
  plural2ndPerson: Word('приживётесь', 6),
  plural3rdPerson: Word('приживутся', 6),
  masculinePast: Word('прижился', 4),
  femininePast: Word('прижилась', 6),
  neuterPast: Word('прижилось//прижило'сь', 4),
  pluralPast: Word('прижились//прижили'сь', 4),
  imperativeInformal: Word('приживись', 6),
  imperativeFormal: Word('приживитесь', 6),
  imperfect: [],
};

perfectVerbs.set(прижиться.name.text, прижиться);

export { прижиться };