import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const засекречиваться: PerfectVerb = {
  name: Word('засекречиваться', 6),
  singular1stPerson: Word('засекречиваюсь', 6),
  singular2ndPerson: Word('засекречиваешься', 6),
  singular3rdPerson: Word('засекречивается', 6),
  plural1stPerson: Word('засекречиваемся', 6),
  plural2ndPerson: Word('засекречиваетесь', 6),
  plural3rdPerson: Word('засекречиваются', 6),
  masculinePast: Word('засекречивался', 6),
  femininePast: Word('засекречивалась', 6),
  neuterPast: Word('засекречивалось', 6),
  pluralPast: Word('засекречивались', 6),
  imperativeInformal: Word('засекречивайся', 6),
  imperativeFormal: Word('засекречивайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(засекречиваться.name.text, засекречиваться);

export { засекречиваться };