import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возместить: PerfectVerb = {
  name: Word('возместить', 7),
  singular1stPerson: Word('возмещу', 6),
  singular2ndPerson: Word('возместишь', 7),
  singular3rdPerson: Word('возместит', 7),
  plural1stPerson: Word('возместим', 7),
  plural2ndPerson: Word('возместите', 7),
  plural3rdPerson: Word('возместят', 7),
  masculinePast: Word('возместил', 7),
  femininePast: Word('возместила', 7),
  neuterPast: Word('возместило', 7),
  pluralPast: Word('возместили', 7),
  imperativeInformal: Word('возмести', 7),
  imperativeFormal: Word('возместите', 7),
  imperfect: ['возмещать'],
};

perfectVerbs.set(возместить.name.text, возместить);

export { возместить };