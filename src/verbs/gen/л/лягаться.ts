import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лягаться: PerfectVerb = {
  name: Word('лягаться', 3),
  singular1stPerson: Word('лягаюсь', 3),
  singular2ndPerson: Word('лягаешься', 3),
  singular3rdPerson: Word('лягается', 3),
  plural1stPerson: Word('лягаемся', 3),
  plural2ndPerson: Word('лягаетесь', 3),
  plural3rdPerson: Word('лягаются', 3),
  masculinePast: Word('лягался', 3),
  femininePast: Word('лягалась', 3),
  neuterPast: Word('лягалось', 3),
  pluralPast: Word('лягались', 3),
  imperativeInformal: Word('лягайся', 3),
  imperativeFormal: Word('лягайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(лягаться.name.text, лягаться);

export { лягаться };