import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поссориться: PerfectVerb = {
  name: Word('поссориться', 4),
  singular1stPerson: Word('поссорюсь', 4),
  singular2ndPerson: Word('поссоришься', 4),
  singular3rdPerson: Word('поссорится', 4),
  plural1stPerson: Word('поссоримся', 4),
  plural2ndPerson: Word('поссоритесь', 4),
  plural3rdPerson: Word('поссорятся', 4),
  masculinePast: Word('поссорился', 4),
  femininePast: Word('поссорилась', 4),
  neuterPast: Word('поссорилось', 4),
  pluralPast: Word('поссорились', 4),
  imperativeInformal: Word('поссорься', 4),
  imperativeFormal: Word('поссорьтесь', 4),
  imperfect: [],
};

perfectVerbs.set(поссориться.name.text, поссориться);

export { поссориться };