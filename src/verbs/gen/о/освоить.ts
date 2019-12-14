import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const освоить: PerfectVerb = {
  name: Word('освоить', 3),
  singular1stPerson: Word('освою', 3),
  singular2ndPerson: Word('освоишь', 3),
  singular3rdPerson: Word('освоит', 3),
  plural1stPerson: Word('освоим', 3),
  plural2ndPerson: Word('освоите', 3),
  plural3rdPerson: Word('освоят', 3),
  masculinePast: Word('освоил', 3),
  femininePast: Word('освоила', 3),
  neuterPast: Word('освоило', 3),
  pluralPast: Word('освоили', 3),
  imperativeInformal: Word('освой', 3),
  imperativeFormal: Word('освойте', 3),
  imperfect: [],
};

perfectVerbs.set(освоить.name.text, освоить);

export { освоить };