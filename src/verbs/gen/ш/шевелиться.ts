import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const шевелиться: PerfectVerb = {
  name: Word('шевелиться', 5),
  singular1stPerson: Word('шевелюсь', 5),
  singular2ndPerson: Word('шевелишься', 5),
  singular3rdPerson: Word('шевелится', 5),
  plural1stPerson: Word('шевелимся', 5),
  plural2ndPerson: Word('шевелитесь', 5),
  plural3rdPerson: Word('шевелятся', 5),
  masculinePast: Word('шевелился', 5),
  femininePast: Word('шевелилась', 5),
  neuterPast: Word('шевелилось', 5),
  pluralPast: Word('шевелились', 5),
  imperativeInformal: Word('шевелись', 5),
  imperativeFormal: Word('шевелитесь', 5),
  imperfect: [],
};

perfectVerbs.set(шевелиться.name.text, шевелиться);

export { шевелиться };