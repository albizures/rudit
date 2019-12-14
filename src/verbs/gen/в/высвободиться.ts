import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const высвободиться: PerfectVerb = {
  name: Word('высвободиться', 1),
  singular1stPerson: Word('высвобожусь', 1),
  singular2ndPerson: Word('высвободишься', 1),
  singular3rdPerson: Word('высвободится', 1),
  plural1stPerson: Word('высвободимся', 1),
  plural2ndPerson: Word('высвободитесь', 1),
  plural3rdPerson: Word('высвободятся', 1),
  masculinePast: Word('высвободился', 1),
  femininePast: Word('высвободилась', 1),
  neuterPast: Word('высвободилось', 1),
  pluralPast: Word('высвободились', 1),
  imperativeInformal: Word('высвободись', 1),
  imperativeFormal: Word('высвободитесь', 1),
  imperfect: [],
};

perfectVerbs.set(высвободиться.name.text, высвободиться);

export { высвободиться };