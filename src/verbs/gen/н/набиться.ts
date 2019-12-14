import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const набиться: PerfectVerb = {
  name: Word('набиться', 3),
  singular1stPerson: Word('набьюсь', 4),
  singular2ndPerson: Word('набьёшься', 4),
  singular3rdPerson: Word('набьётся', 4),
  plural1stPerson: Word('набьёмся', 4),
  plural2ndPerson: Word('набьётесь', 4),
  plural3rdPerson: Word('набьются', 4),
  masculinePast: Word('набился', 3),
  femininePast: Word('набилась', 3),
  neuterPast: Word('набилось', 3),
  pluralPast: Word('набились', 3),
  imperativeInformal: Word('набейся', 3),
  imperativeFormal: Word('набейтесь', 3),
  imperfect: [],
};

perfectVerbs.set(набиться.name.text, набиться);

export { набиться };