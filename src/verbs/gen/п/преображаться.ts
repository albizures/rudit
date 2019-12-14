import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const преображаться: PerfectVerb = {
  name: Word('преображаться', 8),
  singular1stPerson: Word('преображаюсь', 8),
  singular2ndPerson: Word('преображаешься', 8),
  singular3rdPerson: Word('преображается', 8),
  plural1stPerson: Word('преображаемся', 8),
  plural2ndPerson: Word('преображаетесь', 8),
  plural3rdPerson: Word('преображаются', 8),
  masculinePast: Word('преображался', 8),
  femininePast: Word('преображалась', 8),
  neuterPast: Word('преображалось', 8),
  pluralPast: Word('преображались', 8),
  imperativeInformal: Word('преображайся', 8),
  imperativeFormal: Word('преображайтесь', 8),
  imperfect: [],
};

perfectVerbs.set(преображаться.name.text, преображаться);

export { преображаться };