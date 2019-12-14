import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проморгать: PerfectVerb = {
  name: Word('проморгать', 7),
  singular1stPerson: Word('проморгаю', 7),
  singular2ndPerson: Word('проморгаешь', 7),
  singular3rdPerson: Word('проморгает', 7),
  plural1stPerson: Word('проморгаем', 7),
  plural2ndPerson: Word('проморгаете', 7),
  plural3rdPerson: Word('проморгают', 7),
  masculinePast: Word('проморгал', 7),
  femininePast: Word('проморгала', 7),
  neuterPast: Word('проморгало', 7),
  pluralPast: Word('проморгали', 7),
  imperativeInformal: Word('проморгай', 7),
  imperativeFormal: Word('проморгайте', 7),
  imperfect: [],
};

perfectVerbs.set(проморгать.name.text, проморгать);

export { проморгать };