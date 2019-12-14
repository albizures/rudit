import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поспешить: PerfectVerb = {
  name: Word('поспешить', 6),
  singular1stPerson: Word('поспешу', 6),
  singular2ndPerson: Word('поспешишь', 6),
  singular3rdPerson: Word('поспешит', 6),
  plural1stPerson: Word('поспешим', 6),
  plural2ndPerson: Word('поспешите', 6),
  plural3rdPerson: Word('поспешат', 6),
  masculinePast: Word('поспешил', 6),
  femininePast: Word('поспешила', 6),
  neuterPast: Word('поспешило', 6),
  pluralPast: Word('поспешили', 6),
  imperativeInformal: Word('поспеши', 6),
  imperativeFormal: Word('поспешите', 6),
  imperfect: [],
};

perfectVerbs.set(поспешить.name.text, поспешить);

export { поспешить };