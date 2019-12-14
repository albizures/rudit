import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расширить: PerfectVerb = {
  name: Word('расширить', 4),
  singular1stPerson: Word('расширю', 4),
  singular2ndPerson: Word('расширишь', 4),
  singular3rdPerson: Word('расширит', 4),
  plural1stPerson: Word('расширим', 4),
  plural2ndPerson: Word('расширите', 4),
  plural3rdPerson: Word('расширят', 4),
  masculinePast: Word('расширил', 4),
  femininePast: Word('расширила', 4),
  neuterPast: Word('расширило', 4),
  pluralPast: Word('расширили', 4),
  imperativeInformal: Word('расширь', 4),
  imperativeFormal: Word('расширьте', 4),
  imperfect: ['расширять'],
};

perfectVerbs.set(расширить.name.text, расширить);

export { расширить };