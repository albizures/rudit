import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уничтожаться: PerfectVerb = {
  name: Word('уничтожаться', 7),
  singular1stPerson: Word('уничтожаюсь', 7),
  singular2ndPerson: Word('уничтожаешься', 7),
  singular3rdPerson: Word('уничтожается', 7),
  plural1stPerson: Word('уничтожаемся', 7),
  plural2ndPerson: Word('уничтожаетесь', 7),
  plural3rdPerson: Word('уничтожаются', 7),
  masculinePast: Word('уничтожался', 7),
  femininePast: Word('уничтожалась', 7),
  neuterPast: Word('уничтожалось', 7),
  pluralPast: Word('уничтожались', 7),
  imperativeInformal: Word('уничтожайся', 7),
  imperativeFormal: Word('уничтожайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(уничтожаться.name.text, уничтожаться);

export { уничтожаться };