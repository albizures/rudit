import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рассадить: PerfectVerb = {
  name: Word('рассадить', 6),
  singular1stPerson: Word('рассажу', 6),
  singular2ndPerson: Word('рассадишь', 4),
  singular3rdPerson: Word('рассадит', 4),
  plural1stPerson: Word('рассадим', 4),
  plural2ndPerson: Word('рассадите', 4),
  plural3rdPerson: Word('рассадят', 4),
  masculinePast: Word('рассадил', 6),
  femininePast: Word('рассадила', 6),
  neuterPast: Word('рассадило', 6),
  pluralPast: Word('рассадили', 6),
  imperativeInformal: Word('рассади', 6),
  imperativeFormal: Word('рассадите', 6),
  imperfect: [],
};

perfectVerbs.set(рассадить.name.text, рассадить);

export { рассадить };