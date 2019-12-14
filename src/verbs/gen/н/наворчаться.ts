import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наворчаться: PerfectVerb = {
  name: Word('наворчаться', 6),
  singular1stPerson: Word('наворчусь', 6),
  singular2ndPerson: Word('наворчишься', 6),
  singular3rdPerson: Word('наворчится', 6),
  plural1stPerson: Word('наворчимся', 6),
  plural2ndPerson: Word('наворчитесь', 6),
  plural3rdPerson: Word('наворчатся', 6),
  masculinePast: Word('наворчался', 6),
  femininePast: Word('наворчалась', 6),
  neuterPast: Word('наворчалось', 6),
  pluralPast: Word('наворчались', 6),
  imperativeInformal: Word('наворчись', 6),
  imperativeFormal: Word('наворчитесь', 6),
  imperfect: [],
};

perfectVerbs.set(наворчаться.name.text, наворчаться);

export { наворчаться };