import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обзавестись: PerfectVerb = {
  name: Word('обзавестись', 8),
  singular1stPerson: Word('обзаведусь', 7),
  singular2ndPerson: Word('обзаведёшься', 3),
  singular3rdPerson: Word('обзаведётся', 3),
  plural1stPerson: Word('обзаведёмся', 3),
  plural2ndPerson: Word('обзаведётесь', 3),
  plural3rdPerson: Word('обзаведутся', 7),
  masculinePast: Word('обзавёлся', 3),
  femininePast: Word('обзавелась', 7),
  neuterPast: Word('обзавелось', 7),
  pluralPast: Word('обзавелись', 7),
  imperativeInformal: Word('обзаведись', 7),
  imperativeFormal: Word('обзаведитесь', 7),
  imperfect: [],
};

perfectVerbs.set(обзавестись.name.text, обзавестись);

export { обзавестись };