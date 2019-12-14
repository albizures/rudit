import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const порешить: PerfectVerb = {
  name: Word('порешить', 5),
  singular1stPerson: Word('порешу', 5),
  singular2ndPerson: Word('порешишь', 5),
  singular3rdPerson: Word('порешит', 5),
  plural1stPerson: Word('порешим', 5),
  plural2ndPerson: Word('порешите', 5),
  plural3rdPerson: Word('порешат', 5),
  masculinePast: Word('порешил', 5),
  femininePast: Word('порешила', 5),
  neuterPast: Word('порешило', 5),
  pluralPast: Word('порешили', 5),
  imperativeInformal: Word('пореши', 5),
  imperativeFormal: Word('порешите', 5),
  imperfect: [],
};

perfectVerbs.set(порешить.name.text, порешить);

export { порешить };