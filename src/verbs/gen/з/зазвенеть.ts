import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зазвенеть: PerfectVerb = {
  name: Word('зазвенеть', 6),
  singular1stPerson: Word('зазвеню', 6),
  singular2ndPerson: Word('зазвенишь', 6),
  singular3rdPerson: Word('зазвенит', 6),
  plural1stPerson: Word('зазвеним', 6),
  plural2ndPerson: Word('зазвените', 6),
  plural3rdPerson: Word('зазвенят', 6),
  masculinePast: Word('зазвенел', 6),
  femininePast: Word('зазвенела', 6),
  neuterPast: Word('зазвенело', 6),
  pluralPast: Word('зазвенели', 6),
  imperativeInformal: Word('зазвени', 6),
  imperativeFormal: Word('зазвените', 6),
  imperfect: [],
};

perfectVerbs.set(зазвенеть.name.text, зазвенеть);

export { зазвенеть };