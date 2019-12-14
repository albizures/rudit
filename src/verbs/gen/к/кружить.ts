import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кружить: PerfectVerb = {
  name: Word('кружить', 4),
  singular1stPerson: Word('кружу', 4),
  singular2ndPerson: Word('кружишь', 2),
  singular3rdPerson: Word('кружит', 2),
  plural1stPerson: Word('кружим', 2),
  plural2ndPerson: Word('кружите', 2),
  plural3rdPerson: Word('кружат', 2),
  masculinePast: Word('кружил', 4),
  femininePast: Word('кружила', 4),
  neuterPast: Word('кружило', 4),
  pluralPast: Word('кружили', 4),
  imperativeInformal: Word('кружи', 4),
  imperativeFormal: Word('кружите', 4),
  imperfect: [],
};

perfectVerbs.set(кружить.name.text, кружить);

export { кружить };