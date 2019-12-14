import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вешить: PerfectVerb = {
  name: Word('вешить', 3),
  singular1stPerson: Word('вешу', 3),
  singular2ndPerson: Word('вешишь', 3),
  singular3rdPerson: Word('вешит', 3),
  plural1stPerson: Word('вешим', 3),
  plural2ndPerson: Word('вешите', 3),
  plural3rdPerson: Word('вешат', 3),
  masculinePast: Word('вешил', 3),
  femininePast: Word('вешила', 3),
  neuterPast: Word('вешило', 3),
  pluralPast: Word('вешили', 3),
  imperativeInformal: Word('веши', 3),
  imperativeFormal: Word('вешите', 3),
  imperfect: [],
};

perfectVerbs.set(вешить.name.text, вешить);

export { вешить };