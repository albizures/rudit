import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const надсадить: PerfectVerb = {
  name: Word('надсадить', 6),
  singular1stPerson: Word('надсажу', 6),
  singular2ndPerson: Word('надсадишь', 4),
  singular3rdPerson: Word('надсадит', 4),
  plural1stPerson: Word('надсадим', 4),
  plural2ndPerson: Word('надсадите', 4),
  plural3rdPerson: Word('надсадят', 4),
  masculinePast: Word('надсадил', 6),
  femininePast: Word('надсадила', 6),
  neuterPast: Word('надсадило', 6),
  pluralPast: Word('надсадили', 6),
  imperativeInformal: Word('надсади', 6),
  imperativeFormal: Word('надсадите', 6),
  imperfect: [],
};

perfectVerbs.set(надсадить.name.text, надсадить);

export { надсадить };