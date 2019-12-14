import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const миловаться: PerfectVerb = {
  name: Word('миловаться', 5),
  singular1stPerson: Word('милуюсь', 3),
  singular2ndPerson: Word('милуешься', 3),
  singular3rdPerson: Word('милуется', 3),
  plural1stPerson: Word('милуемся', 3),
  plural2ndPerson: Word('милуетесь', 3),
  plural3rdPerson: Word('милуются', 3),
  masculinePast: Word('миловался', 5),
  femininePast: Word('миловалась', 5),
  neuterPast: Word('миловалось', 5),
  pluralPast: Word('миловались', 5),
  imperativeInformal: Word('милуйся', 3),
  imperativeFormal: Word('милуйтесь', 3),
  imperfect: [],
};

perfectVerbs.set(миловаться.name.text, миловаться);

export { миловаться };