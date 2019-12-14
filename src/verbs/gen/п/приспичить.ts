import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приспичить: PerfectVerb = {
  name: Word('приспичить', 5),
  singular1stPerson: Word('приспичу', 5),
  singular2ndPerson: Word('приспичишь', 5),
  singular3rdPerson: Word('приспичит', 5),
  plural1stPerson: Word('приспичим', 5),
  plural2ndPerson: Word('приспичите', 5),
  plural3rdPerson: Word('приспичат', 5),
  masculinePast: Word('приспичил', 5),
  femininePast: Word('приспичила', 5),
  neuterPast: Word('приспичило', 5),
  pluralPast: Word('приспичили', 5),
  imperativeInformal: Word('приспичь', 5),
  imperativeFormal: Word('приспичьте', 5),
  imperfect: [],
};

perfectVerbs.set(приспичить.name.text, приспичить);

export { приспичить };