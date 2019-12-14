import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const остановить: PerfectVerb = {
  name: Word('остановить', 7),
  singular1stPerson: Word('остановлю', 8),
  singular2ndPerson: Word('остановишь', 5),
  singular3rdPerson: Word('остановит', 5),
  plural1stPerson: Word('остановим', 5),
  plural2ndPerson: Word('остановите', 5),
  plural3rdPerson: Word('остановят', 5),
  masculinePast: Word('остановил', 7),
  femininePast: Word('остановила', 7),
  neuterPast: Word('остановило', 7),
  pluralPast: Word('остановили', 7),
  imperativeInformal: Word('останови', 7),
  imperativeFormal: Word('остановите', 7),
  imperfect: ['останавливать'],
};

perfectVerbs.set(остановить.name.text, остановить);

export { остановить };