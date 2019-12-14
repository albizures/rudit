import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обхватить: PerfectVerb = {
  name: Word('обхватить', 6),
  singular1stPerson: Word('обхвачу', 6),
  singular2ndPerson: Word('обхватишь', 4),
  singular3rdPerson: Word('обхватит', 4),
  plural1stPerson: Word('обхватим', 4),
  plural2ndPerson: Word('обхватите', 4),
  plural3rdPerson: Word('обхватят', 4),
  masculinePast: Word('обхватил', 6),
  femininePast: Word('обхватила', 6),
  neuterPast: Word('обхватило', 6),
  pluralPast: Word('обхватили', 6),
  imperativeInformal: Word('обхвати', 6),
  imperativeFormal: Word('обхватите', 6),
  imperfect: [],
};

perfectVerbs.set(обхватить.name.text, обхватить);

export { обхватить };