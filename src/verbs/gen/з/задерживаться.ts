import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const задерживаться: PerfectVerb = {
  name: Word('задерживаться', 3),
  singular1stPerson: Word('задерживаюсь', 3),
  singular2ndPerson: Word('задерживаешься', 3),
  singular3rdPerson: Word('задерживается', 3),
  plural1stPerson: Word('задерживаемся', 3),
  plural2ndPerson: Word('задерживаетесь', 3),
  plural3rdPerson: Word('задерживаются', 3),
  masculinePast: Word('задерживался', 3),
  femininePast: Word('задерживалась', 3),
  neuterPast: Word('задерживалось', 3),
  pluralPast: Word('задерживались', 3),
  imperativeInformal: Word('задерживайся', 3),
  imperativeFormal: Word('задерживайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(задерживаться.name.text, задерживаться);

export { задерживаться };