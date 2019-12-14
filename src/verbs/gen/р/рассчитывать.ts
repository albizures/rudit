import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рассчитывать: PerfectVerb = {
  name: Word('рассчитывать', 5),
  singular1stPerson: Word('рассчитываю', 5),
  singular2ndPerson: Word('рассчитываешь', 5),
  singular3rdPerson: Word('рассчитывает', 5),
  plural1stPerson: Word('рассчитываем', 5),
  plural2ndPerson: Word('рассчитываете', 5),
  plural3rdPerson: Word('рассчитывают', 5),
  masculinePast: Word('рассчитывал', 5),
  femininePast: Word('рассчитывала', 5),
  neuterPast: Word('рассчитывало', 5),
  pluralPast: Word('рассчитывали', 5),
  imperativeInformal: Word('рассчитывай', 5),
  imperativeFormal: Word('рассчитывайте', 5),
  imperfect: ['рассчитать'],
};

perfectVerbs.set(рассчитывать.name.text, рассчитывать);

export { рассчитывать };