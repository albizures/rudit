import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разораться: PerfectVerb = {
  name: Word('разораться', 5),
  singular1stPerson: Word('разорусь', 5),
  singular2ndPerson: Word('разорёшься', 1),
  singular3rdPerson: Word('разорётся', 1),
  plural1stPerson: Word('разорёмся', 1),
  plural2ndPerson: Word('разорётесь', 1),
  plural3rdPerson: Word('разорутся', 5),
  masculinePast: Word('разорался', 5),
  femininePast: Word('разоралась', 5),
  neuterPast: Word('разоралось', 5),
  pluralPast: Word('разорались', 5),
  imperativeInformal: Word('разорись', 5),
  imperativeFormal: Word('разоритесь', 5),
  imperfect: [],
};

perfectVerbs.set(разораться.name.text, разораться);

export { разораться };