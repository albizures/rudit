import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подстригаться: PerfectVerb = {
  name: Word('подстригаться', 8),
  singular1stPerson: Word('подстригаюсь', 8),
  singular2ndPerson: Word('подстригаешься', 8),
  singular3rdPerson: Word('подстригается', 8),
  plural1stPerson: Word('подстригаемся', 8),
  plural2ndPerson: Word('подстригаетесь', 8),
  plural3rdPerson: Word('подстригаются', 8),
  masculinePast: Word('подстригался', 8),
  femininePast: Word('подстригалась', 8),
  neuterPast: Word('подстригалось', 8),
  pluralPast: Word('подстригались', 8),
  imperativeInformal: Word('подстригайся', 8),
  imperativeFormal: Word('подстригайтесь', 8),
  imperfect: [],
};

perfectVerbs.set(подстригаться.name.text, подстригаться);

export { подстригаться };