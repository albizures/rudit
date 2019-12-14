import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рекомендоваться: PerfectVerb = {
  name: Word('рекомендоваться', 10),
  singular1stPerson: Word('рекомендуюсь', 8),
  singular2ndPerson: Word('рекомендуешься', 8),
  singular3rdPerson: Word('рекомендуется', 8),
  plural1stPerson: Word('рекомендуемся', 8),
  plural2ndPerson: Word('рекомендуетесь', 8),
  plural3rdPerson: Word('рекомендуются', 8),
  masculinePast: Word('рекомендовался', 10),
  femininePast: Word('рекомендовалась', 10),
  neuterPast: Word('рекомендовалось', 10),
  pluralPast: Word('рекомендовались', 10),
  imperativeInformal: Word('рекомендуйся', 8),
  imperativeFormal: Word('рекомендуйтесь', 8),
  imperfect: [],
};

perfectVerbs.set(рекомендоваться.name.text, рекомендоваться);

export { рекомендоваться };