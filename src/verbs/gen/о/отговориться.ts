import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отговориться: PerfectVerb = {
  name: Word('отговориться', 7),
  singular1stPerson: Word('отговорюсь', 7),
  singular2ndPerson: Word('отговоришься', 7),
  singular3rdPerson: Word('отговорится', 7),
  plural1stPerson: Word('отговоримся', 7),
  plural2ndPerson: Word('отговоритесь', 7),
  plural3rdPerson: Word('отговорятся', 7),
  masculinePast: Word('отговорился', 7),
  femininePast: Word('отговорилась', 7),
  neuterPast: Word('отговорилось', 7),
  pluralPast: Word('отговорились', 7),
  imperativeInformal: Word('отговорись', 7),
  imperativeFormal: Word('отговоритесь', 7),
  imperfect: [],
};

perfectVerbs.set(отговориться.name.text, отговориться);

export { отговориться };