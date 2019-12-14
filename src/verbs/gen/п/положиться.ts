import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const положиться: PerfectVerb = {
  name: Word('положиться', 5),
  singular1stPerson: Word('положусь', 5),
  singular2ndPerson: Word('положишься', 3),
  singular3rdPerson: Word('положится', 3),
  plural1stPerson: Word('положимся', 3),
  plural2ndPerson: Word('положитесь', 3),
  plural3rdPerson: Word('положатся', 3),
  masculinePast: Word('положился', 5),
  femininePast: Word('положилась', 5),
  neuterPast: Word('положилось', 5),
  pluralPast: Word('положились', 5),
  imperativeInformal: Word('положись', 5),
  imperativeFormal: Word('положитесь', 5),
  imperfect: [],
};

perfectVerbs.set(положиться.name.text, положиться);

export { положиться };