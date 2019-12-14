import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const удерживаться: PerfectVerb = {
  name: Word('удерживаться', 2),
  singular1stPerson: Word('удерживаюсь', 2),
  singular2ndPerson: Word('удерживаешься', 2),
  singular3rdPerson: Word('удерживается', 2),
  plural1stPerson: Word('удерживаемся', 2),
  plural2ndPerson: Word('удерживаетесь', 2),
  plural3rdPerson: Word('удерживаются', 2),
  masculinePast: Word('удерживался', 2),
  femininePast: Word('удерживалась', 2),
  neuterPast: Word('удерживалось', 2),
  pluralPast: Word('удерживались', 2),
  imperativeInformal: Word('удерживайся', 2),
  imperativeFormal: Word('удерживайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(удерживаться.name.text, удерживаться);

export { удерживаться };