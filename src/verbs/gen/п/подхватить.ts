import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подхватить: PerfectVerb = {
  name: Word('подхватить', 7),
  singular1stPerson: Word('подхвачу', 7),
  singular2ndPerson: Word('подхватишь', 5),
  singular3rdPerson: Word('подхватит', 5),
  plural1stPerson: Word('подхватим', 5),
  plural2ndPerson: Word('подхватите', 5),
  plural3rdPerson: Word('подхватят', 5),
  masculinePast: Word('подхватил', 7),
  femininePast: Word('подхватила', 7),
  neuterPast: Word('подхватило', 7),
  pluralPast: Word('подхватили', 7),
  imperativeInformal: Word('подхвати', 7),
  imperativeFormal: Word('подхватите', 7),
  imperfect: ['подхватывать'],
};

perfectVerbs.set(подхватить.name.text, подхватить);

export { подхватить };