import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оговориться: PerfectVerb = {
  name: Word('оговориться', 6),
  singular1stPerson: Word('оговорюсь', 6),
  singular2ndPerson: Word('оговоришься', 6),
  singular3rdPerson: Word('оговорится', 6),
  plural1stPerson: Word('оговоримся', 6),
  plural2ndPerson: Word('оговоритесь', 6),
  plural3rdPerson: Word('оговорятся', 6),
  masculinePast: Word('оговорился', 6),
  femininePast: Word('оговорилась', 6),
  neuterPast: Word('оговорилось', 6),
  pluralPast: Word('оговорились', 6),
  imperativeInformal: Word('оговорись', 6),
  imperativeFormal: Word('оговоритесь', 6),
  imperfect: [],
};

perfectVerbs.set(оговориться.name.text, оговориться);

export { оговориться };