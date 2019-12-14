import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сузить: PerfectVerb = {
  name: Word('сузить', 1),
  singular1stPerson: Word('сужу', 1),
  singular2ndPerson: Word('сузишь', 1),
  singular3rdPerson: Word('сузит', 1),
  plural1stPerson: Word('сузим', 1),
  plural2ndPerson: Word('сузите', 1),
  plural3rdPerson: Word('сузят', 1),
  masculinePast: Word('сузил', 1),
  femininePast: Word('сузила', 1),
  neuterPast: Word('сузило', 1),
  pluralPast: Word('сузили', 1),
  imperativeInformal: Word('сузь', 1),
  imperativeFormal: Word('сузьте', 1),
  imperfect: [],
};

perfectVerbs.set(сузить.name.text, сузить);

export { сузить };