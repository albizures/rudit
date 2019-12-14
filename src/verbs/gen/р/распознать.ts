import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распознать: PerfectVerb = {
  name: Word('распознать', 7),
  singular1stPerson: Word('распознаю', 7),
  singular2ndPerson: Word('распознаешь', 7),
  singular3rdPerson: Word('распознает', 7),
  plural1stPerson: Word('распознаем', 7),
  plural2ndPerson: Word('распознаете', 7),
  plural3rdPerson: Word('распознают', 7),
  masculinePast: Word('распознал', 7),
  femininePast: Word('распознала', 7),
  neuterPast: Word('распознало', 7),
  pluralPast: Word('распознали', 7),
  imperativeInformal: Word('распознай', 7),
  imperativeFormal: Word('распознайте', 7),
  imperfect: [],
};

perfectVerbs.set(распознать.name.text, распознать);

export { распознать };