import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зачистить: PerfectVerb = {
  name: Word('зачистить', 3),
  singular1stPerson: Word('зачищу', 3),
  singular2ndPerson: Word('зачистишь', 3),
  singular3rdPerson: Word('зачистит', 3),
  plural1stPerson: Word('зачистим', 3),
  plural2ndPerson: Word('зачистите', 3),
  plural3rdPerson: Word('зачистят', 3),
  masculinePast: Word('зачистил', 3),
  femininePast: Word('зачистила', 3),
  neuterPast: Word('зачистило', 3),
  pluralPast: Word('зачистили', 3),
  imperativeInformal: Word('зачисти//зачи'сть', 3),
  imperativeFormal: Word('зачи'стите//за'чи'стьте', 1),
  imperfect: [],
};

perfectVerbs.set(зачистить.name.text, зачистить);

export { зачистить };