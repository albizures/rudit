import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расцветить: PerfectVerb = {
  name: Word('расцветить', 7),
  singular1stPerson: Word('расцвечу', 7),
  singular2ndPerson: Word('расцветишь', 7),
  singular3rdPerson: Word('расцветит', 7),
  plural1stPerson: Word('расцветим', 7),
  plural2ndPerson: Word('расцветите', 7),
  plural3rdPerson: Word('расцветят', 7),
  masculinePast: Word('расцветил', 7),
  femininePast: Word('расцветила', 7),
  neuterPast: Word('расцветило', 7),
  pluralPast: Word('расцветили', 7),
  imperativeInformal: Word('расцвети', 7),
  imperativeFormal: Word('расцветите', 7),
  imperfect: [],
};

perfectVerbs.set(расцветить.name.text, расцветить);

export { расцветить };