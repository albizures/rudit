import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отсадить: PerfectVerb = {
  name: Word('отсадить', 5),
  singular1stPerson: Word('отсажу', 5),
  singular2ndPerson: Word('отсадишь', 3),
  singular3rdPerson: Word('отсадит', 3),
  plural1stPerson: Word('отсадим', 3),
  plural2ndPerson: Word('отсадите', 3),
  plural3rdPerson: Word('отсадят', 3),
  masculinePast: Word('отсадил', 5),
  femininePast: Word('отсадила', 5),
  neuterPast: Word('отсадило', 5),
  pluralPast: Word('отсадили', 5),
  imperativeInformal: Word('отсади', 5),
  imperativeFormal: Word('отсадите', 5),
  imperfect: [],
};

perfectVerbs.set(отсадить.name.text, отсадить);

export { отсадить };