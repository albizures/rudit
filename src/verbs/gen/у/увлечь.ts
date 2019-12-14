import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const увлечь: PerfectVerb = {
  name: Word('увлечь', 3),
  singular1stPerson: Word('увлеку', 5),
  singular2ndPerson: Word('увлечёшь', 3),
  singular3rdPerson: Word('увлечёт', 3),
  plural1stPerson: Word('увлечём', 3),
  plural2ndPerson: Word('увлечёте', 3),
  plural3rdPerson: Word('увлекут', 5),
  masculinePast: Word('увлёк', 0),
  femininePast: Word('увлекла', 6),
  neuterPast: Word('увлекло', 6),
  pluralPast: Word('увлекли', 6),
  imperativeInformal: Word('увлеки', 5),
  imperativeFormal: Word('увлеките', 5),
  imperfect: [],
};

perfectVerbs.set(увлечь.name.text, увлечь);

export { увлечь };