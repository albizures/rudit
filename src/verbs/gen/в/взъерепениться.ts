import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взъерепениться: PerfectVerb = {
  name: Word('взъерепениться', 7),
  singular1stPerson: Word('взъерепенюсь', 7),
  singular2ndPerson: Word('взъерепенишься', 7),
  singular3rdPerson: Word('взъерепенится', 7),
  plural1stPerson: Word('взъерепенимся', 7),
  plural2ndPerson: Word('взъерепенитесь', 7),
  plural3rdPerson: Word('взъерепенятся', 7),
  masculinePast: Word('взъерепенился', 7),
  femininePast: Word('взъерепенилась', 7),
  neuterPast: Word('взъерепенилось', 7),
  pluralPast: Word('взъерепенились', 7),
  imperativeInformal: Word('взъерепенься', 7),
  imperativeFormal: Word('взъерепеньтесь', 7),
  imperfect: [],
};

perfectVerbs.set(взъерепениться.name.text, взъерепениться);

export { взъерепениться };