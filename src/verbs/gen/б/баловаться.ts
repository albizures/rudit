import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const баловаться: PerfectVerb = {
  name: Word('баловаться', 5),
  singular1stPerson: Word('балуюсь', 3),
  singular2ndPerson: Word('балуешься', 3),
  singular3rdPerson: Word('балуется', 3),
  plural1stPerson: Word('балуемся', 3),
  plural2ndPerson: Word('балуетесь', 3),
  plural3rdPerson: Word('балуются', 3),
  masculinePast: Word('баловался', 5),
  femininePast: Word('баловалась', 5),
  neuterPast: Word('баловалось', 5),
  pluralPast: Word('баловались', 5),
  imperativeInformal: Word('балуйся', 3),
  imperativeFormal: Word('балуйтесь', 3),
  imperfect: [],
};

perfectVerbs.set(баловаться.name.text, баловаться);

export { баловаться };