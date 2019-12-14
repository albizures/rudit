import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const смывать: PerfectVerb = {
  name: Word('смывать', 4),
  singular1stPerson: Word('смываю', 4),
  singular2ndPerson: Word('смываешь', 4),
  singular3rdPerson: Word('смывает', 4),
  plural1stPerson: Word('смываем', 4),
  plural2ndPerson: Word('смываете', 4),
  plural3rdPerson: Word('смывают', 4),
  masculinePast: Word('смывал', 4),
  femininePast: Word('смывала', 4),
  neuterPast: Word('смывало', 4),
  pluralPast: Word('смывали', 4),
  imperativeInformal: Word('смывай', 4),
  imperativeFormal: Word('смывайте', 4),
  imperfect: [],
};

perfectVerbs.set(смывать.name.text, смывать);

export { смывать };