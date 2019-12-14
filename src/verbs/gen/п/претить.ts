import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const претить: PerfectVerb = {
  name: Word('претить', 4),
  singular1stPerson: Word('пречу', 4),
  singular2ndPerson: Word('претишь', 4),
  singular3rdPerson: Word('претит', 4),
  plural1stPerson: Word('претим', 4),
  plural2ndPerson: Word('претите', 4),
  plural3rdPerson: Word('претят', 4),
  masculinePast: Word('претил', 4),
  femininePast: Word('претила', 4),
  neuterPast: Word('претило', 4),
  pluralPast: Word('претили', 4),
  imperativeInformal: Word('прети', 4),
  imperativeFormal: Word('претите', 4),
  imperfect: [],
};

perfectVerbs.set(претить.name.text, претить);

export { претить };