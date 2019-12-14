import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const совместить: PerfectVerb = {
  name: Word('совместить', 7),
  singular1stPerson: Word('совмещу', 6),
  singular2ndPerson: Word('совместишь', 7),
  singular3rdPerson: Word('совместит', 7),
  plural1stPerson: Word('совместим', 7),
  plural2ndPerson: Word('совместите', 7),
  plural3rdPerson: Word('совместят', 7),
  masculinePast: Word('совместил', 7),
  femininePast: Word('совместила', 7),
  neuterPast: Word('совместило', 7),
  pluralPast: Word('совместили', 7),
  imperativeInformal: Word('совмести', 7),
  imperativeFormal: Word('совместите', 7),
  imperfect: [],
};

perfectVerbs.set(совместить.name.text, совместить);

export { совместить };