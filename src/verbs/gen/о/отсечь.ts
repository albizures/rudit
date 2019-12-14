import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отсечь: PerfectVerb = {
  name: Word('отсечь', 3),
  singular1stPerson: Word('отсеку', 5),
  singular2ndPerson: Word('отсечёшь', 3),
  singular3rdPerson: Word('отсечёт', 3),
  plural1stPerson: Word('отсечём', 3),
  plural2ndPerson: Word('отсечёте', 3),
  plural3rdPerson: Word('отсекут', 5),
  masculinePast: Word('отсёк', 0),
  femininePast: Word('отсекла', 6),
  neuterPast: Word('отсекло', 6),
  pluralPast: Word('отсекли', 6),
  imperativeInformal: Word('отсеки', 5),
  imperativeFormal: Word('отсеките', 5),
  imperfect: [],
};

perfectVerbs.set(отсечь.name.text, отсечь);

export { отсечь };