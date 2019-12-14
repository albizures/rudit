import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пробудиться: PerfectVerb = {
  name: Word('пробудиться', 6),
  singular1stPerson: Word('пробужусь', 6),
  singular2ndPerson: Word('пробудишься', 6),
  singular3rdPerson: Word('пробудится', 6),
  plural1stPerson: Word('пробудимся', 6),
  plural2ndPerson: Word('пробудитесь', 6),
  plural3rdPerson: Word('пробудятся', 6),
  masculinePast: Word('пробудился', 6),
  femininePast: Word('пробудилась', 6),
  neuterPast: Word('пробудилось', 6),
  pluralPast: Word('пробудились', 6),
  imperativeInformal: Word('пробудись', 6),
  imperativeFormal: Word('пробудитесь', 6),
  imperfect: ['пробуждаться'],
};

perfectVerbs.set(пробудиться.name.text, пробудиться);

export { пробудиться };