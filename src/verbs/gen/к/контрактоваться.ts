import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const контрактоваться: PerfectVerb = {
  name: Word('контрактоваться', 10),
  singular1stPerson: Word('контрактуюсь', 8),
  singular2ndPerson: Word('контрактуешься', 8),
  singular3rdPerson: Word('контрактуется', 8),
  plural1stPerson: Word('контрактуемся', 8),
  plural2ndPerson: Word('контрактуетесь', 8),
  plural3rdPerson: Word('контрактуются', 8),
  masculinePast: Word('контрактовался', 10),
  femininePast: Word('контрактовалась', 10),
  neuterPast: Word('контрактовалось', 10),
  pluralPast: Word('контрактовались', 10),
  imperativeInformal: Word('контрактуйся', 8),
  imperativeFormal: Word('контрактуйтесь', 8),
  imperfect: [],
};

perfectVerbs.set(контрактоваться.name.text, контрактоваться);

export { контрактоваться };