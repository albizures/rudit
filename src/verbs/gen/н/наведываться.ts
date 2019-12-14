import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наведываться: PerfectVerb = {
  name: Word('наведываться', 3),
  singular1stPerson: Word('наведываюсь', 3),
  singular2ndPerson: Word('наведываешься', 3),
  singular3rdPerson: Word('наведывается', 3),
  plural1stPerson: Word('наведываемся', 3),
  plural2ndPerson: Word('наведываетесь', 3),
  plural3rdPerson: Word('наведываются', 3),
  masculinePast: Word('наведывался', 3),
  femininePast: Word('наведывалась', 3),
  neuterPast: Word('наведывалось', 3),
  pluralPast: Word('наведывались', 3),
  imperativeInformal: Word('наведывайся', 3),
  imperativeFormal: Word('наведывайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(наведываться.name.text, наведываться);

export { наведываться };