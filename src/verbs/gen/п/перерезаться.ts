import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перерезаться: PerfectVerb = {
  name: Word('перерезаться', 7),
  singular1stPerson: Word('перерезаюсь', 7),
  singular2ndPerson: Word('перерезаешься', 7),
  singular3rdPerson: Word('перерезается', 7),
  plural1stPerson: Word('перерезаемся', 7),
  plural2ndPerson: Word('перерезаетесь', 7),
  plural3rdPerson: Word('перерезаются', 7),
  masculinePast: Word('перерезался', 7),
  femininePast: Word('перерезалась', 7),
  neuterPast: Word('перерезалось', 7),
  pluralPast: Word('перерезались', 7),
  imperativeInformal: Word('перерезайся', 7),
  imperativeFormal: Word('перерезайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(перерезаться.name.text, перерезаться);

export { перерезаться };