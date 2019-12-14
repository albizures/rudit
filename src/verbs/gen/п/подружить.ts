import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подружить: PerfectVerb = {
  name: Word('подружить', 6),
  singular1stPerson: Word('подружу', 6),
  singular2ndPerson: Word('подружишь', 6),
  singular3rdPerson: Word('подружит', 6),
  plural1stPerson: Word('подружим', 6),
  plural2ndPerson: Word('подружите', 6),
  plural3rdPerson: Word('подружат', 6),
  masculinePast: Word('подружил', 6),
  femininePast: Word('подружила', 6),
  neuterPast: Word('подружило', 6),
  pluralPast: Word('подружили', 6),
  imperativeInformal: Word('подружи', 6),
  imperativeFormal: Word('подружите', 6),
  imperfect: [],
};

perfectVerbs.set(подружить.name.text, подружить);

export { подружить };