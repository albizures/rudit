import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расступиться: PerfectVerb = {
  name: Word('расступиться', 7),
  singular1stPerson: Word('расступлюсь', 8),
  singular2ndPerson: Word('расступишься', 5),
  singular3rdPerson: Word('расступится', 5),
  plural1stPerson: Word('расступимся', 5),
  plural2ndPerson: Word('расступитесь', 5),
  plural3rdPerson: Word('расступятся', 5),
  masculinePast: Word('расступился', 7),
  femininePast: Word('расступилась', 7),
  neuterPast: Word('расступилось', 7),
  pluralPast: Word('расступились', 7),
  imperativeInformal: Word('расступись', 7),
  imperativeFormal: Word('расступитесь', 7),
  imperfect: [],
};

perfectVerbs.set(расступиться.name.text, расступиться);

export { расступиться };