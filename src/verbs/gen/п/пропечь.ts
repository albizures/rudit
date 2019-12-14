import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пропечь: PerfectVerb = {
  name: Word('пропечь', 4),
  singular1stPerson: Word('пропеку', 6),
  singular2ndPerson: Word('пропечёшь', 6),
  singular3rdPerson: Word('пропечёт', 6),
  plural1stPerson: Word('пропечём', 6),
  plural2ndPerson: Word('пропечёте', 6),
  plural3rdPerson: Word('пропекут', 6),
  masculinePast: Word('пропек', 4),
  femininePast: Word('пропекла', 7),
  neuterPast: Word('пропекло', 7),
  pluralPast: Word('пропекли', 7),
  imperativeInformal: Word('пропеки', 6),
  imperativeFormal: Word('пропеките', 6),
  imperfect: [],
};

perfectVerbs.set(пропечь.name.text, пропечь);

export { пропечь };