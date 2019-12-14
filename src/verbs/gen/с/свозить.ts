import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const свозить: PerfectVerb = {
  name: Word('свозить', 4),
  singular1stPerson: Word('свожу', 4),
  singular2ndPerson: Word('свозишь', 2),
  singular3rdPerson: Word('свозит', 2),
  plural1stPerson: Word('свозим', 2),
  plural2ndPerson: Word('свозите', 2),
  plural3rdPerson: Word('свозят', 2),
  masculinePast: Word('свозил', 4),
  femininePast: Word('свозила', 4),
  neuterPast: Word('свозило', 4),
  pluralPast: Word('свозили', 4),
  imperativeInformal: Word('свози', 4),
  imperativeFormal: Word('свозите', 4),
  imperfect: [],
};

perfectVerbs.set(свозить.name.text, свозить);

export { свозить };