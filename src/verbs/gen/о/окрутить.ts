import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const окрутить: PerfectVerb = {
  name: Word('окрутить', 5),
  singular1stPerson: Word('окручу', 5),
  singular2ndPerson: Word('окрутишь', 3),
  singular3rdPerson: Word('окрутит', 3),
  plural1stPerson: Word('окрутим', 3),
  plural2ndPerson: Word('окрутите', 3),
  plural3rdPerson: Word('окрутят', 3),
  masculinePast: Word('окрутил', 5),
  femininePast: Word('окрутила', 5),
  neuterPast: Word('окрутило', 5),
  pluralPast: Word('окрутили', 5),
  imperativeInformal: Word('окрути', 5),
  imperativeFormal: Word('окрутите', 5),
  imperfect: [],
};

perfectVerbs.set(окрутить.name.text, окрутить);

export { окрутить };