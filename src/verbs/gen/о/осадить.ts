import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const осадить: PerfectVerb = {
  name: Word('осадить', 4),
  singular1stPerson: Word('осажу', 4),
  singular2ndPerson: Word('осадишь', 2),
  singular3rdPerson: Word('осадит', 2),
  plural1stPerson: Word('осадим', 2),
  plural2ndPerson: Word('осадите', 2),
  plural3rdPerson: Word('осадят', 2),
  masculinePast: Word('осадил', 4),
  femininePast: Word('осадила', 4),
  neuterPast: Word('осадило', 4),
  pluralPast: Word('осадили', 4),
  imperativeInformal: Word('осади', 4),
  imperativeFormal: Word('осадите', 4),
  imperfect: [],
};

perfectVerbs.set(осадить.name.text, осадить);

export { осадить };