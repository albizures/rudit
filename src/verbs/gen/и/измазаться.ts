import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const измазаться: PerfectVerb = {
  name: Word('измазаться', 3),
  singular1stPerson: Word('измажусь', 3),
  singular2ndPerson: Word('измажешься', 3),
  singular3rdPerson: Word('измажется', 3),
  plural1stPerson: Word('измажемся', 3),
  plural2ndPerson: Word('измажетесь', 3),
  plural3rdPerson: Word('измажутся', 3),
  masculinePast: Word('измазался', 3),
  femininePast: Word('измазалась', 3),
  neuterPast: Word('измазалось', 3),
  pluralPast: Word('измазались', 3),
  imperativeInformal: Word('измажься', 3),
  imperativeFormal: Word('измажьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(измазаться.name.text, измазаться);

export { измазаться };