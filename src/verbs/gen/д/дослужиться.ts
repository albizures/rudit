import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дослужиться: PerfectVerb = {
  name: Word('дослужиться', 6),
  singular1stPerson: Word('дослужусь', 6),
  singular2ndPerson: Word('дослужишься', 4),
  singular3rdPerson: Word('дослужится', 4),
  plural1stPerson: Word('дослужимся', 4),
  plural2ndPerson: Word('дослужитесь', 4),
  plural3rdPerson: Word('дослужатся', 4),
  masculinePast: Word('дослужился', 6),
  femininePast: Word('дослужилась', 6),
  neuterPast: Word('дослужилось', 6),
  pluralPast: Word('дослужились', 6),
  imperativeInformal: Word('дослужись', 6),
  imperativeFormal: Word('дослужитесь', 6),
  imperfect: [],
};

perfectVerbs.set(дослужиться.name.text, дослужиться);

export { дослужиться };