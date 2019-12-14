import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const тешить: PerfectVerb = {
  name: Word('тешить', 1),
  singular1stPerson: Word('тешу', 1),
  singular2ndPerson: Word('тешишь', 1),
  singular3rdPerson: Word('тешит', 1),
  plural1stPerson: Word('тешим', 1),
  plural2ndPerson: Word('тешите', 1),
  plural3rdPerson: Word('тешат', 1),
  masculinePast: Word('тешил', 1),
  femininePast: Word('тешила', 1),
  neuterPast: Word('тешило', 1),
  pluralPast: Word('тешили', 1),
  imperativeInformal: Word('тешь', 1),
  imperativeFormal: Word('тешьте', 1),
  imperfect: [],
};

perfectVerbs.set(тешить.name.text, тешить);

export { тешить };