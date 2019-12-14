import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спешить: PerfectVerb = {
  name: Word('спешить', 4),
  singular1stPerson: Word('спешу', 4),
  singular2ndPerson: Word('спешишь', 4),
  singular3rdPerson: Word('спешит', 4),
  plural1stPerson: Word('спешим', 4),
  plural2ndPerson: Word('спешите', 4),
  plural3rdPerson: Word('спешат', 4),
  masculinePast: Word('спешил', 4),
  femininePast: Word('спешила', 4),
  neuterPast: Word('спешило', 4),
  pluralPast: Word('спешили', 4),
  imperativeInformal: Word('спеши', 4),
  imperativeFormal: Word('спешите', 4),
  imperfect: ['поспешить'],
};

perfectVerbs.set(спешить.name.text, спешить);

export { спешить };