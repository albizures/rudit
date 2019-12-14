import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бубнить: PerfectVerb = {
  name: Word('бубнить', 4),
  singular1stPerson: Word('бубню', 4),
  singular2ndPerson: Word('бубнишь', 4),
  singular3rdPerson: Word('бубнит', 4),
  plural1stPerson: Word('бубним', 4),
  plural2ndPerson: Word('бубните', 4),
  plural3rdPerson: Word('бубнят', 4),
  masculinePast: Word('бубнил', 4),
  femininePast: Word('бубнила', 4),
  neuterPast: Word('бубнило', 4),
  pluralPast: Word('бубнили', 4),
  imperativeInformal: Word('бубни', 4),
  imperativeFormal: Word('бубните', 4),
  imperfect: [],
};

perfectVerbs.set(бубнить.name.text, бубнить);

export { бубнить };