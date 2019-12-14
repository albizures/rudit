import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пузыриться: PerfectVerb = {
  name: Word('пузыриться', 5),
  singular1stPerson: Word('пузырюсь', 5),
  singular2ndPerson: Word('пузыришься', 5),
  singular3rdPerson: Word('пузырится', 5),
  plural1stPerson: Word('пузыримся', 5),
  plural2ndPerson: Word('пузыритесь', 5),
  plural3rdPerson: Word('пузырятся', 5),
  masculinePast: Word('пузырился', 5),
  femininePast: Word('пузырилась', 5),
  neuterPast: Word('пузырилось', 5),
  pluralPast: Word('пузырились', 5),
  imperativeInformal: Word('пузырись', 5),
  imperativeFormal: Word('пузыритесь', 5),
  imperfect: [],
};

perfectVerbs.set(пузыриться.name.text, пузыриться);

export { пузыриться };