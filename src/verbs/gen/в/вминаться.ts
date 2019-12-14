import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вминаться: PerfectVerb = {
  name: Word('вминаться', 4),
  singular1stPerson: Word('вминаюсь', 4),
  singular2ndPerson: Word('вминаешься', 4),
  singular3rdPerson: Word('вминается', 4),
  plural1stPerson: Word('вминаемся', 4),
  plural2ndPerson: Word('вминаетесь', 4),
  plural3rdPerson: Word('вминаются', 4),
  masculinePast: Word('вминался', 4),
  femininePast: Word('вминалась', 4),
  neuterPast: Word('вминалось', 4),
  pluralPast: Word('вминались', 4),
  imperativeInformal: Word('вминайся', 4),
  imperativeFormal: Word('вминайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(вминаться.name.text, вминаться);

export { вминаться };