import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ошикать: PerfectVerb = {
  name: Word('ошикать', 2),
  singular1stPerson: Word('ошикаю', 2),
  singular2ndPerson: Word('ошикаешь', 2),
  singular3rdPerson: Word('ошикает', 2),
  plural1stPerson: Word('ошикаем', 2),
  plural2ndPerson: Word('ошикаете', 2),
  plural3rdPerson: Word('ошикают', 2),
  masculinePast: Word('ошикал', 2),
  femininePast: Word('ошикала', 2),
  neuterPast: Word('ошикало', 2),
  pluralPast: Word('ошикали', 2),
  imperativeInformal: Word('ошикай', 2),
  imperativeFormal: Word('ошикайте', 2),
  imperfect: ['ошикивать'],
};

perfectVerbs.set(ошикать.name.text, ошикать);

export { ошикать };