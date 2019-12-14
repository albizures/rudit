import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пробуждаться: PerfectVerb = {
  name: Word('пробуждаться', 7),
  singular1stPerson: Word('пробуждаюсь', 7),
  singular2ndPerson: Word('пробуждаешься', 7),
  singular3rdPerson: Word('пробуждается', 7),
  plural1stPerson: Word('пробуждаемся', 7),
  plural2ndPerson: Word('пробуждаетесь', 7),
  plural3rdPerson: Word('пробуждаются', 7),
  masculinePast: Word('пробуждался', 7),
  femininePast: Word('пробуждалась', 7),
  neuterPast: Word('пробуждалось', 7),
  pluralPast: Word('пробуждались', 7),
  imperativeInformal: Word('пробуждайся', 7),
  imperativeFormal: Word('пробуждайтесь', 7),
  imperfect: ['пробудиться'],
};

perfectVerbs.set(пробуждаться.name.text, пробуждаться);

export { пробуждаться };