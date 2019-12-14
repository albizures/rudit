import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обсадить: PerfectVerb = {
  name: Word('обсадить', 5),
  singular1stPerson: Word('обсажу', 5),
  singular2ndPerson: Word('обсадишь', 3),
  singular3rdPerson: Word('обсадит', 3),
  plural1stPerson: Word('обсадим', 3),
  plural2ndPerson: Word('обсадите', 3),
  plural3rdPerson: Word('обсадят', 3),
  masculinePast: Word('обсадил', 5),
  femininePast: Word('обсадила', 5),
  neuterPast: Word('обсадило', 5),
  pluralPast: Word('обсадили', 5),
  imperativeInformal: Word('обсади', 5),
  imperativeFormal: Word('обсадите', 5),
  imperfect: [],
};

perfectVerbs.set(обсадить.name.text, обсадить);

export { обсадить };