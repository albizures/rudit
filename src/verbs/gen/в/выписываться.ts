import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выписываться: PerfectVerb = {
  name: Word('выписываться', 3),
  singular1stPerson: Word('выписываюсь', 3),
  singular2ndPerson: Word('выписываешься', 3),
  singular3rdPerson: Word('выписывается', 3),
  plural1stPerson: Word('выписываемся', 3),
  plural2ndPerson: Word('выписываетесь', 3),
  plural3rdPerson: Word('выписываются', 3),
  masculinePast: Word('выписывался', 3),
  femininePast: Word('выписывалась', 3),
  neuterPast: Word('выписывалось', 3),
  pluralPast: Word('выписывались', 3),
  imperativeInformal: Word('выписывайся', 3),
  imperativeFormal: Word('выписывайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(выписываться.name.text, выписываться);

export { выписываться };