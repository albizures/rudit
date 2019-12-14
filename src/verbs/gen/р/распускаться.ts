import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распускаться: PerfectVerb = {
  name: Word('распускаться', 7),
  singular1stPerson: Word('распускаюсь', 7),
  singular2ndPerson: Word('распускаешься', 7),
  singular3rdPerson: Word('распускается', 7),
  plural1stPerson: Word('распускаемся', 7),
  plural2ndPerson: Word('распускаетесь', 7),
  plural3rdPerson: Word('распускаются', 7),
  masculinePast: Word('распускался', 7),
  femininePast: Word('распускалась', 7),
  neuterPast: Word('распускалось', 7),
  pluralPast: Word('распускались', 7),
  imperativeInformal: Word('распускайся', 7),
  imperativeFormal: Word('распускайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(распускаться.name.text, распускаться);

export { распускаться };