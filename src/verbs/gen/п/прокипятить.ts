import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прокипятить: PerfectVerb = {
  name: Word('прокипятить', 8),
  singular1stPerson: Word('прокипячу', 8),
  singular2ndPerson: Word('прокипятишь', 8),
  singular3rdPerson: Word('прокипятит', 8),
  plural1stPerson: Word('прокипятим', 8),
  plural2ndPerson: Word('прокипятите', 8),
  plural3rdPerson: Word('прокипятят', 8),
  masculinePast: Word('прокипятил', 8),
  femininePast: Word('прокипятила', 8),
  neuterPast: Word('прокипятило', 8),
  pluralPast: Word('прокипятили', 8),
  imperativeInformal: Word('прокипяти', 8),
  imperativeFormal: Word('прокипятите', 8),
  imperfect: [],
};

perfectVerbs.set(прокипятить.name.text, прокипятить);

export { прокипятить };