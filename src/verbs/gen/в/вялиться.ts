import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вялиться: PerfectVerb = {
  name: Word('вялиться', 1),
  singular1stPerson: Word('вялюсь', 1),
  singular2ndPerson: Word('вялишься', 1),
  singular3rdPerson: Word('вялится', 1),
  plural1stPerson: Word('вялимся', 1),
  plural2ndPerson: Word('вялитесь', 1),
  plural3rdPerson: Word('вялятся', 1),
  masculinePast: Word('вялился', 1),
  femininePast: Word('вялилась', 1),
  neuterPast: Word('вялилось', 1),
  pluralPast: Word('вялились', 1),
  imperativeInformal: Word('вялься', 1),
  imperativeFormal: Word('вяльтесь', 1),
  imperfect: [],
};

perfectVerbs.set(вялиться.name.text, вялиться);

export { вялиться };