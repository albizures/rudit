import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const теребить: PerfectVerb = {
  name: Word('теребить', 5),
  singular1stPerson: Word('тереблю', 6),
  singular2ndPerson: Word('теребишь', 5),
  singular3rdPerson: Word('теребит', 5),
  plural1stPerson: Word('теребим', 5),
  plural2ndPerson: Word('теребите', 5),
  plural3rdPerson: Word('теребят', 5),
  masculinePast: Word('теребил', 5),
  femininePast: Word('теребила', 5),
  neuterPast: Word('теребило', 5),
  pluralPast: Word('теребили', 5),
  imperativeInformal: Word('тереби', 5),
  imperativeFormal: Word('теребите', 5),
  imperfect: [],
};

perfectVerbs.set(теребить.name.text, теребить);

export { теребить };