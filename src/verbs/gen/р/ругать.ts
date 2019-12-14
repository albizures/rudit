import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ругать: PerfectVerb = {
  name: Word('ругать', 3),
  singular1stPerson: Word('ругаю', 3),
  singular2ndPerson: Word('ругаешь', 3),
  singular3rdPerson: Word('ругает', 3),
  plural1stPerson: Word('ругаем', 3),
  plural2ndPerson: Word('ругаете', 3),
  plural3rdPerson: Word('ругают', 3),
  masculinePast: Word('ругал', 3),
  femininePast: Word('ругала', 3),
  neuterPast: Word('ругало', 3),
  pluralPast: Word('ругали', 3),
  imperativeInformal: Word('ругай', 3),
  imperativeFormal: Word('ругайте', 3),
  imperfect: ['обругать','выругать','заругать'],
};

perfectVerbs.set(ругать.name.text, ругать);

export { ругать };