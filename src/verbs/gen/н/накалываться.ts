import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const накалываться: PerfectVerb = {
  name: Word('накалываться', 3),
  singular1stPerson: Word('накалываюсь', 3),
  singular2ndPerson: Word('накалываешься', 3),
  singular3rdPerson: Word('накалывается', 3),
  plural1stPerson: Word('накалываемся', 3),
  plural2ndPerson: Word('накалываетесь', 3),
  plural3rdPerson: Word('накалываются', 3),
  masculinePast: Word('накалывался', 3),
  femininePast: Word('накалывалась', 3),
  neuterPast: Word('накалывалось', 3),
  pluralPast: Word('накалывались', 3),
  imperativeInformal: Word('накалывайся', 3),
  imperativeFormal: Word('накалывайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(накалываться.name.text, накалываться);

export { накалываться };