import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const застояться: PerfectVerb = {
  name: Word('застояться', 5),
  singular1stPerson: Word('застоюсь', 5),
  singular2ndPerson: Word('застоишься', 5),
  singular3rdPerson: Word('застоится', 5),
  plural1stPerson: Word('застоимся', 5),
  plural2ndPerson: Word('застоитесь', 5),
  plural3rdPerson: Word('застоятся', 5),
  masculinePast: Word('застоялся', 5),
  femininePast: Word('застоялась', 5),
  neuterPast: Word('застоялось', 5),
  pluralPast: Word('застоялись', 5),
  imperativeInformal: Word('застойся', 4),
  imperativeFormal: Word('застойтесь', 4),
  imperfect: [],
};

perfectVerbs.set(застояться.name.text, застояться);

export { застояться };