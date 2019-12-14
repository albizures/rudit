import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оглядываться: PerfectVerb = {
  name: Word('оглядываться', 3),
  singular1stPerson: Word('оглядываюсь', 3),
  singular2ndPerson: Word('оглядываешься', 3),
  singular3rdPerson: Word('оглядывается', 3),
  plural1stPerson: Word('оглядываемся', 3),
  plural2ndPerson: Word('оглядываетесь', 3),
  plural3rdPerson: Word('оглядываются', 3),
  masculinePast: Word('оглядывался', 3),
  femininePast: Word('оглядывалась', 3),
  neuterPast: Word('оглядывалось', 3),
  pluralPast: Word('оглядывались', 3),
  imperativeInformal: Word('оглядывайся', 3),
  imperativeFormal: Word('оглядывайтесь', 3),
  imperfect: ['оглянуться'],
};

perfectVerbs.set(оглядываться.name.text, оглядываться);

export { оглядываться };