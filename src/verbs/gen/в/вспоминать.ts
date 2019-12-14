import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вспоминать: PerfectVerb = {
  name: Word('вспоминать', 7),
  singular1stPerson: Word('вспоминаю', 7),
  singular2ndPerson: Word('вспоминаешь', 7),
  singular3rdPerson: Word('вспоминает', 7),
  plural1stPerson: Word('вспоминаем', 7),
  plural2ndPerson: Word('вспоминаете', 7),
  plural3rdPerson: Word('вспоминают', 7),
  masculinePast: Word('вспоминал', 7),
  femininePast: Word('вспоминала', 7),
  neuterPast: Word('вспоминало', 7),
  pluralPast: Word('вспоминали', 7),
  imperativeInformal: Word('вспоминай', 7),
  imperativeFormal: Word('вспоминайте', 7),
  imperfect: ['вспомнить'],
};

perfectVerbs.set(вспоминать.name.text, вспоминать);

export { вспоминать };