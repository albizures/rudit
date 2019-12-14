import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подивиться: PerfectVerb = {
  name: Word('подивиться', 5),
  singular1stPerson: Word('подивлюсь', 6),
  singular2ndPerson: Word('подивишься', 5),
  singular3rdPerson: Word('подивится', 5),
  plural1stPerson: Word('подивимся', 5),
  plural2ndPerson: Word('подивитесь', 5),
  plural3rdPerson: Word('подивятся', 5),
  masculinePast: Word('подивился', 5),
  femininePast: Word('подивилась', 5),
  neuterPast: Word('подивилось', 5),
  pluralPast: Word('подивились', 5),
  imperativeInformal: Word('подивись', 5),
  imperativeFormal: Word('подивитесь', 5),
  imperfect: [],
};

perfectVerbs.set(подивиться.name.text, подивиться);

export { подивиться };