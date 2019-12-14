import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отхватить: PerfectVerb = {
  name: Word('отхватить', 6),
  singular1stPerson: Word('отхвачу', 6),
  singular2ndPerson: Word('отхватишь', 4),
  singular3rdPerson: Word('отхватит', 4),
  plural1stPerson: Word('отхватим', 4),
  plural2ndPerson: Word('отхватите', 4),
  plural3rdPerson: Word('отхватят', 4),
  masculinePast: Word('отхватил', 6),
  femininePast: Word('отхватила', 6),
  neuterPast: Word('отхватило', 6),
  pluralPast: Word('отхватили', 6),
  imperativeInformal: Word('отхвати', 6),
  imperativeFormal: Word('отхватите', 6),
  imperfect: [],
};

perfectVerbs.set(отхватить.name.text, отхватить);

export { отхватить };