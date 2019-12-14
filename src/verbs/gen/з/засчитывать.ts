import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const засчитывать: PerfectVerb = {
  name: Word('засчитывать', 4),
  singular1stPerson: Word('засчитываю', 4),
  singular2ndPerson: Word('засчитываешь', 4),
  singular3rdPerson: Word('засчитывает', 4),
  plural1stPerson: Word('засчитываем', 4),
  plural2ndPerson: Word('засчитываете', 4),
  plural3rdPerson: Word('засчитывают', 4),
  masculinePast: Word('засчитывал', 4),
  femininePast: Word('засчитывала', 4),
  neuterPast: Word('засчитывало', 4),
  pluralPast: Word('засчитывали', 4),
  imperativeInformal: Word('засчитывай', 4),
  imperativeFormal: Word('засчитывайте', 4),
  imperfect: [],
};

perfectVerbs.set(засчитывать.name.text, засчитывать);

export { засчитывать };