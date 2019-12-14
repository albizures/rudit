import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const порваться: PerfectVerb = {
  name: Word('порваться', 4),
  singular1stPerson: Word('порвусь', 4),
  singular2ndPerson: Word('порвёшься', 1),
  singular3rdPerson: Word('порвётся', 1),
  plural1stPerson: Word('порвёмся', 1),
  plural2ndPerson: Word('порвётесь', 6),
  plural3rdPerson: Word('порвутся', 4),
  masculinePast: Word('порвался', 4),
  femininePast: Word('порвалась', 6),
  neuterPast: Word('порвалось//порвало'сь', 4),
  pluralPast: Word('порвались//порвали'сь', 4),
  imperativeInformal: Word('порвись', 4),
  imperativeFormal: Word('порвитесь', 4),
  imperfect: [],
};

perfectVerbs.set(порваться.name.text, порваться);

export { порваться };