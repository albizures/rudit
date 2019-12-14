import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const контузить: PerfectVerb = {
  name: Word('контузить', 4),
  singular1stPerson: Word('контужу', 4),
  singular2ndPerson: Word('контузишь', 4),
  singular3rdPerson: Word('контузит', 4),
  plural1stPerson: Word('контузим', 4),
  plural2ndPerson: Word('контузите', 4),
  plural3rdPerson: Word('контузят', 4),
  masculinePast: Word('контузил', 4),
  femininePast: Word('контузила', 4),
  neuterPast: Word('контузило', 4),
  pluralPast: Word('контузили', 4),
  imperativeInformal: Word('контузь', 4),
  imperativeFormal: Word('контузьте', 4),
  imperfect: [],
};

perfectVerbs.set(контузить.name.text, контузить);

export { контузить };