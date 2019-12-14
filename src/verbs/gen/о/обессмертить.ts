import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обессмертить: PerfectVerb = {
  name: Word('обессмертить', 6),
  singular1stPerson: Word('обессмерчу', 6),
  singular2ndPerson: Word('обессмертишь', 6),
  singular3rdPerson: Word('обессмертит', 6),
  plural1stPerson: Word('обессмертим', 6),
  plural2ndPerson: Word('обессмертите', 6),
  plural3rdPerson: Word('обессмертят', 6),
  masculinePast: Word('обессмертил', 6),
  femininePast: Word('обессмертила', 6),
  neuterPast: Word('обессмертило', 6),
  pluralPast: Word('обессмертили', 6),
  imperativeInformal: Word('обессмерти', 6),
  imperativeFormal: Word('обессмертите', 6),
  imperfect: [],
};

perfectVerbs.set(обессмертить.name.text, обессмертить);

export { обессмертить };