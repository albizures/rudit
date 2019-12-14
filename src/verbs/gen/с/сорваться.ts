import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сорваться: PerfectVerb = {
  name: Word('сорваться', 4),
  singular1stPerson: Word('сорвусь', 4),
  singular2ndPerson: Word('сорвёшься', 4),
  singular3rdPerson: Word('сорвётся', 4),
  plural1stPerson: Word('сорвёмся', 4),
  plural2ndPerson: Word('сорвётесь', 4),
  plural3rdPerson: Word('сорвутся', 4),
  masculinePast: Word('сорвался', 4),
  femininePast: Word('сорвалась', 6),
  neuterPast: Word('сорвалось//сорвало'сь', 4),
  pluralPast: Word('сорвались//сорвали'сь', 4),
  imperativeInformal: Word('сорвись', 4),
  imperativeFormal: Word('сорвитесь', 4),
  imperfect: [],
};

perfectVerbs.set(сорваться.name.text, сорваться);

export { сорваться };