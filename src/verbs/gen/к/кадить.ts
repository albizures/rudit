import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кадить: PerfectVerb = {
  name: Word('кадить', 3),
  singular1stPerson: Word('кажу', 3),
  singular2ndPerson: Word('кадишь', 3),
  singular3rdPerson: Word('кадит', 3),
  plural1stPerson: Word('кадим', 3),
  plural2ndPerson: Word('кадите', 3),
  plural3rdPerson: Word('кадят', 3),
  masculinePast: Word('кадил', 3),
  femininePast: Word('кадила', 3),
  neuterPast: Word('кадило', 3),
  pluralPast: Word('кадили', 3),
  imperativeInformal: Word('кади', 3),
  imperativeFormal: Word('кадите', 3),
  imperfect: [],
};

perfectVerbs.set(кадить.name.text, кадить);

export { кадить };