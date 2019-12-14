import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выпялиться: PerfectVerb = {
  name: Word('выпялиться', 1),
  singular1stPerson: Word('выпялюсь', 1),
  singular2ndPerson: Word('выпялишься', 1),
  singular3rdPerson: Word('выпялится', 1),
  plural1stPerson: Word('выпялимся', 1),
  plural2ndPerson: Word('выпялитесь', 1),
  plural3rdPerson: Word('выпялятся', 1),
  masculinePast: Word('выпялился', 1),
  femininePast: Word('выпялилась', 1),
  neuterPast: Word('выпялилось', 1),
  pluralPast: Word('выпялились', 1),
  imperativeInformal: Word('выпялись', 1),
  imperativeFormal: Word('выпяльтесь', 1),
  imperfect: [],
};

perfectVerbs.set(выпялиться.name.text, выпялиться);

export { выпялиться };