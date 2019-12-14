import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const свергаться: PerfectVerb = {
  name: Word('свергаться', 5),
  singular1stPerson: Word('свергаюсь', 5),
  singular2ndPerson: Word('свергаешься', 5),
  singular3rdPerson: Word('свергается', 5),
  plural1stPerson: Word('свергаемся', 5),
  plural2ndPerson: Word('свергаетесь', 5),
  plural3rdPerson: Word('свергаются', 5),
  masculinePast: Word('свергался', 5),
  femininePast: Word('свергалась', 5),
  neuterPast: Word('свергалось', 5),
  pluralPast: Word('свергались', 5),
  imperativeInformal: Word('свергайся', 5),
  imperativeFormal: Word('свергайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(свергаться.name.text, свергаться);

export { свергаться };