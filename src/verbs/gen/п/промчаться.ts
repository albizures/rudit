import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const промчаться: PerfectVerb = {
  name: Word('промчаться', 5),
  singular1stPerson: Word('промчусь', 5),
  singular2ndPerson: Word('промчишься', 5),
  singular3rdPerson: Word('промчится', 5),
  plural1stPerson: Word('промчимся', 5),
  plural2ndPerson: Word('промчитесь', 5),
  plural3rdPerson: Word('промчатся', 5),
  masculinePast: Word('промчался', 5),
  femininePast: Word('промчалась', 5),
  neuterPast: Word('промчалось', 5),
  pluralPast: Word('промчались', 5),
  imperativeInformal: Word('промчись', 5),
  imperativeFormal: Word('промчитесь', 5),
  imperfect: [],
};

perfectVerbs.set(промчаться.name.text, промчаться);

export { промчаться };