import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перегораживаться: PerfectVerb = {
  name: Word('перегораживаться', 7),
  singular1stPerson: Word('перегораживаюсь', 7),
  singular2ndPerson: Word('перегораживаешься', 7),
  singular3rdPerson: Word('перегораживается', 7),
  plural1stPerson: Word('перегораживаемся', 7),
  plural2ndPerson: Word('перегораживаетесь', 7),
  plural3rdPerson: Word('перегораживаются', 7),
  masculinePast: Word('перегораживался', 7),
  femininePast: Word('перегораживалась', 7),
  neuterPast: Word('перегораживалось', 7),
  pluralPast: Word('перегораживались', 7),
  imperativeInformal: Word('перегораживайся', 7),
  imperativeFormal: Word('перегораживайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(перегораживаться.name.text, перегораживаться);

export { перегораживаться };