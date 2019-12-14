import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const описать: PerfectVerb = {
  name: Word('описать', 2),
  singular1stPerson: Word('описаю', 2),
  singular2ndPerson: Word('описаешь', 2),
  singular3rdPerson: Word('описает', 2),
  plural1stPerson: Word('описаем', 2),
  plural2ndPerson: Word('описаете', 2),
  plural3rdPerson: Word('описают', 2),
  masculinePast: Word('описал', 2),
  femininePast: Word('описала', 2),
  neuterPast: Word('описало', 2),
  pluralPast: Word('описали', 2),
  imperativeInformal: Word('описай', 2),
  imperativeFormal: Word('описайте', 2),
  imperfect: ['описывать'],
};

perfectVerbs.set(описать.name.text, описать);

export { описать };