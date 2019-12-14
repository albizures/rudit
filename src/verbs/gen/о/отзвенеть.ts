import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отзвенеть: PerfectVerb = {
  name: Word('отзвенеть', 6),
  singular1stPerson: Word('отзвеню', 6),
  singular2ndPerson: Word('отзвенишь', 6),
  singular3rdPerson: Word('отзвенит', 6),
  plural1stPerson: Word('отзвеним', 6),
  plural2ndPerson: Word('отзвените', 6),
  plural3rdPerson: Word('отзвенят', 6),
  masculinePast: Word('отзвенел', 6),
  femininePast: Word('отзвенела', 6),
  neuterPast: Word('отзвенело', 6),
  pluralPast: Word('отзвенели', 6),
  imperativeInformal: Word('отзвени', 6),
  imperativeFormal: Word('отзвените', 6),
  imperfect: [],
};

perfectVerbs.set(отзвенеть.name.text, отзвенеть);

export { отзвенеть };