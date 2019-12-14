import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const помчаться: PerfectVerb = {
  name: Word('помчаться', 4),
  singular1stPerson: Word('помчусь', 4),
  singular2ndPerson: Word('помчишься', 4),
  singular3rdPerson: Word('помчится', 4),
  plural1stPerson: Word('помчимся', 4),
  plural2ndPerson: Word('помчитесь', 4),
  plural3rdPerson: Word('помчатся', 4),
  masculinePast: Word('помчался', 4),
  femininePast: Word('помчалась', 4),
  neuterPast: Word('помчалось', 4),
  pluralPast: Word('помчались', 4),
  imperativeInformal: Word('помчись', 4),
  imperativeFormal: Word('помчитесь', 4),
  imperfect: [],
};

perfectVerbs.set(помчаться.name.text, помчаться);

export { помчаться };