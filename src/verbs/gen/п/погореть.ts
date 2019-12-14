import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const погореть: PerfectVerb = {
  name: Word('погореть', 5),
  singular1stPerson: Word('погорю', 5),
  singular2ndPerson: Word('погоришь', 5),
  singular3rdPerson: Word('погорит', 5),
  plural1stPerson: Word('погорим', 5),
  plural2ndPerson: Word('погорите', 5),
  plural3rdPerson: Word('погорят', 5),
  masculinePast: Word('погорел', 5),
  femininePast: Word('погорела', 5),
  neuterPast: Word('погорело', 5),
  pluralPast: Word('погорели', 5),
  imperativeInformal: Word('погори', 5),
  imperativeFormal: Word('погорите', 5),
  imperfect: [],
};

perfectVerbs.set(погореть.name.text, погореть);

export { погореть };