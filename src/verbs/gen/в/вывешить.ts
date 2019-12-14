import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вывешить: PerfectVerb = {
  name: Word('вывешить', 1),
  singular1stPerson: Word('вывешу', 1),
  singular2ndPerson: Word('вывешишь', 1),
  singular3rdPerson: Word('вывешит', 1),
  plural1stPerson: Word('вывешим', 1),
  plural2ndPerson: Word('вывешите', 1),
  plural3rdPerson: Word('вывешат', 1),
  masculinePast: Word('вывешил', 1),
  femininePast: Word('вывешила', 1),
  neuterPast: Word('вывешило', 1),
  pluralPast: Word('вывешили', 1),
  imperativeInformal: Word('вывеши', 1),
  imperativeFormal: Word('вывешите', 1),
  imperfect: [],
};

perfectVerbs.set(вывешить.name.text, вывешить);

export { вывешить };