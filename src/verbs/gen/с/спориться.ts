import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спориться: PerfectVerb = {
  name: Word('спориться', 4),
  singular1stPerson: Word('спорюсь', 4),
  singular2ndPerson: Word('споришься', 4),
  singular3rdPerson: Word('спорится', 4),
  plural1stPerson: Word('споримся', 4),
  plural2ndPerson: Word('споритесь', 4),
  plural3rdPerson: Word('спорятся', 4),
  masculinePast: Word('спорился', 4),
  femininePast: Word('спорилась', 4),
  neuterPast: Word('спорилось', 4),
  pluralPast: Word('спорились', 4),
  imperativeInformal: Word('спорись', 4),
  imperativeFormal: Word('споритесь', 4),
  imperfect: [],
};

perfectVerbs.set(спориться.name.text, спориться);

export { спориться };