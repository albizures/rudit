import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const осветить: PerfectVerb = {
  name: Word('осветить', 5),
  singular1stPerson: Word('освещу', 5),
  singular2ndPerson: Word('осветишь', 5),
  singular3rdPerson: Word('осветит', 5),
  plural1stPerson: Word('осветим', 5),
  plural2ndPerson: Word('осветите', 5),
  plural3rdPerson: Word('осветят', 5),
  masculinePast: Word('осветил', 5),
  femininePast: Word('осветила', 5),
  neuterPast: Word('осветило', 5),
  pluralPast: Word('осветили', 5),
  imperativeInformal: Word('освети', 5),
  imperativeFormal: Word('осветите', 5),
  imperfect: [],
};

perfectVerbs.set(осветить.name.text, осветить);

export { осветить };