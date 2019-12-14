import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const целиться: PerfectVerb = {
  name: Word('целиться', 1),
  singular1stPerson: Word('целюсь', 1),
  singular2ndPerson: Word('целишься', 1),
  singular3rdPerson: Word('целится', 1),
  plural1stPerson: Word('целимся', 1),
  plural2ndPerson: Word('целитесь', 1),
  plural3rdPerson: Word('целятся', 1),
  masculinePast: Word('целился', 1),
  femininePast: Word('целилась', 1),
  neuterPast: Word('целилось', 1),
  pluralPast: Word('целились', 1),
  imperativeInformal: Word('целься', 1),
  imperativeFormal: Word('цельтесь', 1),
  imperfect: ['прицелиться'],
};

perfectVerbs.set(целиться.name.text, целиться);

export { целиться };