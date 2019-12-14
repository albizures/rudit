import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const созвониться: PerfectVerb = {
  name: Word('созвониться', 6),
  singular1stPerson: Word('созвонюсь', 6),
  singular2ndPerson: Word('созвонишься', 6),
  singular3rdPerson: Word('созвонится', 6),
  plural1stPerson: Word('созвонимся', 6),
  plural2ndPerson: Word('созвонитесь', 6),
  plural3rdPerson: Word('созвонятся', 6),
  masculinePast: Word('созвонился', 6),
  femininePast: Word('созвонилась', 6),
  neuterPast: Word('созвонилось', 6),
  pluralPast: Word('созвонились', 6),
  imperativeInformal: Word('созвонись', 6),
  imperativeFormal: Word('созвонитесь', 6),
  imperfect: [],
};

perfectVerbs.set(созвониться.name.text, созвониться);

export { созвониться };