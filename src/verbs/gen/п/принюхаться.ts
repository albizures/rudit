import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const принюхаться: PerfectVerb = {
  name: Word('принюхаться', 4),
  singular1stPerson: Word('принюхаюсь', 4),
  singular2ndPerson: Word('принюхаешься', 4),
  singular3rdPerson: Word('принюхается', 4),
  plural1stPerson: Word('принюхаемся', 4),
  plural2ndPerson: Word('принюхаетесь', 4),
  plural3rdPerson: Word('принюхаются', 4),
  masculinePast: Word('принюхался', 4),
  femininePast: Word('принюхалась', 4),
  neuterPast: Word('принюхалось', 4),
  pluralPast: Word('принюхались', 4),
  imperativeInformal: Word('принюхайся', 4),
  imperativeFormal: Word('принюхайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(принюхаться.name.text, принюхаться);

export { принюхаться };