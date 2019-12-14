import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const делиться: PerfectVerb = {
  name: Word('делиться', 3),
  singular1stPerson: Word('делюсь', 3),
  singular2ndPerson: Word('делишься', 1),
  singular3rdPerson: Word('делится', 1),
  plural1stPerson: Word('делимся', 1),
  plural2ndPerson: Word('делитесь', 1),
  plural3rdPerson: Word('делятся', 1),
  masculinePast: Word('делился', 3),
  femininePast: Word('делилась', 3),
  neuterPast: Word('делилось', 3),
  pluralPast: Word('делились', 3),
  imperativeInformal: Word('делись', 3),
  imperativeFormal: Word('делитесь', 3),
  imperfect: [],
};

perfectVerbs.set(делиться.name.text, делиться);

export { делиться };