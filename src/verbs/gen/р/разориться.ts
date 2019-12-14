import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разориться: PerfectVerb = {
  name: Word('разориться', 5),
  singular1stPerson: Word('разорюсь', 5),
  singular2ndPerson: Word('разоришься', 5),
  singular3rdPerson: Word('разорится', 5),
  plural1stPerson: Word('разоримся', 5),
  plural2ndPerson: Word('разоритесь', 5),
  plural3rdPerson: Word('разорятся', 5),
  masculinePast: Word('разорился', 5),
  femininePast: Word('разорилась', 5),
  neuterPast: Word('разорилось', 5),
  pluralPast: Word('разорились', 5),
  imperativeInformal: Word('разорись', 5),
  imperativeFormal: Word('разоритесь', 5),
  imperfect: [],
};

perfectVerbs.set(разориться.name.text, разориться);

export { разориться };