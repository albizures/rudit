import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const велеть: PerfectVerb = {
  name: Word('велеть', 3),
  singular1stPerson: Word('велю', 3),
  singular2ndPerson: Word('велишь', 3),
  singular3rdPerson: Word('велит', 3),
  plural1stPerson: Word('велим', 3),
  plural2ndPerson: Word('велите', 3),
  plural3rdPerson: Word('велят', 3),
  masculinePast: Word('велел', 3),
  femininePast: Word('велела', 3),
  neuterPast: Word('велело', 3),
  pluralPast: Word('велели', 3),
  imperativeInformal: Word('вели', 3),
  imperativeFormal: Word('велите', 3),
  imperfect: [],
};

perfectVerbs.set(велеть.name.text, велеть);

export { велеть };