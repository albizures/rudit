import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закряхтеть: PerfectVerb = {
  name: Word('закряхтеть', 7),
  singular1stPerson: Word('закряхчу', 7),
  singular2ndPerson: Word('закряхтишь', 7),
  singular3rdPerson: Word('закряхтит', 7),
  plural1stPerson: Word('закряхтим', 7),
  plural2ndPerson: Word('закряхтите', 7),
  plural3rdPerson: Word('закряхтят', 7),
  masculinePast: Word('закряхтел', 7),
  femininePast: Word('закряхтела', 7),
  neuterPast: Word('закряхтело', 7),
  pluralPast: Word('закряхтели', 7),
  imperativeInformal: Word('закряхти', 7),
  imperativeFormal: Word('закряхтите', 7),
  imperfect: [],
};

perfectVerbs.set(закряхтеть.name.text, закряхтеть);

export { закряхтеть };