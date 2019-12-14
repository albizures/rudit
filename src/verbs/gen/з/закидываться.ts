import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закидываться: PerfectVerb = {
  name: Word('закидываться', 3),
  singular1stPerson: Word('закидываюсь', 3),
  singular2ndPerson: Word('закидываешься', 3),
  singular3rdPerson: Word('закидывается', 3),
  plural1stPerson: Word('закидываемся', 3),
  plural2ndPerson: Word('закидываетесь', 3),
  plural3rdPerson: Word('закидываются', 3),
  masculinePast: Word('закидывался', 3),
  femininePast: Word('закидывалась', 3),
  neuterPast: Word('закидывалось', 3),
  pluralPast: Word('закидывались', 3),
  imperativeInformal: Word('закидывайся', 3),
  imperativeFormal: Word('закидывайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(закидываться.name.text, закидываться);

export { закидываться };