import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приступиться: PerfectVerb = {
  name: Word('приступиться', 7),
  singular1stPerson: Word('приступлюсь', 8),
  singular2ndPerson: Word('приступишься', 5),
  singular3rdPerson: Word('приступится', 5),
  plural1stPerson: Word('приступимся', 5),
  plural2ndPerson: Word('приступитесь', 5),
  plural3rdPerson: Word('приступятся', 5),
  masculinePast: Word('приступился', 7),
  femininePast: Word('приступилась', 7),
  neuterPast: Word('приступилось', 7),
  pluralPast: Word('приступились', 7),
  imperativeInformal: Word('приступись', 7),
  imperativeFormal: Word('приступитесь', 7),
  imperfect: [],
};

perfectVerbs.set(приступиться.name.text, приступиться);

export { приступиться };