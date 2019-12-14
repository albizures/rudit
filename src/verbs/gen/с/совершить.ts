import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const совершить: PerfectVerb = {
  name: Word('совершить', 6),
  singular1stPerson: Word('совершу', 6),
  singular2ndPerson: Word('совершишь', 6),
  singular3rdPerson: Word('совершит', 6),
  plural1stPerson: Word('совершим', 6),
  plural2ndPerson: Word('совершите', 6),
  plural3rdPerson: Word('совершат', 6),
  masculinePast: Word('совершил', 6),
  femininePast: Word('совершила', 6),
  neuterPast: Word('совершило', 6),
  pluralPast: Word('совершили', 6),
  imperativeInformal: Word('соверши', 6),
  imperativeFormal: Word('совершите', 6),
  imperfect: ['совершать'],
};

perfectVerbs.set(совершить.name.text, совершить);

export { совершить };