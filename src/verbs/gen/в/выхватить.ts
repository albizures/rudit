import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выхватить: PerfectVerb = {
  name: Word('выхватить', 1),
  singular1stPerson: Word('выхвачу', 1),
  singular2ndPerson: Word('выхватишь', 1),
  singular3rdPerson: Word('выхватит', 1),
  plural1stPerson: Word('выхватим', 1),
  plural2ndPerson: Word('выхватите', 1),
  plural3rdPerson: Word('выхватят', 1),
  masculinePast: Word('выхватил', 1),
  femininePast: Word('выхватила', 1),
  neuterPast: Word('выхватило', 1),
  pluralPast: Word('выхватили', 1),
  imperativeInformal: Word('выхвати', 1),
  imperativeFormal: Word('выхватите', 1),
  imperfect: [],
};

perfectVerbs.set(выхватить.name.text, выхватить);

export { выхватить };