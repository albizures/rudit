import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const гадить: PerfectVerb = {
  name: Word('гадить', 1),
  singular1stPerson: Word('гажу', 1),
  singular2ndPerson: Word('гадишь', 1),
  singular3rdPerson: Word('гадит', 1),
  plural1stPerson: Word('гадим', 1),
  plural2ndPerson: Word('гадите', 1),
  plural3rdPerson: Word('гадят', 1),
  masculinePast: Word('гадил', 1),
  femininePast: Word('гадила', 1),
  neuterPast: Word('гадило', 1),
  pluralPast: Word('гадили', 1),
  imperativeInformal: Word('гадь', 1),
  imperativeFormal: Word('гадьте', 1),
  imperfect: [],
};

perfectVerbs.set(гадить.name.text, гадить);

export { гадить };