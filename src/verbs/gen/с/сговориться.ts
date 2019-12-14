import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сговориться: PerfectVerb = {
  name: Word('сговориться', 6),
  singular1stPerson: Word('сговорюсь', 6),
  singular2ndPerson: Word('сговоришься', 6),
  singular3rdPerson: Word('сговорится', 6),
  plural1stPerson: Word('сговоримся', 6),
  plural2ndPerson: Word('сговоритесь', 6),
  plural3rdPerson: Word('сговорятся', 6),
  masculinePast: Word('сговорился', 6),
  femininePast: Word('сговорилась', 6),
  neuterPast: Word('сговорилось', 6),
  pluralPast: Word('сговорились', 6),
  imperativeInformal: Word('сговорись', 6),
  imperativeFormal: Word('сговоритесь', 6),
  imperfect: [],
};

perfectVerbs.set(сговориться.name.text, сговориться);

export { сговориться };