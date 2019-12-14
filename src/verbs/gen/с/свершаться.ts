import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const свершаться: PerfectVerb = {
  name: Word('свершаться', 5),
  singular1stPerson: Word('свершаюсь', 5),
  singular2ndPerson: Word('свершаешься', 5),
  singular3rdPerson: Word('свершается', 5),
  plural1stPerson: Word('свершаемся', 5),
  plural2ndPerson: Word('свершаетесь', 5),
  plural3rdPerson: Word('свершаются', 5),
  masculinePast: Word('свершался', 5),
  femininePast: Word('свершалась', 5),
  neuterPast: Word('свершалось', 5),
  pluralPast: Word('свершались', 5),
  imperativeInformal: Word('свершайся', 5),
  imperativeFormal: Word('свершайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(свершаться.name.text, свершаться);

export { свершаться };