import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кривиться: PerfectVerb = {
  name: Word('кривиться', 4),
  singular1stPerson: Word('кривлюсь', 5),
  singular2ndPerson: Word('кривишься', 4),
  singular3rdPerson: Word('кривится', 4),
  plural1stPerson: Word('кривимся', 4),
  plural2ndPerson: Word('кривитесь', 4),
  plural3rdPerson: Word('кривятся', 4),
  masculinePast: Word('кривился', 4),
  femininePast: Word('кривилась', 4),
  neuterPast: Word('кривилось', 4),
  pluralPast: Word('кривились', 4),
  imperativeInformal: Word('кривись', 4),
  imperativeFormal: Word('кривитесь', 4),
  imperfect: [],
};

perfectVerbs.set(кривиться.name.text, кривиться);

export { кривиться };