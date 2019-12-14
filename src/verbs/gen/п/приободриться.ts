import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приободриться: PerfectVerb = {
  name: Word('приободриться', 8),
  singular1stPerson: Word('приободрюсь', 8),
  singular2ndPerson: Word('приободришься', 8),
  singular3rdPerson: Word('приободрится', 8),
  plural1stPerson: Word('приободримся', 8),
  plural2ndPerson: Word('приободритесь', 8),
  plural3rdPerson: Word('приободрятся', 8),
  masculinePast: Word('приободрился', 8),
  femininePast: Word('приободрилась', 8),
  neuterPast: Word('приободрилось', 8),
  pluralPast: Word('приободрились', 8),
  imperativeInformal: Word('приободрись', 8),
  imperativeFormal: Word('приободритесь', 8),
  imperfect: [],
};

perfectVerbs.set(приободриться.name.text, приободриться);

export { приободриться };