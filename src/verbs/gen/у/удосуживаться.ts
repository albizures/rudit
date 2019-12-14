import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const удосуживаться: PerfectVerb = {
  name: Word('удосуживаться', 4),
  singular1stPerson: Word('удосуживаюсь', 4),
  singular2ndPerson: Word('удосуживаешься', 4),
  singular3rdPerson: Word('удосуживается', 4),
  plural1stPerson: Word('удосуживаемся', 4),
  plural2ndPerson: Word('удосуживаетесь', 4),
  plural3rdPerson: Word('удосуживаются', 4),
  masculinePast: Word('удосуживался', 4),
  femininePast: Word('удосуживалась', 4),
  neuterPast: Word('удосуживалось', 4),
  pluralPast: Word('удосуживались', 4),
  imperativeInformal: Word('удосуживайся', 4),
  imperativeFormal: Word('удосуживайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(удосуживаться.name.text, удосуживаться);

export { удосуживаться };