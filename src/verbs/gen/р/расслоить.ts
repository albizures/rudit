import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расслоить: PerfectVerb = {
  name: Word('расслоить', 6),
  singular1stPerson: Word('расслою', 6),
  singular2ndPerson: Word('расслоишь', 6),
  singular3rdPerson: Word('расслоит', 6),
  plural1stPerson: Word('расслоим', 6),
  plural2ndPerson: Word('расслоите', 6),
  plural3rdPerson: Word('расслоят', 6),
  masculinePast: Word('расслоил', 6),
  femininePast: Word('расслоила', 6),
  neuterPast: Word('расслоило', 6),
  pluralPast: Word('расслоили', 6),
  imperativeInformal: Word('расслои', 6),
  imperativeFormal: Word('расслоите', 6),
  imperfect: [],
};

perfectVerbs.set(расслоить.name.text, расслоить);

export { расслоить };