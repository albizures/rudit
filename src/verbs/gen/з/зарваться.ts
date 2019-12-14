import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зарваться: PerfectVerb = {
  name: Word('зарваться', 4),
  singular1stPerson: Word('зарвусь', 4),
  singular2ndPerson: Word('зарвёшься', 4),
  singular3rdPerson: Word('зарвётся', 4),
  plural1stPerson: Word('зарвёмся', 4),
  plural2ndPerson: Word('зарвётесь', 4),
  plural3rdPerson: Word('зарвутся', 4),
  masculinePast: Word('зарвался', 4),
  femininePast: Word('зарвалась', 6),
  neuterPast: Word('зарвалось//зарвало'сь', 4),
  pluralPast: Word('зарвались//зарвали'сь', 4),
  imperativeInformal: Word('зарвись', 4),
  imperativeFormal: Word('зарвитесь', 4),
  imperfect: [],
};

perfectVerbs.set(зарваться.name.text, зарваться);

export { зарваться };