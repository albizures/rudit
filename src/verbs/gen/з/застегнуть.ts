import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const застегнуть: PerfectVerb = {
  name: Word('застегнуть', 7),
  singular1stPerson: Word('застегну', 7),
  singular2ndPerson: Word('застегнёшь', 7),
  singular3rdPerson: Word('застегнёт', 7),
  plural1stPerson: Word('застегнём', 7),
  plural2ndPerson: Word('застегнёте', 7),
  plural3rdPerson: Word('застегнут', 7),
  masculinePast: Word('застегнул', 7),
  femininePast: Word('застегнула', 7),
  neuterPast: Word('застегнуло', 7),
  pluralPast: Word('застегнули', 7),
  imperativeInformal: Word('застегни', 7),
  imperativeFormal: Word('застегните', 7),
  imperfect: [],
};

perfectVerbs.set(застегнуть.name.text, застегнуть);

export { застегнуть };