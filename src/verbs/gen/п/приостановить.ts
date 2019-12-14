import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приостановить: PerfectVerb = {
  name: Word('приостановить', 10),
  singular1stPerson: Word('приостановлю', 11),
  singular2ndPerson: Word('приостановишь', 8),
  singular3rdPerson: Word('приостановит', 8),
  plural1stPerson: Word('приостановим', 8),
  plural2ndPerson: Word('приостановите', 8),
  plural3rdPerson: Word('приостановят', 8),
  masculinePast: Word('приостановил', 10),
  femininePast: Word('приостановила', 10),
  neuterPast: Word('приостановило', 10),
  pluralPast: Word('приостановили', 10),
  imperativeInformal: Word('приостанови', 10),
  imperativeFormal: Word('приостановите', 10),
  imperfect: [],
};

perfectVerbs.set(приостановить.name.text, приостановить);

export { приостановить };