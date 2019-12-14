import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ворваться: PerfectVerb = {
  name: Word('ворваться', 4),
  singular1stPerson: Word('ворвусь', 4),
  singular2ndPerson: Word('ворвёшься', 1),
  singular3rdPerson: Word('ворвётся', 1),
  plural1stPerson: Word('ворвёмся', 1),
  plural2ndPerson: Word('ворвётесь', 6),
  plural3rdPerson: Word('ворвутся', 4),
  masculinePast: Word('ворвался', 4),
  femininePast: Word('ворвалась', 6),
  neuterPast: Word('ворвалось//ворвало'сь', 4),
  pluralPast: Word('ворвались//ворвали'сь', 4),
  imperativeInformal: Word('ворвись', 4),
  imperativeFormal: Word('ворвитесь', 4),
  imperfect: [],
};

perfectVerbs.set(ворваться.name.text, ворваться);

export { ворваться };