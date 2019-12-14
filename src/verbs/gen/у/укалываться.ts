import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const укалываться: PerfectVerb = {
  name: Word('укалываться', 2),
  singular1stPerson: Word('укалываюсь', 2),
  singular2ndPerson: Word('укалываешься', 2),
  singular3rdPerson: Word('укалывается', 2),
  plural1stPerson: Word('укалываемся', 2),
  plural2ndPerson: Word('укалываетесь', 2),
  plural3rdPerson: Word('укалываются', 2),
  masculinePast: Word('укалывался', 2),
  femininePast: Word('укалывалась', 2),
  neuterPast: Word('укалывалось', 2),
  pluralPast: Word('укалывались', 2),
  imperativeInformal: Word('укалывайся', 2),
  imperativeFormal: Word('укалывайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(укалываться.name.text, укалываться);

export { укалываться };