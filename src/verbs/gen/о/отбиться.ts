import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отбиться: PerfectVerb = {
  name: Word('отбиться', 3),
  singular1stPerson: Word('отобьюсь', 5),
  singular2ndPerson: Word('отобьёшься', 0),
  singular3rdPerson: Word('отобьётся', 0),
  plural1stPerson: Word('отобьёмся', 0),
  plural2ndPerson: Word('отобьётесь', 7),
  plural3rdPerson: Word('отобьются', 5),
  masculinePast: Word('отбился', 3),
  femininePast: Word('отбилась', 3),
  neuterPast: Word('отбилось', 3),
  pluralPast: Word('отбились', 3),
  imperativeInformal: Word('отбейся', 3),
  imperativeFormal: Word('отбейтесь', 3),
  imperfect: [],
};

perfectVerbs.set(отбиться.name.text, отбиться);

export { отбиться };