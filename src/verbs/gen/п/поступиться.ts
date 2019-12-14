import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поступиться: PerfectVerb = {
  name: Word('поступиться', 6),
  singular1stPerson: Word('поступлюсь', 7),
  singular2ndPerson: Word('поступишься', 4),
  singular3rdPerson: Word('поступится', 4),
  plural1stPerson: Word('поступимся', 4),
  plural2ndPerson: Word('поступитесь', 4),
  plural3rdPerson: Word('поступятся', 4),
  masculinePast: Word('поступился', 6),
  femininePast: Word('поступилась', 6),
  neuterPast: Word('поступилось', 6),
  pluralPast: Word('поступились', 6),
  imperativeInformal: Word('поступись', 6),
  imperativeFormal: Word('поступитесь', 6),
  imperfect: [],
};

perfectVerbs.set(поступиться.name.text, поступиться);

export { поступиться };