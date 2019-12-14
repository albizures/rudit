import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const законтрактовываться: PerfectVerb = {
  name: Word('законтрактовываться', 10),
  singular1stPerson: Word('законтрактовываюсь', 10),
  singular2ndPerson: Word('законтрактовываешься', 10),
  singular3rdPerson: Word('законтрактовывается', 10),
  plural1stPerson: Word('законтрактовываемся', 10),
  plural2ndPerson: Word('законтрактовываетесь', 10),
  plural3rdPerson: Word('законтрактовываются', 10),
  masculinePast: Word('законтрактовывался', 10),
  femininePast: Word('законтрактовывалась', 10),
  neuterPast: Word('законтрактовывалось', 10),
  pluralPast: Word('законтрактовывались', 10),
  imperativeInformal: Word('законтрактовывайся', 10),
  imperativeFormal: Word('законтрактовывайтесь', 10),
  imperfect: [],
};

perfectVerbs.set(законтрактовываться.name.text, законтрактовываться);

export { законтрактовываться };