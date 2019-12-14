import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const освободиться: PerfectVerb = {
  name: Word('освободиться', 7),
  singular1stPerson: Word('освобожусь', 7),
  singular2ndPerson: Word('освободишься', 7),
  singular3rdPerson: Word('освободится', 7),
  plural1stPerson: Word('освободимся', 7),
  plural2ndPerson: Word('освободитесь', 7),
  plural3rdPerson: Word('освободятся', 7),
  masculinePast: Word('освободился', 7),
  femininePast: Word('освободилась', 7),
  neuterPast: Word('освободилось', 7),
  pluralPast: Word('освободились', 7),
  imperativeInformal: Word('освободись', 7),
  imperativeFormal: Word('освободитесь', 7),
  imperfect: [],
};

perfectVerbs.set(освободиться.name.text, освободиться);

export { освободиться };