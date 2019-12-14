import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запираться: PerfectVerb = {
  name: Word('запираться', 5),
  singular1stPerson: Word('запираюсь', 5),
  singular2ndPerson: Word('запираешься', 5),
  singular3rdPerson: Word('запирается', 5),
  plural1stPerson: Word('запираемся', 5),
  plural2ndPerson: Word('запираетесь', 5),
  plural3rdPerson: Word('запираются', 5),
  masculinePast: Word('запирался', 5),
  femininePast: Word('запиралась', 5),
  neuterPast: Word('запиралось', 5),
  pluralPast: Word('запирались', 5),
  imperativeInformal: Word('запирайся', 5),
  imperativeFormal: Word('запирайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(запираться.name.text, запираться);

export { запираться };