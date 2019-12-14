import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const загореться: PerfectVerb = {
  name: Word('загореться', 5),
  singular1stPerson: Word('загорюсь', 5),
  singular2ndPerson: Word('загоришься', 5),
  singular3rdPerson: Word('загорится', 5),
  plural1stPerson: Word('загоримся', 5),
  plural2ndPerson: Word('загоритесь', 5),
  plural3rdPerson: Word('загорятся', 5),
  masculinePast: Word('загорелся', 5),
  femininePast: Word('загорелась', 5),
  neuterPast: Word('загорелось', 5),
  pluralPast: Word('загорелись', 5),
  imperativeInformal: Word('загорись', 5),
  imperativeFormal: Word('загоритесь', 5),
  imperfect: [],
};

perfectVerbs.set(загореться.name.text, загореться);

export { загореться };