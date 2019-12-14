import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раздражиться: PerfectVerb = {
  name: Word('раздражиться', 7),
  singular1stPerson: Word('раздражусь', 7),
  singular2ndPerson: Word('раздражишься', 7),
  singular3rdPerson: Word('раздражится', 7),
  plural1stPerson: Word('раздражимся', 7),
  plural2ndPerson: Word('раздражитесь', 7),
  plural3rdPerson: Word('раздражатся', 7),
  masculinePast: Word('раздражился', 7),
  femininePast: Word('раздражилась', 7),
  neuterPast: Word('раздражилось', 7),
  pluralPast: Word('раздражились', 7),
  imperativeInformal: Word('раздражись', 7),
  imperativeFormal: Word('раздражитесь', 7),
  imperfect: [],
};

perfectVerbs.set(раздражиться.name.text, раздражиться);

export { раздражиться };