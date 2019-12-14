import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const примчаться: PerfectVerb = {
  name: Word('примчаться', 5),
  singular1stPerson: Word('примчусь', 5),
  singular2ndPerson: Word('примчишься', 5),
  singular3rdPerson: Word('примчится', 5),
  plural1stPerson: Word('примчимся', 5),
  plural2ndPerson: Word('примчитесь', 5),
  plural3rdPerson: Word('примчатся', 5),
  masculinePast: Word('примчался', 5),
  femininePast: Word('примчалась', 5),
  neuterPast: Word('примчалось', 5),
  pluralPast: Word('примчались', 5),
  imperativeInformal: Word('примчись', 5),
  imperativeFormal: Word('примчитесь', 5),
  imperfect: [],
};

perfectVerbs.set(примчаться.name.text, примчаться);

export { примчаться };