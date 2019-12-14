import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сурьмиться: PerfectVerb = {
  name: Word('сурьмиться', 5),
  singular1stPerson: Word('сурьмлюсь', 6),
  singular2ndPerson: Word('сурьмишься', 5),
  singular3rdPerson: Word('сурьмится', 5),
  plural1stPerson: Word('сурьмимся', 5),
  plural2ndPerson: Word('сурьмитесь', 5),
  plural3rdPerson: Word('сурьмятся', 5),
  masculinePast: Word('сурьмился', 5),
  femininePast: Word('сурьмилась', 5),
  neuterPast: Word('сурьмилось', 5),
  pluralPast: Word('сурьмились', 5),
  imperativeInformal: Word('сурьмись', 5),
  imperativeFormal: Word('сурьмитесь', 5),
  imperfect: [],
};

perfectVerbs.set(сурьмиться.name.text, сурьмиться);

export { сурьмиться };