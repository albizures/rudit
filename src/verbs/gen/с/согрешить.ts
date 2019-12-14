import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const согрешить: PerfectVerb = {
  name: Word('согрешить', 6),
  singular1stPerson: Word('согрешу', 6),
  singular2ndPerson: Word('согрешишь', 6),
  singular3rdPerson: Word('согрешит', 6),
  plural1stPerson: Word('согрешим', 6),
  plural2ndPerson: Word('согрешите', 6),
  plural3rdPerson: Word('согрешат', 6),
  masculinePast: Word('согрешил', 6),
  femininePast: Word('согрешила', 6),
  neuterPast: Word('согрешило', 6),
  pluralPast: Word('согрешили', 6),
  imperativeInformal: Word('согреши', 6),
  imperativeFormal: Word('согрешите', 6),
  imperfect: ['грешить'],
};

perfectVerbs.set(согрешить.name.text, согрешить);

export { согрешить };