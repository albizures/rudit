import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const плескать: PerfectVerb = {
  name: Word('плескать', 5),
  singular1stPerson: Word('плескаю', 5),
  singular2ndPerson: Word('плескаешь', 5),
  singular3rdPerson: Word('плескает', 5),
  plural1stPerson: Word('плескаем', 5),
  plural2ndPerson: Word('плескаете', 5),
  plural3rdPerson: Word('плескают', 5),
  masculinePast: Word('плескал', 5),
  femininePast: Word('плескала', 5),
  neuterPast: Word('плескало', 5),
  pluralPast: Word('плескали', 5),
  imperativeInformal: Word('плескай', 5),
  imperativeFormal: Word('плескайте', 5),
  imperfect: ['плеснуть','поплескать'],
};

perfectVerbs.set(плескать.name.text, плескать);

export { плескать };