import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const гикать: PerfectVerb = {
  name: Word('гикать', 1),
  singular1stPerson: Word('гикаю', 1),
  singular2ndPerson: Word('гикаешь', 1),
  singular3rdPerson: Word('гикает', 1),
  plural1stPerson: Word('гикаем', 1),
  plural2ndPerson: Word('гикаете', 1),
  plural3rdPerson: Word('гикают', 1),
  masculinePast: Word('гикал', 1),
  femininePast: Word('гикала', 1),
  neuterPast: Word('гикало', 1),
  pluralPast: Word('гикали', 1),
  imperativeInformal: Word('гикай', 1),
  imperativeFormal: Word('гикайте', 1),
  imperfect: [],
};

perfectVerbs.set(гикать.name.text, гикать);

export { гикать };