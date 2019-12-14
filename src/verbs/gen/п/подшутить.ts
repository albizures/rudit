import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подшутить: PerfectVerb = {
  name: Word('подшутить', 6),
  singular1stPerson: Word('подшучу', 6),
  singular2ndPerson: Word('подшутишь', 4),
  singular3rdPerson: Word('подшутит', 4),
  plural1stPerson: Word('подшутим', 4),
  plural2ndPerson: Word('подшутите', 4),
  plural3rdPerson: Word('подшутят', 4),
  masculinePast: Word('подшутил', 6),
  femininePast: Word('подшутила', 6),
  neuterPast: Word('подшутило', 6),
  pluralPast: Word('подшутили', 6),
  imperativeInformal: Word('подшути', 6),
  imperativeFormal: Word('подшутите', 6),
  imperfect: [],
};

perfectVerbs.set(подшутить.name.text, подшутить);

export { подшутить };