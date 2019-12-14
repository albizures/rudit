import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отсечь: PerfectVerb = {
  name: Word('отсечь', 3),
  singular1stPerson: Word('отсеку', 5),
  singular2ndPerson: Word('отсечёшь', 5),
  singular3rdPerson: Word('отсечёт', 5),
  plural1stPerson: Word('отсечём', 5),
  plural2ndPerson: Word('отсечёте', 5),
  plural3rdPerson: Word('отсекут', 5),
  masculinePast: Word('отсёк', 3),
  femininePast: Word('отсекла', 6),
  neuterPast: Word('отсекло', 6),
  pluralPast: Word('отсекли', 6),
  imperativeInformal: Word('отсеки', 5),
  imperativeFormal: Word('отсеките', 5),
  imperfect: [],
};

perfectVerbs.set(отсечь.name.text, отсечь);

export { отсечь };