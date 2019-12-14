import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const искривиться: PerfectVerb = {
  name: Word('искривиться', 6),
  singular1stPerson: Word('искривлюсь', 7),
  singular2ndPerson: Word('искривишься', 6),
  singular3rdPerson: Word('искривится', 6),
  plural1stPerson: Word('искривимся', 6),
  plural2ndPerson: Word('искривитесь', 6),
  plural3rdPerson: Word('искривятся', 6),
  masculinePast: Word('искривился', 6),
  femininePast: Word('искривилась', 6),
  neuterPast: Word('искривилось', 6),
  pluralPast: Word('искривились', 6),
  imperativeInformal: Word('искривись', 6),
  imperativeFormal: Word('искривитесь', 6),
  imperfect: [],
};

perfectVerbs.set(искривиться.name.text, искривиться);

export { искривиться };