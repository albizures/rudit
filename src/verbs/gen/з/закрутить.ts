import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закрутить: PerfectVerb = {
  name: Word('закрутить', 6),
  singular1stPerson: Word('закручу', 6),
  singular2ndPerson: Word('закрутишь', 4),
  singular3rdPerson: Word('закрутит', 4),
  plural1stPerson: Word('закрутим', 4),
  plural2ndPerson: Word('закрутите', 4),
  plural3rdPerson: Word('закрутят', 4),
  masculinePast: Word('закрутил', 6),
  femininePast: Word('закрутила', 6),
  neuterPast: Word('закрутило', 6),
  pluralPast: Word('закрутили', 6),
  imperativeInformal: Word('закрути', 6),
  imperativeFormal: Word('закрутите', 6),
  imperfect: [],
};

perfectVerbs.set(закрутить.name.text, закрутить);

export { закрутить };