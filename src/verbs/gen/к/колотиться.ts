import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const колотиться: PerfectVerb = {
  name: Word('колотиться', 5),
  singular1stPerson: Word('колочусь', 5),
  singular2ndPerson: Word('колотишься', 3),
  singular3rdPerson: Word('колотится', 3),
  plural1stPerson: Word('колотимся', 3),
  plural2ndPerson: Word('колотитесь', 3),
  plural3rdPerson: Word('колотятся', 3),
  masculinePast: Word('колотился', 5),
  femininePast: Word('колотилась', 5),
  neuterPast: Word('колотилось', 5),
  pluralPast: Word('колотились', 5),
  imperativeInformal: Word('колотись', 5),
  imperativeFormal: Word('колотитесь', 5),
  imperfect: [],
};

perfectVerbs.set(колотиться.name.text, колотиться);

export { колотиться };