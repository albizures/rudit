import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const грешить: PerfectVerb = {
  name: Word('грешить', 4),
  singular1stPerson: Word('грешу', 4),
  singular2ndPerson: Word('грешишь', 4),
  singular3rdPerson: Word('грешит', 4),
  plural1stPerson: Word('грешим', 4),
  plural2ndPerson: Word('грешите', 4),
  plural3rdPerson: Word('грешат', 4),
  masculinePast: Word('грешил', 4),
  femininePast: Word('грешила', 4),
  neuterPast: Word('грешило', 4),
  pluralPast: Word('грешили', 4),
  imperativeInformal: Word('греши', 4),
  imperativeFormal: Word('грешите', 4),
  imperfect: ['согрешить'],
};

perfectVerbs.set(грешить.name.text, грешить);

export { грешить };