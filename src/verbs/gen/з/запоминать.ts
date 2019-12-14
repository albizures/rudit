import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запоминать: PerfectVerb = {
  name: Word('запоминать', 7),
  singular1stPerson: Word('запоминаю', 7),
  singular2ndPerson: Word('запоминаешь', 7),
  singular3rdPerson: Word('запоминает', 7),
  plural1stPerson: Word('запоминаем', 7),
  plural2ndPerson: Word('запоминаете', 7),
  plural3rdPerson: Word('запоминают', 7),
  masculinePast: Word('запоминал', 7),
  femininePast: Word('запоминала', 7),
  neuterPast: Word('запоминало', 7),
  pluralPast: Word('запоминали', 7),
  imperativeInformal: Word('запоминай', 7),
  imperativeFormal: Word('запоминайте', 7),
  imperfect: ['запомнить'],
};

perfectVerbs.set(запоминать.name.text, запоминать);

export { запоминать };