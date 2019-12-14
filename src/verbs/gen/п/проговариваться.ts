import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проговариваться: PerfectVerb = {
  name: Word('проговариваться', 6),
  singular1stPerson: Word('проговариваюсь', 6),
  singular2ndPerson: Word('проговариваешься', 6),
  singular3rdPerson: Word('проговаривается', 6),
  plural1stPerson: Word('проговариваемся', 6),
  plural2ndPerson: Word('проговариваетесь', 6),
  plural3rdPerson: Word('проговариваются', 6),
  masculinePast: Word('проговаривался', 6),
  femininePast: Word('проговаривалась', 6),
  neuterPast: Word('проговаривалось', 6),
  pluralPast: Word('проговаривались', 6),
  imperativeInformal: Word('проговаривайся', 6),
  imperativeFormal: Word('проговаривайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(проговариваться.name.text, проговариваться);

export { проговариваться };