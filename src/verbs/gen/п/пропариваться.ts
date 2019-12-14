import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пропариваться: PerfectVerb = {
  name: Word('пропариваться', 4),
  singular1stPerson: Word('пропариваюсь', 4),
  singular2ndPerson: Word('пропариваешься', 4),
  singular3rdPerson: Word('пропаривается', 4),
  plural1stPerson: Word('пропариваемся', 4),
  plural2ndPerson: Word('пропариваетесь', 4),
  plural3rdPerson: Word('пропариваются', 4),
  masculinePast: Word('пропаривался', 4),
  femininePast: Word('пропаривалась', 4),
  neuterPast: Word('пропаривалось', 4),
  pluralPast: Word('пропаривались', 4),
  imperativeInformal: Word('пропаривайся', 4),
  imperativeFormal: Word('пропаривайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(пропариваться.name.text, пропариваться);

export { пропариваться };