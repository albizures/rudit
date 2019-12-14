import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const окургузить: PerfectVerb = {
  name: Word('окургузить', 5),
  singular1stPerson: Word('окургужу', 5),
  singular2ndPerson: Word('окургузишь', 5),
  singular3rdPerson: Word('окургузит', 5),
  plural1stPerson: Word('окургузим', 5),
  plural2ndPerson: Word('окургузите', 5),
  plural3rdPerson: Word('окургузят', 5),
  masculinePast: Word('окургузил', 5),
  femininePast: Word('окургузила', 5),
  neuterPast: Word('окургузило', 5),
  pluralPast: Word('окургузили', 5),
  imperativeInformal: Word('окургузь', 5),
  imperativeFormal: Word('окургузьте', 5),
  imperfect: [],
};

perfectVerbs.set(окургузить.name.text, окургузить);

export { окургузить };