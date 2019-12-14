import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приравниваться: PerfectVerb = {
  name: Word('приравниваться', 4),
  singular1stPerson: Word('приравниваюсь', 4),
  singular2ndPerson: Word('приравниваешься', 4),
  singular3rdPerson: Word('приравнивается', 4),
  plural1stPerson: Word('приравниваемся', 4),
  plural2ndPerson: Word('приравниваетесь', 4),
  plural3rdPerson: Word('приравниваются', 4),
  masculinePast: Word('приравнивался', 4),
  femininePast: Word('приравнивалась', 4),
  neuterPast: Word('приравнивалось', 4),
  pluralPast: Word('приравнивались', 4),
  imperativeInformal: Word('приравнивайся', 4),
  imperativeFormal: Word('приравнивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(приравниваться.name.text, приравниваться);

export { приравниваться };