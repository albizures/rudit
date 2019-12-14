import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отрекомендоваться: PerfectVerb = {
  name: Word('отрекомендоваться', 12),
  singular1stPerson: Word('отрекомендуюсь', 10),
  singular2ndPerson: Word('отрекомендуешься', 10),
  singular3rdPerson: Word('отрекомендуется', 10),
  plural1stPerson: Word('отрекомендуемся', 10),
  plural2ndPerson: Word('отрекомендуетесь', 10),
  plural3rdPerson: Word('отрекомендуются', 10),
  masculinePast: Word('отрекомендовался', 12),
  femininePast: Word('отрекомендовалась', 12),
  neuterPast: Word('отрекомендовалось', 12),
  pluralPast: Word('отрекомендовались', 12),
  imperativeInformal: Word('отрекомендуйся', 10),
  imperativeFormal: Word('отрекомендуйтесь', 10),
  imperfect: [],
};

perfectVerbs.set(отрекомендоваться.name.text, отрекомендоваться);

export { отрекомендоваться };