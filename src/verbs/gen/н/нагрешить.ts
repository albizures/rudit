import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нагрешить: PerfectVerb = {
  name: Word('нагрешить', 6),
  singular1stPerson: Word('нагрешу', 6),
  singular2ndPerson: Word('нагрешишь', 6),
  singular3rdPerson: Word('нагрешит', 6),
  plural1stPerson: Word('нагрешим', 6),
  plural2ndPerson: Word('нагрешите', 6),
  plural3rdPerson: Word('нагрешат', 6),
  masculinePast: Word('нагрешил', 6),
  femininePast: Word('нагрешила', 6),
  neuterPast: Word('нагрешило', 6),
  pluralPast: Word('нагрешили', 6),
  imperativeInformal: Word('нагреши', 6),
  imperativeFormal: Word('нагрешите', 6),
  imperfect: [],
};

perfectVerbs.set(нагрешить.name.text, нагрешить);

export { нагрешить };