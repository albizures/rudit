import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заменить: PerfectVerb = {
  name: Word('заменить', 5),
  singular1stPerson: Word('заменю', 5),
  singular2ndPerson: Word('заменишь', 3),
  singular3rdPerson: Word('заменит', 3),
  plural1stPerson: Word('заменим', 3),
  plural2ndPerson: Word('замените', 3),
  plural3rdPerson: Word('заменят', 3),
  masculinePast: Word('заменил', 5),
  femininePast: Word('заменила', 5),
  neuterPast: Word('заменило', 5),
  pluralPast: Word('заменили', 5),
  imperativeInformal: Word('замени', 5),
  imperativeFormal: Word('замените', 5),
  imperfect: ['заменять'],
};

perfectVerbs.set(заменить.name.text, заменить);

export { заменить };