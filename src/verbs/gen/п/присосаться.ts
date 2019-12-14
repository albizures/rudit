import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const присосаться: PerfectVerb = {
  name: Word('присосаться', 6),
  singular1stPerson: Word('присосусь', 6),
  singular2ndPerson: Word('присосёшься', 2),
  singular3rdPerson: Word('присосётся', 2),
  plural1stPerson: Word('присосёмся', 2),
  plural2ndPerson: Word('присосётесь', 8),
  plural3rdPerson: Word('присосутся', 6),
  masculinePast: Word('присосался', 6),
  femininePast: Word('присосалась', 6),
  neuterPast: Word('присосалось', 6),
  pluralPast: Word('присосались', 6),
  imperativeInformal: Word('присосись', 6),
  imperativeFormal: Word('присоситесь', 6),
  imperfect: [],
};

perfectVerbs.set(присосаться.name.text, присосаться);

export { присосаться };