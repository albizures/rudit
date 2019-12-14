import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разворчаться: PerfectVerb = {
  name: Word('разворчаться', 7),
  singular1stPerson: Word('разворчусь', 7),
  singular2ndPerson: Word('разворчишься', 7),
  singular3rdPerson: Word('разворчится', 7),
  plural1stPerson: Word('разворчимся', 7),
  plural2ndPerson: Word('разворчитесь', 7),
  plural3rdPerson: Word('разворчатся', 7),
  masculinePast: Word('разворчался', 7),
  femininePast: Word('разворчалась', 7),
  neuterPast: Word('разворчалось', 7),
  pluralPast: Word('разворчались', 7),
  imperativeInformal: Word('разворчись', 7),
  imperativeFormal: Word('разворчитесь', 7),
  imperfect: [],
};

perfectVerbs.set(разворчаться.name.text, разворчаться);

export { разворчаться };