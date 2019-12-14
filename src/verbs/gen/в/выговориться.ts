import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выговориться: PerfectVerb = {
  name: Word('выговориться', 1),
  singular1stPerson: Word('выговорюсь', 1),
  singular2ndPerson: Word('выговоришься', 1),
  singular3rdPerson: Word('выговорится', 1),
  plural1stPerson: Word('выговоримся', 1),
  plural2ndPerson: Word('выговоритесь', 1),
  plural3rdPerson: Word('выговорятся', 1),
  masculinePast: Word('выговорился', 1),
  femininePast: Word('выговорилась', 1),
  neuterPast: Word('выговорилось', 1),
  pluralPast: Word('выговорились', 1),
  imperativeInformal: Word('выговорись', 1),
  imperativeFormal: Word('выговоритесь', 1),
  imperfect: [],
};

perfectVerbs.set(выговориться.name.text, выговориться);

export { выговориться };