import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подступиться: PerfectVerb = {
  name: Word('подступиться', 7),
  singular1stPerson: Word('подступлюсь', 8),
  singular2ndPerson: Word('подступишься', 5),
  singular3rdPerson: Word('подступится', 5),
  plural1stPerson: Word('подступимся', 5),
  plural2ndPerson: Word('подступитесь', 5),
  plural3rdPerson: Word('подступятся', 5),
  masculinePast: Word('подступился', 7),
  femininePast: Word('подступилась', 7),
  neuterPast: Word('подступилось', 7),
  pluralPast: Word('подступились', 7),
  imperativeInformal: Word('подступись', 7),
  imperativeFormal: Word('подступитесь', 7),
  imperfect: [],
};

perfectVerbs.set(подступиться.name.text, подступиться);

export { подступиться };