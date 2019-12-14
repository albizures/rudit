import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const домчаться: PerfectVerb = {
  name: Word('домчаться', 4),
  singular1stPerson: Word('домчусь', 4),
  singular2ndPerson: Word('домчишься', 4),
  singular3rdPerson: Word('домчится', 4),
  plural1stPerson: Word('домчимся', 4),
  plural2ndPerson: Word('домчитесь', 4),
  plural3rdPerson: Word('домчатся', 4),
  masculinePast: Word('домчался', 4),
  femininePast: Word('домчалась', 4),
  neuterPast: Word('домчалось', 4),
  pluralPast: Word('домчались', 4),
  imperativeInformal: Word('домчись', 4),
  imperativeFormal: Word('домчитесь', 4),
  imperfect: [],
};

perfectVerbs.set(домчаться.name.text, домчаться);

export { домчаться };