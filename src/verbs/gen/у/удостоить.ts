import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const удостоить: PerfectVerb = {
  name: Word('удостоить', 5),
  singular1stPerson: Word('удостою', 5),
  singular2ndPerson: Word('удостоишь', 5),
  singular3rdPerson: Word('удостоит', 5),
  plural1stPerson: Word('удостоим', 5),
  plural2ndPerson: Word('удостоите', 5),
  plural3rdPerson: Word('удостоят', 5),
  masculinePast: Word('удостоил', 5),
  femininePast: Word('удостоила', 5),
  neuterPast: Word('удостоило', 5),
  pluralPast: Word('удостоили', 5),
  imperativeInformal: Word('удостой', 5),
  imperativeFormal: Word('удостойте', 5),
  imperfect: [],
};

perfectVerbs.set(удостоить.name.text, удостоить);

export { удостоить };