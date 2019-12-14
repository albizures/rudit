import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сужаться: PerfectVerb = {
  name: Word('сужаться', 3),
  singular1stPerson: Word('сужаюсь', 3),
  singular2ndPerson: Word('сужаешься', 3),
  singular3rdPerson: Word('сужается', 3),
  plural1stPerson: Word('сужаемся', 3),
  plural2ndPerson: Word('сужаетесь', 3),
  plural3rdPerson: Word('сужаются', 3),
  masculinePast: Word('сужался', 3),
  femininePast: Word('сужалась', 3),
  neuterPast: Word('сужалось', 3),
  pluralPast: Word('сужались', 3),
  imperativeInformal: Word('сужайся', 3),
  imperativeFormal: Word('сужайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(сужаться.name.text, сужаться);

export { сужаться };