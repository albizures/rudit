import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отступиться: PerfectVerb = {
  name: Word('отступиться', 6),
  singular1stPerson: Word('отступлюсь', 7),
  singular2ndPerson: Word('отступишься', 4),
  singular3rdPerson: Word('отступится', 4),
  plural1stPerson: Word('отступимся', 4),
  plural2ndPerson: Word('отступитесь', 4),
  plural3rdPerson: Word('отступятся', 4),
  masculinePast: Word('отступился', 6),
  femininePast: Word('отступилась', 6),
  neuterPast: Word('отступилось', 6),
  pluralPast: Word('отступились', 6),
  imperativeInformal: Word('отступись', 6),
  imperativeFormal: Word('отступитесь', 6),
  imperfect: [],
};

perfectVerbs.set(отступиться.name.text, отступиться);

export { отступиться };