import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заляпать: PerfectVerb = {
  name: Word('заляпать', 3),
  singular1stPerson: Word('заляпаю', 3),
  singular2ndPerson: Word('заляпаешь', 3),
  singular3rdPerson: Word('заляпает', 3),
  plural1stPerson: Word('заляпаем', 3),
  plural2ndPerson: Word('заляпаете', 3),
  plural3rdPerson: Word('заляпают', 3),
  masculinePast: Word('заляпал', 3),
  femininePast: Word('заляпала', 3),
  neuterPast: Word('заляпало', 3),
  pluralPast: Word('заляпали', 3),
  imperativeInformal: Word('заляпай', 3),
  imperativeFormal: Word('заляпайте', 3),
  imperfect: [],
};

perfectVerbs.set(заляпать.name.text, заляпать);

export { заляпать };