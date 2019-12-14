import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обуглиться: PerfectVerb = {
  name: Word('обуглиться', 2),
  singular1stPerson: Word('обуглюсь', 2),
  singular2ndPerson: Word('обуглишься', 2),
  singular3rdPerson: Word('обуглится', 2),
  plural1stPerson: Word('обуглимся', 2),
  plural2ndPerson: Word('обуглитесь', 2),
  plural3rdPerson: Word('обуглятся', 2),
  masculinePast: Word('обуглился', 2),
  femininePast: Word('обуглилась', 2),
  neuterPast: Word('обуглилось', 2),
  pluralPast: Word('обуглились', 2),
  imperativeInformal: Word('обуглись', 2),
  imperativeFormal: Word('обуглитесь', 2),
  imperfect: [],
};

perfectVerbs.set(обуглиться.name.text, обуглиться);

export { обуглиться };