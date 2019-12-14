import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const причесаться: PerfectVerb = {
  name: Word('причесаться', 6),
  singular1stPerson: Word('причешусь', 6),
  singular2ndPerson: Word('причешешься', 4),
  singular3rdPerson: Word('причешется', 4),
  plural1stPerson: Word('причешемся', 4),
  plural2ndPerson: Word('причешетесь', 4),
  plural3rdPerson: Word('причешутся', 4),
  masculinePast: Word('причесался', 6),
  femininePast: Word('причесалась', 6),
  neuterPast: Word('причесалось', 6),
  pluralPast: Word('причесались', 6),
  imperativeInformal: Word('причешись', 6),
  imperativeFormal: Word('причешитесь', 6),
  imperfect: [],
};

perfectVerbs.set(причесаться.name.text, причесаться);

export { причесаться };