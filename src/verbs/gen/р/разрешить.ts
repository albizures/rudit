import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разрешить: PerfectVerb = {
  name: Word('разрешить', 6),
  singular1stPerson: Word('разрешу', 6),
  singular2ndPerson: Word('разрешишь', 6),
  singular3rdPerson: Word('разрешит', 6),
  plural1stPerson: Word('разрешим', 6),
  plural2ndPerson: Word('разрешите', 6),
  plural3rdPerson: Word('разрешат', 6),
  masculinePast: Word('разрешил', 6),
  femininePast: Word('разрешила', 6),
  neuterPast: Word('разрешило', 6),
  pluralPast: Word('разрешили', 6),
  imperativeInformal: Word('разреши', 6),
  imperativeFormal: Word('разрешите', 6),
  imperfect: ['разрешать'],
};

perfectVerbs.set(разрешить.name.text, разрешить);

export { разрешить };