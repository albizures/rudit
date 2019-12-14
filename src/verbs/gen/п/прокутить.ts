import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прокутить: PerfectVerb = {
  name: Word('прокутить', 6),
  singular1stPerson: Word('прокучу', 6),
  singular2ndPerson: Word('прокутишь', 4),
  singular3rdPerson: Word('прокутит', 4),
  plural1stPerson: Word('прокутим', 4),
  plural2ndPerson: Word('прокутите', 4),
  plural3rdPerson: Word('прокутят', 4),
  masculinePast: Word('прокутил', 6),
  femininePast: Word('прокутила', 6),
  neuterPast: Word('прокутило', 6),
  pluralPast: Word('прокутили', 6),
  imperativeInformal: Word('прокути', 6),
  imperativeFormal: Word('прокутите', 6),
  imperfect: [],
};

perfectVerbs.set(прокутить.name.text, прокутить);

export { прокутить };