import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выявиться: PerfectVerb = {
  name: Word('выявиться', 1),
  singular1stPerson: Word('выявлюсь', 1),
  singular2ndPerson: Word('выявишься', 1),
  singular3rdPerson: Word('выявится', 1),
  plural1stPerson: Word('выявимся', 1),
  plural2ndPerson: Word('выявитесь', 1),
  plural3rdPerson: Word('выявятся', 1),
  masculinePast: Word('выявился', 1),
  femininePast: Word('выявилась', 1),
  neuterPast: Word('выявилось', 1),
  pluralPast: Word('выявились', 1),
  imperativeInformal: Word('выявись', 1),
  imperativeFormal: Word('выявитесь', 1),
  imperfect: [],
};

perfectVerbs.set(выявиться.name.text, выявиться);

export { выявиться };