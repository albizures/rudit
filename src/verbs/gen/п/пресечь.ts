import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пресечь: PerfectVerb = {
  name: Word('пресечь', 4),
  singular1stPerson: Word('пресеку', 6),
  singular2ndPerson: Word('пресечёшь', 6),
  singular3rdPerson: Word('пресечёт', 6),
  plural1stPerson: Word('пресечём', 6),
  plural2ndPerson: Word('пресечёте', 6),
  plural3rdPerson: Word('пресекут', 6),
  masculinePast: Word('пресек', 4),
  femininePast: Word('пресекла', 7),
  neuterPast: Word('пресекло', 7),
  pluralPast: Word('пресекли', 7),
  imperativeInformal: Word('пресеки', 6),
  imperativeFormal: Word('пресеките', 6),
  imperfect: [],
};

perfectVerbs.set(пресечь.name.text, пресечь);

export { пресечь };