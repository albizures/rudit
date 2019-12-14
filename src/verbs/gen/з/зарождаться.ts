import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зарождаться: PerfectVerb = {
  name: Word('зарождаться', 6),
  singular1stPerson: Word('зарождаюсь', 6),
  singular2ndPerson: Word('зарождаешься', 6),
  singular3rdPerson: Word('зарождается', 6),
  plural1stPerson: Word('зарождаемся', 6),
  plural2ndPerson: Word('зарождаетесь', 6),
  plural3rdPerson: Word('зарождаются', 6),
  masculinePast: Word('зарождался', 6),
  femininePast: Word('зарождалась', 6),
  neuterPast: Word('зарождалось', 6),
  pluralPast: Word('зарождались', 6),
  imperativeInformal: Word('зарождайся', 6),
  imperativeFormal: Word('зарождайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(зарождаться.name.text, зарождаться);

export { зарождаться };