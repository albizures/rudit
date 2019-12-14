import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ужариваться: PerfectVerb = {
  name: Word('ужариваться', 2),
  singular1stPerson: Word('ужариваюсь', 2),
  singular2ndPerson: Word('ужариваешься', 2),
  singular3rdPerson: Word('ужаривается', 2),
  plural1stPerson: Word('ужариваемся', 2),
  plural2ndPerson: Word('ужариваетесь', 2),
  plural3rdPerson: Word('ужариваются', 2),
  masculinePast: Word('ужаривался', 2),
  femininePast: Word('ужаривалась', 2),
  neuterPast: Word('ужаривалось', 2),
  pluralPast: Word('ужаривались', 2),
  imperativeInformal: Word('ужаривайся', 2),
  imperativeFormal: Word('ужаривайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(ужариваться.name.text, ужариваться);

export { ужариваться };