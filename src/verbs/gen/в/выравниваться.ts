import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выравниваться: PerfectVerb = {
  name: Word('выравниваться', 3),
  singular1stPerson: Word('выравниваюсь', 3),
  singular2ndPerson: Word('выравниваешься', 3),
  singular3rdPerson: Word('выравнивается', 3),
  plural1stPerson: Word('выравниваемся', 3),
  plural2ndPerson: Word('выравниваетесь', 3),
  plural3rdPerson: Word('выравниваются', 3),
  masculinePast: Word('выравнивался', 3),
  femininePast: Word('выравнивалась', 3),
  neuterPast: Word('выравнивалось', 3),
  pluralPast: Word('выравнивались', 3),
  imperativeInformal: Word('выравнивайся', 3),
  imperativeFormal: Word('выравнивайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(выравниваться.name.text, выравниваться);

export { выравниваться };