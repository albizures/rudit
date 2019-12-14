import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сбегаться: PerfectVerb = {
  name: Word('сбегаться', 2),
  singular1stPerson: Word('сбегаюсь', 2),
  singular2ndPerson: Word('сбегаешься', 2),
  singular3rdPerson: Word('сбегается', 2),
  plural1stPerson: Word('сбегаемся', 2),
  plural2ndPerson: Word('сбегаетесь', 2),
  plural3rdPerson: Word('сбегаются', 2),
  masculinePast: Word('сбегался', 2),
  femininePast: Word('сбегалась', 2),
  neuterPast: Word('сбегалось', 2),
  pluralPast: Word('сбегались', 2),
  imperativeInformal: Word('сбегайся', 2),
  imperativeFormal: Word('сбегайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(сбегаться.name.text, сбегаться);

export { сбегаться };