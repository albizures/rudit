import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прозвенеть: PerfectVerb = {
  name: Word('прозвенеть', 7),
  singular1stPerson: Word('прозвеню', 7),
  singular2ndPerson: Word('прозвенишь', 7),
  singular3rdPerson: Word('прозвенит', 7),
  plural1stPerson: Word('прозвеним', 7),
  plural2ndPerson: Word('прозвените', 7),
  plural3rdPerson: Word('прозвенят', 7),
  masculinePast: Word('прозвенел', 7),
  femininePast: Word('прозвенела', 7),
  neuterPast: Word('прозвенело', 7),
  pluralPast: Word('прозвенели', 7),
  imperativeInformal: Word('прозвени', 7),
  imperativeFormal: Word('прозвените', 7),
  imperfect: [],
};

perfectVerbs.set(прозвенеть.name.text, прозвенеть);

export { прозвенеть };