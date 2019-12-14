import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const тыкаться: PerfectVerb = {
  name: Word('тыкаться', 1),
  singular1stPerson: Word('тычусь', 1),
  singular2ndPerson: Word('тычешься', 1),
  singular3rdPerson: Word('тычется', 1),
  plural1stPerson: Word('тычемся', 1),
  plural2ndPerson: Word('тычетесь', 1),
  plural3rdPerson: Word('тычутся', 1),
  masculinePast: Word('тыкался', 1),
  femininePast: Word('тыкалась', 1),
  neuterPast: Word('тыкалось', 1),
  pluralPast: Word('тыкались', 1),
  imperativeInformal: Word('тычься', 1),
  imperativeFormal: Word('тычьтесь', 1),
  imperfect: [],
};

perfectVerbs.set(тыкаться.name.text, тыкаться);

export { тыкаться };