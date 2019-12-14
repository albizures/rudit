import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const месить: PerfectVerb = {
  name: Word('месить', 3),
  singular1stPerson: Word('мешу', 3),
  singular2ndPerson: Word('месишь', 1),
  singular3rdPerson: Word('месит', 1),
  plural1stPerson: Word('месим', 1),
  plural2ndPerson: Word('месите', 1),
  plural3rdPerson: Word('месят', 1),
  masculinePast: Word('месил', 3),
  femininePast: Word('месила', 3),
  neuterPast: Word('месило', 3),
  pluralPast: Word('месили', 3),
  imperativeInformal: Word('меси', 3),
  imperativeFormal: Word('месите', 3),
  imperfect: [],
};

perfectVerbs.set(месить.name.text, месить);

export { месить };