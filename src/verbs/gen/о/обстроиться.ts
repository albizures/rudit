import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обстроиться: PerfectVerb = {
  name: Word('обстроиться', 5),
  singular1stPerson: Word('обстроюсь', 5),
  singular2ndPerson: Word('обстроишься', 5),
  singular3rdPerson: Word('обстроится', 5),
  plural1stPerson: Word('обстроимся', 5),
  plural2ndPerson: Word('обстроитесь', 5),
  plural3rdPerson: Word('обстроятся', 5),
  masculinePast: Word('обстроился', 5),
  femininePast: Word('обстроилась', 5),
  neuterPast: Word('обстроилось', 5),
  pluralPast: Word('обстроились', 5),
  imperativeInformal: Word('обстройся', 5),
  imperativeFormal: Word('обстройтесь', 5),
  imperfect: [],
};

perfectVerbs.set(обстроиться.name.text, обстроиться);

export { обстроиться };