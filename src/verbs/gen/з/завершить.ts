import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const завершить: PerfectVerb = {
  name: Word('завершить', 6),
  singular1stPerson: Word('завершу', 6),
  singular2ndPerson: Word('завершишь', 6),
  singular3rdPerson: Word('завершит', 6),
  plural1stPerson: Word('завершим', 6),
  plural2ndPerson: Word('завершите', 6),
  plural3rdPerson: Word('завершат', 6),
  masculinePast: Word('завершил', 6),
  femininePast: Word('завершила', 6),
  neuterPast: Word('завершило', 6),
  pluralPast: Word('завершили', 6),
  imperativeInformal: Word('заверши', 6),
  imperativeFormal: Word('завершите', 6),
  imperfect: ['завершать'],
};

perfectVerbs.set(завершить.name.text, завершить);

export { завершить };