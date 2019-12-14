import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взорваться: PerfectVerb = {
  name: Word('взорваться', 5),
  singular1stPerson: Word('взорвусь', 5),
  singular2ndPerson: Word('взорвёшься', 2),
  singular3rdPerson: Word('взорвётся', 2),
  plural1stPerson: Word('взорвёмся', 2),
  plural2ndPerson: Word('взорвётесь', 7),
  plural3rdPerson: Word('взорвутся', 5),
  masculinePast: Word('взорвался', 5),
  femininePast: Word('взорвалась', 7),
  neuterPast: Word('взорвалось//взорвало'сь', 5),
  pluralPast: Word('взорвались//взорвали'сь', 5),
  imperativeInformal: Word('взорвись', 5),
  imperativeFormal: Word('взорвитесь', 5),
  imperfect: [],
};

perfectVerbs.set(взорваться.name.text, взорваться);

export { взорваться };