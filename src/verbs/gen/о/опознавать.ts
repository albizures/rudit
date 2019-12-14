import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опознавать: PerfectVerb = {
  name: Word('опознавать', 7),
  singular1stPerson: Word('оппзнаю', 6),
  singular2ndPerson: Word('оппзнаёшь', 6),
  singular3rdPerson: Word('оппзнаёт', 6),
  plural1stPerson: Word('оппзнаём', 6),
  plural2ndPerson: Word('оппзнаёте', 6),
  plural3rdPerson: Word('оппзнают', 6),
  masculinePast: Word('опознавал', 7),
  femininePast: Word('опознавала', 7),
  neuterPast: Word('опознавало', 7),
  pluralPast: Word('опознавали', 7),
  imperativeInformal: Word('опознавай', 7),
  imperativeFormal: Word('опознавайте', 7),
  imperfect: ['опознать'],
};

perfectVerbs.set(опознавать.name.text, опознавать);

export { опознавать };