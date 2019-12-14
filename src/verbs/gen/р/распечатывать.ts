import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распечатывать: PerfectVerb = {
  name: Word('распечатывать', 6),
  singular1stPerson: Word('распечатываю', 6),
  singular2ndPerson: Word('распечатываешь', 6),
  singular3rdPerson: Word('распечатывает', 6),
  plural1stPerson: Word('распечатываем', 6),
  plural2ndPerson: Word('распечатываете', 6),
  plural3rdPerson: Word('распечатывают', 6),
  masculinePast: Word('распечатывал', 6),
  femininePast: Word('распечатывала', 6),
  neuterPast: Word('распечатывало', 6),
  pluralPast: Word('распечатывали', 6),
  imperativeInformal: Word('распечатывай', 6),
  imperativeFormal: Word('распечатывайте', 6),
  imperfect: ['распечатать'],
};

perfectVerbs.set(распечатывать.name.text, распечатывать);

export { распечатывать };