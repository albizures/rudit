import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проболтать: PerfectVerb = {
  name: Word('проболтать', 7),
  singular1stPerson: Word('проболтаю', 7),
  singular2ndPerson: Word('проболтаешь', 7),
  singular3rdPerson: Word('проболтает', 7),
  plural1stPerson: Word('проболтаем', 7),
  plural2ndPerson: Word('проболтаете', 7),
  plural3rdPerson: Word('проболтают', 7),
  masculinePast: Word('проболтал', 7),
  femininePast: Word('проболтала', 7),
  neuterPast: Word('проболтало', 7),
  pluralPast: Word('проболтали', 7),
  imperativeInformal: Word('проболтай', 7),
  imperativeFormal: Word('проболтайте', 7),
  imperfect: [],
};

perfectVerbs.set(проболтать.name.text, проболтать);

export { проболтать };