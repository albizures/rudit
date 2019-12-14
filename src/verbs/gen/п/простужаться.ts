import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const простужаться: PerfectVerb = {
  name: Word('простужаться', 7),
  singular1stPerson: Word('простужаюсь', 7),
  singular2ndPerson: Word('простужаешься', 7),
  singular3rdPerson: Word('простужается', 7),
  plural1stPerson: Word('простужаемся', 7),
  plural2ndPerson: Word('простужаетесь', 7),
  plural3rdPerson: Word('простужаются', 7),
  masculinePast: Word('простужался', 7),
  femininePast: Word('простужалась', 7),
  neuterPast: Word('простужалось', 7),
  pluralPast: Word('простужались', 7),
  imperativeInformal: Word('простужайся', 7),
  imperativeFormal: Word('простужайтесь', 7),
  imperfect: ['простудиться'],
};

perfectVerbs.set(простужаться.name.text, простужаться);

export { простужаться };