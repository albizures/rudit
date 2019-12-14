import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скорбеть: PerfectVerb = {
  name: Word('скорбеть', 5),
  singular1stPerson: Word('скорблю', 6),
  singular2ndPerson: Word('скорбишь', 5),
  singular3rdPerson: Word('скорбит', 5),
  plural1stPerson: Word('скорбим', 5),
  plural2ndPerson: Word('скорбите', 5),
  plural3rdPerson: Word('скорбят', 5),
  masculinePast: Word('скорбел', 5),
  femininePast: Word('скорбела', 5),
  neuterPast: Word('скорбело', 5),
  pluralPast: Word('скорбели', 5),
  imperativeInformal: Word('скорби', 5),
  imperativeFormal: Word('скорбите', 5),
  imperfect: [],
};

perfectVerbs.set(скорбеть.name.text, скорбеть);

export { скорбеть };