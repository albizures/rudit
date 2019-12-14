import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const доползти: PerfectVerb = {
  name: Word('доползти', 7),
  singular1stPerson: Word('доползу', 6),
  singular2ndPerson: Word('доползёшь', 1),
  singular3rdPerson: Word('доползёт', 1),
  plural1stPerson: Word('доползём', 1),
  plural2ndPerson: Word('доползёте', 8),
  plural3rdPerson: Word('доползут', 6),
  masculinePast: Word('дополз', 3),
  femininePast: Word('доползла', 7),
  neuterPast: Word('доползло', 7),
  pluralPast: Word('доползли', 7),
  imperativeInformal: Word('доползи', 6),
  imperativeFormal: Word('доползите', 6),
  imperfect: [],
};

perfectVerbs.set(доползти.name.text, доползти);

export { доползти };