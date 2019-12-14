import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сражаться: PerfectVerb = {
  name: Word('сражаться', 4),
  singular1stPerson: Word('сражаюсь', 4),
  singular2ndPerson: Word('сражаешься', 4),
  singular3rdPerson: Word('сражается', 4),
  plural1stPerson: Word('сражаемся', 4),
  plural2ndPerson: Word('сражаетесь', 4),
  plural3rdPerson: Word('сражаются', 4),
  masculinePast: Word('сражался', 4),
  femininePast: Word('сражалась', 4),
  neuterPast: Word('сражалось', 4),
  pluralPast: Word('сражались', 4),
  imperativeInformal: Word('сражайся', 4),
  imperativeFormal: Word('сражайтесь', 4),
  imperfect: ['сразиться'],
};

perfectVerbs.set(сражаться.name.text, сражаться);

export { сражаться };