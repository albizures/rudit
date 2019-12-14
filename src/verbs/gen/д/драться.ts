import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const драться: PerfectVerb = {
  name: Word('драться', 2),
  singular1stPerson: Word('дерусь', 3),
  singular2ndPerson: Word('дерёшься', 3),
  singular3rdPerson: Word('дерётся', 3),
  plural1stPerson: Word('дерёмся', 3),
  plural2ndPerson: Word('дерётесь', 3),
  plural3rdPerson: Word('дерутся', 3),
  masculinePast: Word('дрался', 2),
  femininePast: Word('дралась', 4),
  neuterPast: Word('дралось', 2),
  pluralPast: Word('дрались', 2),
  imperativeInformal: Word('дерись', 3),
  imperativeFormal: Word('деритесь', 3),
  imperfect: ['подраться'],
};

perfectVerbs.set(драться.name.text, драться);

export { драться };