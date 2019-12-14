import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const смешить: PerfectVerb = {
  name: Word('смешить', 4),
  singular1stPerson: Word('смешу', 4),
  singular2ndPerson: Word('смешишь', 4),
  singular3rdPerson: Word('смешит', 4),
  plural1stPerson: Word('смешим', 4),
  plural2ndPerson: Word('смешите', 4),
  plural3rdPerson: Word('смешат', 4),
  masculinePast: Word('смешил', 4),
  femininePast: Word('смешила', 4),
  neuterPast: Word('смешило', 4),
  pluralPast: Word('смешили', 4),
  imperativeInformal: Word('смеши', 4),
  imperativeFormal: Word('смешите', 4),
  imperfect: [],
};

perfectVerbs.set(смешить.name.text, смешить);

export { смешить };