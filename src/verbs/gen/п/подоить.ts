import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подоить: PerfectVerb = {
  name: Word('подоить', 4),
  singular1stPerson: Word('подою', 4),
  singular2ndPerson: Word('подоишь', 3),
  singular3rdPerson: Word('подоит', 3),
  plural1stPerson: Word('подоим', 3),
  plural2ndPerson: Word('подоите', 3),
  plural3rdPerson: Word('подоят', 3),
  masculinePast: Word('подоил', 4),
  femininePast: Word('подоила', 4),
  neuterPast: Word('подоило', 4),
  pluralPast: Word('подоили', 4),
  imperativeInformal: Word('подои', 4),
  imperativeFormal: Word('подоите', 4),
  imperfect: [],
};

perfectVerbs.set(подоить.name.text, подоить);

export { подоить };