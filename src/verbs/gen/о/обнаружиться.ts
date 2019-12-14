import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обнаружиться: PerfectVerb = {
  name: Word('обнаружиться', 5),
  singular1stPerson: Word('обнаружусь', 5),
  singular2ndPerson: Word('обнаружишься', 5),
  singular3rdPerson: Word('обнаружится', 5),
  plural1stPerson: Word('обнаружимся', 5),
  plural2ndPerson: Word('обнаружитесь', 5),
  plural3rdPerson: Word('обнаружатся', 5),
  masculinePast: Word('обнаружился', 5),
  femininePast: Word('обнаружилась', 5),
  neuterPast: Word('обнаружилось', 5),
  pluralPast: Word('обнаружились', 5),
  imperativeInformal: Word('обнаружься', 5),
  imperativeFormal: Word('обнаружьтесь', 5),
  imperfect: [],
};

perfectVerbs.set(обнаружиться.name.text, обнаружиться);

export { обнаружиться };