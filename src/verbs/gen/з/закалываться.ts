import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закалываться: PerfectVerb = {
  name: Word('закалываться', 3),
  singular1stPerson: Word('закалываюсь', 3),
  singular2ndPerson: Word('закалываешься', 3),
  singular3rdPerson: Word('закалывается', 3),
  plural1stPerson: Word('закалываемся', 3),
  plural2ndPerson: Word('закалываетесь', 3),
  plural3rdPerson: Word('закалываются', 3),
  masculinePast: Word('закалывался', 3),
  femininePast: Word('закалывалась', 3),
  neuterPast: Word('закалывалось', 3),
  pluralPast: Word('закалывались', 3),
  imperativeInformal: Word('закалывайся', 3),
  imperativeFormal: Word('закалывайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(закалываться.name.text, закалываться);

export { закалываться };