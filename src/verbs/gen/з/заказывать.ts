import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заказывать: PerfectVerb = {
  name: Word('заказывать', 3),
  singular1stPerson: Word('заказываю', 3),
  singular2ndPerson: Word('заказываешь', 3),
  singular3rdPerson: Word('заказывает', 3),
  plural1stPerson: Word('заказываем', 3),
  plural2ndPerson: Word('заказываете', 3),
  plural3rdPerson: Word('заказывают', 3),
  masculinePast: Word('заказывал', 3),
  femininePast: Word('заказывала', 3),
  neuterPast: Word('заказывало', 3),
  pluralPast: Word('заказывали', 3),
  imperativeInformal: Word('заказывай', 3),
  imperativeFormal: Word('заказывайте', 3),
  imperfect: ['заказать'],
};

perfectVerbs.set(заказывать.name.text, заказывать);

export { заказывать };