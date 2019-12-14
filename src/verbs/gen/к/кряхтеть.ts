import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кряхтеть: PerfectVerb = {
  name: Word('кряхтеть', 5),
  singular1stPerson: Word('кряхчу', 5),
  singular2ndPerson: Word('кряхтишь', 5),
  singular3rdPerson: Word('кряхтит', 5),
  plural1stPerson: Word('кряхтим', 5),
  plural2ndPerson: Word('кряхтите', 5),
  plural3rdPerson: Word('кряхтят', 5),
  masculinePast: Word('кряхтел', 5),
  femininePast: Word('кряхтела', 5),
  neuterPast: Word('кряхтело', 5),
  pluralPast: Word('кряхтели', 5),
  imperativeInformal: Word('кряхти', 5),
  imperativeFormal: Word('кряхтите', 5),
  imperfect: [],
};

perfectVerbs.set(кряхтеть.name.text, кряхтеть);

export { кряхтеть };