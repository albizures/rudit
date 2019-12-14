import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const постановить: PerfectVerb = {
  name: Word('постановить', 8),
  singular1stPerson: Word('постановлю', 9),
  singular2ndPerson: Word('постановишь', 6),
  singular3rdPerson: Word('постановит', 6),
  plural1stPerson: Word('постановим', 6),
  plural2ndPerson: Word('постановите', 6),
  plural3rdPerson: Word('постановят', 6),
  masculinePast: Word('постановил', 8),
  femininePast: Word('постановила', 8),
  neuterPast: Word('постановило', 8),
  pluralPast: Word('постановили', 8),
  imperativeInformal: Word('постанови', 8),
  imperativeFormal: Word('постановите', 8),
  imperfect: [],
};

perfectVerbs.set(постановить.name.text, постановить);

export { постановить };