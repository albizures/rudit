import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const убиться: PerfectVerb = {
  name: Word('убиться', 2),
  singular1stPerson: Word('убьюсь', 3),
  singular2ndPerson: Word('убьёшься', 3),
  singular3rdPerson: Word('убьётся', 3),
  plural1stPerson: Word('убьёмся', 3),
  plural2ndPerson: Word('убьётесь', 3),
  plural3rdPerson: Word('убьются', 3),
  masculinePast: Word('убился', 2),
  femininePast: Word('убилась', 2),
  neuterPast: Word('убилось', 2),
  pluralPast: Word('убились', 2),
  imperativeInformal: Word('убейся', 2),
  imperativeFormal: Word('убейтесь', 2),
  imperfect: [],
};

perfectVerbs.set(убиться.name.text, убиться);

export { убиться };