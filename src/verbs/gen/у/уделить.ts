import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уделить: PerfectVerb = {
  name: Word('уделить', 4),
  singular1stPerson: Word('уделю', 4),
  singular2ndPerson: Word('уделишь', 4),
  singular3rdPerson: Word('уделит', 4),
  plural1stPerson: Word('уделим', 4),
  plural2ndPerson: Word('уделите', 4),
  plural3rdPerson: Word('уделят', 4),
  masculinePast: Word('уделил', 4),
  femininePast: Word('уделила', 4),
  neuterPast: Word('уделило', 4),
  pluralPast: Word('уделили', 4),
  imperativeInformal: Word('удели', 4),
  imperativeFormal: Word('уделите', 4),
  imperfect: [],
};

perfectVerbs.set(уделить.name.text, уделить);

export { уделить };