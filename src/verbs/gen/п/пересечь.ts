import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пересечь: PerfectVerb = {
  name: Word('пересечь', 5),
  singular1stPerson: Word('пересеку', 7),
  singular2ndPerson: Word('пересечёшь', 1),
  singular3rdPerson: Word('пересечёт', 1),
  plural1stPerson: Word('пересечём', 1),
  plural2ndPerson: Word('пересечёте', 1),
  plural3rdPerson: Word('пересекут', 7),
  masculinePast: Word('пересёк', 1),
  femininePast: Word('пересекла', 8),
  neuterPast: Word('пересекло', 8),
  pluralPast: Word('пересекли', 8),
  imperativeInformal: Word('пересеки', 7),
  imperativeFormal: Word('пересеките', 7),
  imperfect: [],
};

perfectVerbs.set(пересечь.name.text, пересечь);

export { пересечь };