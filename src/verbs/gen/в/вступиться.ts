import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вступиться: PerfectVerb = {
  name: Word('вступиться', 5),
  singular1stPerson: Word('вступлюсь', 6),
  singular2ndPerson: Word('вступишься', 3),
  singular3rdPerson: Word('вступится', 3),
  plural1stPerson: Word('вступимся', 3),
  plural2ndPerson: Word('вступитесь', 3),
  plural3rdPerson: Word('вступятся', 3),
  masculinePast: Word('вступился', 5),
  femininePast: Word('вступилась', 5),
  neuterPast: Word('вступилось', 5),
  pluralPast: Word('вступились', 5),
  imperativeInformal: Word('вступись', 5),
  imperativeFormal: Word('вступитесь', 5),
  imperfect: [],
};

perfectVerbs.set(вступиться.name.text, вступиться);

export { вступиться };