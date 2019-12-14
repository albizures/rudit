import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сдружить: PerfectVerb = {
  name: Word('сдружить', 5),
  singular1stPerson: Word('сдружу', 5),
  singular2ndPerson: Word('сдружишь', 5),
  singular3rdPerson: Word('сдружит', 5),
  plural1stPerson: Word('сдружим', 5),
  plural2ndPerson: Word('сдружите', 5),
  plural3rdPerson: Word('сдружат', 5),
  masculinePast: Word('сдружил', 5),
  femininePast: Word('сдружила', 5),
  neuterPast: Word('сдружило', 5),
  pluralPast: Word('сдружили', 5),
  imperativeInformal: Word('сдружи', 5),
  imperativeFormal: Word('сдружите', 5),
  imperfect: [],
};

perfectVerbs.set(сдружить.name.text, сдружить);

export { сдружить };