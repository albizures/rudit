import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пронизать: PerfectVerb = {
  name: Word('пронизать', 6),
  singular1stPerson: Word('пронижу', 6),
  singular2ndPerson: Word('пронижешь', 4),
  singular3rdPerson: Word('пронижет', 4),
  plural1stPerson: Word('пронижем', 4),
  plural2ndPerson: Word('пронижете', 4),
  plural3rdPerson: Word('пронижут', 4),
  masculinePast: Word('пронизал', 6),
  femininePast: Word('пронизала', 6),
  neuterPast: Word('пронизало', 6),
  pluralPast: Word('пронизали', 6),
  imperativeInformal: Word('пронижи', 6),
  imperativeFormal: Word('пронижите', 6),
  imperfect: [],
};

perfectVerbs.set(пронизать.name.text, пронизать);

export { пронизать };