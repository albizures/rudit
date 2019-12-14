import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сминаться: PerfectVerb = {
  name: Word('сминаться', 4),
  singular1stPerson: Word('сминаюсь', 4),
  singular2ndPerson: Word('сминаешься', 4),
  singular3rdPerson: Word('сминается', 4),
  plural1stPerson: Word('сминаемся', 4),
  plural2ndPerson: Word('сминаетесь', 4),
  plural3rdPerson: Word('сминаются', 4),
  masculinePast: Word('сминался', 4),
  femininePast: Word('сминалась', 4),
  neuterPast: Word('сминалось', 4),
  pluralPast: Word('сминались', 4),
  imperativeInformal: Word('сминайся', 4),
  imperativeFormal: Word('сминайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(сминаться.name.text, сминаться);

export { сминаться };