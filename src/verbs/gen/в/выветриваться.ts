import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выветриваться: PerfectVerb = {
  name: Word('выветриваться', 3),
  singular1stPerson: Word('выветриваюсь', 3),
  singular2ndPerson: Word('выветриваешься', 3),
  singular3rdPerson: Word('выветривается', 3),
  plural1stPerson: Word('выветриваемся', 3),
  plural2ndPerson: Word('выветриваетесь', 3),
  plural3rdPerson: Word('выветриваются', 3),
  masculinePast: Word('выветривался', 3),
  femininePast: Word('выветривалась', 3),
  neuterPast: Word('выветривалось', 3),
  pluralPast: Word('выветривались', 3),
  imperativeInformal: Word('выветривайся', 3),
  imperativeFormal: Word('выветривайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(выветриваться.name.text, выветриваться);

export { выветриваться };