import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поступаться: PerfectVerb = {
  name: Word('поступаться', 6),
  singular1stPerson: Word('поступаюсь', 6),
  singular2ndPerson: Word('поступаешься', 6),
  singular3rdPerson: Word('поступается', 6),
  plural1stPerson: Word('поступаемся', 6),
  plural2ndPerson: Word('поступаетесь', 6),
  plural3rdPerson: Word('поступаются', 6),
  masculinePast: Word('поступался', 6),
  femininePast: Word('поступалась', 6),
  neuterPast: Word('поступалось', 6),
  pluralPast: Word('поступались', 6),
  imperativeInformal: Word('поступайся', 6),
  imperativeFormal: Word('поступайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(поступаться.name.text, поступаться);

export { поступаться };