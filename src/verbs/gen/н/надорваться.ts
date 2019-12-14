import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const надорваться: PerfectVerb = {
  name: Word('надорваться', 6),
  singular1stPerson: Word('надорвусь', 6),
  singular2ndPerson: Word('надорвёшься', 1),
  singular3rdPerson: Word('надорвётся', 1),
  plural1stPerson: Word('надорвёмся', 1),
  plural2ndPerson: Word('надорвётесь', 1),
  plural3rdPerson: Word('надорвутся', 6),
  masculinePast: Word('надорвался', 6),
  femininePast: Word('надорвалась', 8),
  neuterPast: Word('надорвалось//надорвало'сь', 6),
  pluralPast: Word('надорвались//надорвали'сь', 6),
  imperativeInformal: Word('надорвись', 6),
  imperativeFormal: Word('надорвитесь', 6),
  imperfect: [],
};

perfectVerbs.set(надорваться.name.text, надорваться);

export { надорваться };