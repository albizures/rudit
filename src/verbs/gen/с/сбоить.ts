import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сбоить: PerfectVerb = {
  name: Word('сбоить', 3),
  singular1stPerson: Word('сбою', 3),
  singular2ndPerson: Word('сбоишь', 3),
  singular3rdPerson: Word('сбоит', 3),
  plural1stPerson: Word('сбоим', 3),
  plural2ndPerson: Word('сбоите', 3),
  plural3rdPerson: Word('сбоят', 3),
  masculinePast: Word('сбоил', 3),
  femininePast: Word('сбоила', 3),
  neuterPast: Word('сбоило', 3),
  pluralPast: Word('сбоили', 3),
  imperativeInformal: Word('сбои', 3),
  imperativeFormal: Word('сбоите', 3),
  imperfect: [],
};

perfectVerbs.set(сбоить.name.text, сбоить);

export { сбоить };