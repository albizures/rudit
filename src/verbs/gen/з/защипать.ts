import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const защипать: PerfectVerb = {
  name: Word('защипать', 5),
  singular1stPerson: Word('защиплю', 6),
  singular2ndPerson: Word('защиплешь', 3),
  singular3rdPerson: Word('защиплет', 3),
  plural1stPerson: Word('защиплем', 3),
  plural2ndPerson: Word('защиплете', 3),
  plural3rdPerson: Word('защиплют', 3),
  masculinePast: Word('защипал', 5),
  femininePast: Word('защипала', 5),
  neuterPast: Word('защипало', 5),
  pluralPast: Word('защипали', 5),
  imperativeInformal: Word('защипли', 6),
  imperativeFormal: Word('защиплите', 6),
  imperfect: [],
};

perfectVerbs.set(защипать.name.text, защипать);

export { защипать };