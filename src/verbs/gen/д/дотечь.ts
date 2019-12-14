import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дотечь: PerfectVerb = {
  name: Word('дотечь', 3),
  singular1stPerson: Word('дотеку', 5),
  singular2ndPerson: Word('дотечёшь', 5),
  singular3rdPerson: Word('дотечёт', 5),
  plural1stPerson: Word('дотечём', 5),
  plural2ndPerson: Word('дотечёте', 5),
  plural3rdPerson: Word('дотекут', 5),
  masculinePast: Word('дотёк', 3),
  femininePast: Word('дотекла', 6),
  neuterPast: Word('дотекло', 6),
  pluralPast: Word('дотекли', 6),
  imperativeInformal: Word('дотеки', 5),
  imperativeFormal: Word('дотеките', 5),
  imperfect: [],
};

perfectVerbs.set(дотечь.name.text, дотечь);

export { дотечь };