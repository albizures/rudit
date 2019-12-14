import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const договориться: PerfectVerb = {
  name: Word('договориться', 7),
  singular1stPerson: Word('договорюсь', 7),
  singular2ndPerson: Word('договоришься', 7),
  singular3rdPerson: Word('договорится', 7),
  plural1stPerson: Word('договоримся', 7),
  plural2ndPerson: Word('договоритесь', 7),
  plural3rdPerson: Word('договорятся', 7),
  masculinePast: Word('договорился', 7),
  femininePast: Word('договорилась', 7),
  neuterPast: Word('договорилось', 7),
  pluralPast: Word('договорились', 7),
  imperativeInformal: Word('договорись', 7),
  imperativeFormal: Word('договоритесь', 7),
  imperfect: ['договариваться'],
};

perfectVerbs.set(договориться.name.text, договориться);

export { договориться };