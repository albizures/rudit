import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возобновить: PerfectVerb = {
  name: Word('возобновить', 8),
  singular1stPerson: Word('возобновлю', 9),
  singular2ndPerson: Word('возобновишь', 8),
  singular3rdPerson: Word('возобновит', 8),
  plural1stPerson: Word('возобновим', 8),
  plural2ndPerson: Word('возобновите', 8),
  plural3rdPerson: Word('возобновят', 8),
  masculinePast: Word('возобновил', 8),
  femininePast: Word('возобновила', 8),
  neuterPast: Word('возобновило', 8),
  pluralPast: Word('возобновили', 8),
  imperativeInformal: Word('возобнови', 8),
  imperativeFormal: Word('возобновите', 8),
  imperfect: [],
};

perfectVerbs.set(возобновить.name.text, возобновить);

export { возобновить };