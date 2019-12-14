import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const застроиться: PerfectVerb = {
  name: Word('застроиться', 5),
  singular1stPerson: Word('застроюсь', 5),
  singular2ndPerson: Word('застроишься', 5),
  singular3rdPerson: Word('застроится', 5),
  plural1stPerson: Word('застроимся', 5),
  plural2ndPerson: Word('застроитесь', 5),
  plural3rdPerson: Word('застроятся', 5),
  masculinePast: Word('застроился', 5),
  femininePast: Word('застроилась', 5),
  neuterPast: Word('застроилось', 5),
  pluralPast: Word('застроились', 5),
  imperativeInformal: Word('застройся', 5),
  imperativeFormal: Word('застройтесь', 5),
  imperfect: [],
};

perfectVerbs.set(застроиться.name.text, застроиться);

export { застроиться };