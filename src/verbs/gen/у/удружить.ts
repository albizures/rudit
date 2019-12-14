import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const удружить: PerfectVerb = {
  name: Word('удружить', 5),
  singular1stPerson: Word('удружу', 5),
  singular2ndPerson: Word('удружишь', 5),
  singular3rdPerson: Word('удружит', 5),
  plural1stPerson: Word('удружим', 5),
  plural2ndPerson: Word('удружите', 5),
  plural3rdPerson: Word('удружат', 5),
  masculinePast: Word('удружил', 5),
  femininePast: Word('удружила', 5),
  neuterPast: Word('удружило', 5),
  pluralPast: Word('удружили', 5),
  imperativeInformal: Word('удружи', 5),
  imperativeFormal: Word('удружите', 5),
  imperfect: [],
};

perfectVerbs.set(удружить.name.text, удружить);

export { удружить };