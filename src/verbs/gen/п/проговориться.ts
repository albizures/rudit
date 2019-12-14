import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проговориться: PerfectVerb = {
  name: Word('проговориться', 8),
  singular1stPerson: Word('проговорюсь', 8),
  singular2ndPerson: Word('проговоришься', 8),
  singular3rdPerson: Word('проговорится', 8),
  plural1stPerson: Word('проговоримся', 8),
  plural2ndPerson: Word('проговоритесь', 8),
  plural3rdPerson: Word('проговорятся', 8),
  masculinePast: Word('проговорился', 8),
  femininePast: Word('проговорилась', 8),
  neuterPast: Word('проговорилось', 8),
  pluralPast: Word('проговорились', 8),
  imperativeInformal: Word('проговорись', 8),
  imperativeFormal: Word('проговоритесь', 8),
  imperfect: [],
};

perfectVerbs.set(проговориться.name.text, проговориться);

export { проговориться };