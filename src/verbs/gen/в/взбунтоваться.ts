import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взбунтоваться: PerfectVerb = {
  name: Word('взбунтоваться', 8),
  singular1stPerson: Word('взбунтуюсь', 6),
  singular2ndPerson: Word('взбунтуешься', 6),
  singular3rdPerson: Word('взбунтуется', 6),
  plural1stPerson: Word('взбунтуемся', 6),
  plural2ndPerson: Word('взбунтуетесь', 6),
  plural3rdPerson: Word('взбунтуются', 6),
  masculinePast: Word('взбунтовался', 8),
  femininePast: Word('взбунтовалась', 8),
  neuterPast: Word('взбунтовалось', 8),
  pluralPast: Word('взбунтовались', 8),
  imperativeInformal: Word('взбунтуйся', 6),
  imperativeFormal: Word('взбунтуйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(взбунтоваться.name.text, взбунтоваться);

export { взбунтоваться };