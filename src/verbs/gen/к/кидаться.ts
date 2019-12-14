import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кидаться: PerfectVerb = {
  name: Word('кидаться', 3),
  singular1stPerson: Word('кидаюсь', 3),
  singular2ndPerson: Word('кидаешься', 3),
  singular3rdPerson: Word('кидается', 3),
  plural1stPerson: Word('кидаемся', 3),
  plural2ndPerson: Word('кидаетесь', 3),
  plural3rdPerson: Word('кидаются', 3),
  masculinePast: Word('кидался', 3),
  femininePast: Word('кидалась', 3),
  neuterPast: Word('кидалось', 3),
  pluralPast: Word('кидались', 3),
  imperativeInformal: Word('кидайся', 3),
  imperativeFormal: Word('кидайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(кидаться.name.text, кидаться);

export { кидаться };